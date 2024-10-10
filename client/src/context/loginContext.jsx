import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const LoginContext = createContext();


export default function LoginProvider({children}){

    const [loggedin , setLoggedin] = useState(false);
    const [user , setUser] = useState({name : "" , email : ""});

    const {mutate : authenticateMutation , isPending} = useMutation({
        mutationFn : async (token) =>{
            const res = await axios.post("http://localhost:5000/validateuser" , {token : token});
            return res.data;
        },
        onSuccess : (data) => {
            if(data.success){
                setUser({name : data.name , email : data.email});
                setLoggedin(true);
                console.log(data);
            }
            if(data.error){
                console.log(data.error);
            }
        },
        onError : (data) =>{
            console.log(data);
        }
    })

    useEffect(()=>{
        const token = Cookies.get("token");
        if(token){
            authenticateMutation(token);
        }
    },[])

    const logout = () =>{
        Cookies.remove("token");
        console.log("logged out successfully");
        
    }

    return(
        <LoginContext.Provider value={{loggedin, setLoggedin , user}}>
            {children}
        </LoginContext.Provider>
    ) 
}
