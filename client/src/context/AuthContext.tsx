import { createContext, useEffect, useState, type ReactNode } from "react";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "../hooks/useToast";

export const AuthContext = createContext<any>({});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const Toast = useToast();
  const [loggedin, setLoggedin] = useState(true);
  const [user, setUser] = useState({
    name: "varinder",
    email: "",
    profile_pic: "",
    randomSeed: 0,
  });
  const [loading, setLoading] = useState(true);

  const { mutate: authenticateMutation } = useMutation({
    mutationFn: async (token: string) => {
      const res = await axios.post("http://localhost:5000/validateuser", {
        token: token,
      });
      return res.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        setUser({
          name: data.name,
          email: data.email,
          profile_pic: data.profile_pic,
          randomSeed: data.randomSeed,
        });
        setLoggedin(true);
        console.log(data.success);
      }
      if (data.error) {
        Cookies.remove("token");
        console.log(data.error);
      }
      setLoading(false);
    },
    onError: (data) => {
      console.log(data);
      setLoading(false);
    },
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      authenticateMutation(token);
    } else {
      setLoading(false);
    }
  }, []);

  const logout = () => {
    Cookies.remove("token");
    setLoggedin(false);
    setUser({ name: "", email: "", profile_pic: "", randomSeed: 0 });
    Toast(2, "Logged out!", 3000);
  };

  return (
    <AuthContext.Provider
      value={{ loggedin, setLoggedin, setUser, user, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
