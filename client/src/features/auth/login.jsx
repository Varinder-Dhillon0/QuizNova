import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { useAuth } from "../../hooks/useAuth";
import RightBanner from "./components/rightBanner";
import { loginValidationSchema } from "../../schemas/auth";
import Input from "./components/input";
import { useLogin } from "./api/login";

export default function Login() {
    const navigate = useNavigate();
    const Toast = useToast();
    const { setLoggedin, setUser } = useAuth();

    const { mutate: loginMutation, isPending } = useLogin({
        onSuccess: (data) => {
            if (data.success) {
                setUser({ name: data.name, email: data.email });
                setLoggedin(true);
                Toast(0, data.success, 3000);
                navigate("/");
            }
            else if (data.warning) {
                Toast(1, data.warning, 3000);
            }
            else if (data.error) {
                Toast(2, data.error, 3000);
            }
        },
        onError: (error) => {
            console.log("Error occurred:", error);
            Toast(2, data.success, 3000);
        },
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            loginMutation(values);
        },
    });

    return (
        <div className="main-wrapper flex h-screen relative z-10">
            <div className="left-container bg-black w-1/2 flex items-center justify-center">
                <div className="min-h-[570px] min-w-[555px] bg-[#212121] flex flex-col items-center justify-center mx-auto my-auto p-8 rounded-2xl">
                    <form
                        className="flex flex-col items-center justify-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 className="text-white font-Satoshi-Bold text-3xl mb-6">
                            Welcome back
                        </h1>
                        <button className="text-white font-sans text-md border border-[#caef45] rounded-full px-40 py-4 mb-4">
                            SIGN IN VIA GOOGLE
                        </button>
                        <h1 className="font-Satoshi-Regular text-white w-full mb-4">
                            <span className="text-[#646464]">
                                ---------------------------------{" "}
                            </span>
                            <span className="font-Satoshi-Medium">OR</span> 
                            <span className="text-[#646464]">
                                {" "}
                                ---------------------------------
                            </span>
                        </h1>

                        <div className="flex flex-col gap-4 w-full mb-4">
                            <Input name={"email"} type="email" placeholder="E-mail address*" formik={formik} />
                            <Input name={"password"} type="password" placeholder="Password*" formik={formik} />
                        </div>

                        <button
                            type="submit"
                            className="text-black font-Satoshi-Bold text-md rounded-full bg-[#caef45] px-52 py-4 mb-4"
                            disabled={isPending}
                        >
                            {isPending ? "Loading" : "SIGN IN"}
                        </button>

                        <h1 className="text-white mb-2">
                            Don't have an account?
                            <Link
                                to="/register"
                                className="text-[#caef45] ml-1"
                            >
                                Register
                            </Link>
                        </h1>

                        <a href="#" className="text-[#caef45]">
                            Forgot Password?
                        </a>
                    </form>
                </div>
            </div>

            <RightBanner />


        </div>
    );
}
