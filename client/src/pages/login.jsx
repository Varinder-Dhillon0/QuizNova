import React from "react";
import Logo2 from "../assets/img/logo2.png";
import blueglowLogin from "../assets/img/blueglowLogin.png";
import greenGlowLogin from "../assets/img/greenGlowLogin.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/useToast";
import { useAuth } from "../hooks/useAuth";
import Pie from "../assets/img/pie.png";
import CreateQuiz from "../assets/img/createQuiz.png";
import Pin from "../assets/img/pin.png";

const userValidationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("required"),
});

export default function Login() {
    const navigate = useNavigate();
    const Toast = useToast();
    const { setLoggedin, setUser } = useAuth();

    const { mutate: userMutation, isPending } = useMutation({
        mutationFn: async (values) => {
            const res = await axios.post(
                "http://localhost:5000/login",
                values,
                { withCredentials: true }
            );
            return res.data;
        },
        onSuccess: (data) => {
            if (data.success) {
                navigate("/");
                setLoggedin(true);
                setUser({ name: data.name, email: data.email });
                console.log(data);
                Toast(0, data.success, 3000);
            }
            if (data.warning) {
                Toast(1, data.warning, 3000);
                console.log(data.success);
            }
            if (data.error) {
                Toast(2, data.error, 3000);
                console.log(data.success);
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
        validationSchema: userValidationSchema,
        onSubmit: (values) => {
            userMutation(values);
        },
    });

    const renderError = (field) => {
        return formik.touched[field] &&
            formik.errors[field] &&
            formik.errors[field] !== "required" ? (
            <div className="flex items-center mt-[3px] mb-2">
                <BsFillExclamationDiamondFill fill="red" size={12.5} />
                <p className="text-red-500 text-xs ml-[7px]">
                    {formik.errors[field]}
                </p>
            </div>
        ) : null;
    };

    return (
        <div className="main-wrapper flex h-[120vh] relative z-10">
            <div className="flex absolute items-center justify-center gap-2 left-16 top-16">
                <img src={Logo2} alt="" className="h-6 w-6" />
                <h1 className="text-white font-Satoshi-Bold leading-none text-3xl">
                    QuizNova
                </h1>
            </div>
            <div className="left-container bg-black w-1/2 flex items-center justify-center">
                <div className="min-h-[570px] min-w-[555px] bg-[#111827] flex flex-col items-center justify-center mx-auto my-auto p-8 rounded-2xl">
                    <form
                        className="flex flex-col items-center justify-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 className="text-white font-Satoshi-Bold text-4xl mb-6">
                            Welcome back
                        </h1>
                        <button className="text-white font-sans text-md border border-[#caef45] rounded-full px-40 py-4 mb-4">
                            SIGN IN VIA GOOGLE
                        </button>
                        <h1 className="font-Satoshi-Bold text-white mb-4">
                            <span className="text-gray-600">
                                -----------------------------{" "}
                            </span>
                            OR
                            <span className="text-gray-600">
                                {" "}
                                -----------------------------
                            </span>
                        </h1>
                        <input
                            type="email"
                            placeholder="E-mail address*"
                            className={`bg-gray-800 text-white p-3 rounded mb-4 w-full outline-none ${
                                formik.touched.email &&
                                formik.errors.email &&
                                "border-red-500 border-[1px]"
                            }`}
                            {...formik.getFieldProps("email")}
                        />
                        {renderError("email")}

                        <input
                            type="password"
                            placeholder="Password*"
                            className={`bg-gray-800 text-white p-3 rounded mb-4 w-full outline-none ${
                                formik.touched.password &&
                                formik.errors.password &&
                                "border-red-500 border-[1px]"
                            }`}
                            {...formik.getFieldProps("password")}
                        />
                        {renderError("password")}

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
            <div className="right-container bg-white w-1/2 h-full flex items-center overflow-hidden justify-center relative">
                <img
                    src={blueglowLogin}
                    alt=""
                    className="absolute right-[-155px] bottom-[-369px] w-auto h-auto"
                />
                <img
                    src={greenGlowLogin}
                    alt=""
                    className="absolute right-[-508px] bottom-[-302px] w-auto h-auto"
                />
                <img
                    src="https://assets.website-files.com/623865af2eee366912508587/6241b2d41327941b39683db0_Peach%20Gradient%20Image%20(1)-p-800.png"
                    alt=""
                    className="absolute w-72 h-72 bottom-[190px] opacity-85 z-0"
                />

                <div className="right-wrapper w-3/4 flex flex-col px-12 gap-10">
                    <div className="content flex gap-5">
                        <img
                            src={CreateQuiz}
                            alt=""
                            className="w-16 h-16 object-contain"
                        />
                        <div className="sub-content flex flex-col gap-1">
                            <h1 className="font-Satoshi-Bold text-2xl">
                                Create Your Quizzes
                            </h1>
                            <p className="font-Satoshi-Medium text-md text-gray-800">
                                Design custom quizzes with ease and upload them
                                to share with others. Customize your quizzes
                                with various question types to make them
                                engaging.
                            </p>
                        </div>
                    </div>
                    <div className="content flex gap-5">
                        <img
                            src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png"
                            alt=""
                            className="w-16 h-16 object-contain"
                        />
                        <div className="sub-content flex flex-col gap-1">
                            <h1 className="font-Satoshi-Bold text-2xl">
                                Challenge Yourself
                            </h1>
                            <p className="font-Satoshi-Medium text-md text-gray-800">
                                Explore a wide range of quizzes crafted by the
                                community and test your knowledge. Discover
                                quizzes across diverse topics and levels.
                            </p>
                        </div>
                    </div>
                    <div className="content flex gap-5">
                        <img
                            src={Pie}
                            alt=""
                            className="w-14 h-14 object-contain"
                        />
                        <div className="sub-content flex flex-col gap-1">
                            <h1 className="font-Satoshi-Bold text-2xl">
                                Track Your Progress
                            </h1>
                            <p className="font-Satoshi-Medium text-md text-gray-800">
                                Monitor your performance with detailed stats and
                                stay motivated to improve. Analyze your
                                weaknesses to focus on areas that need
                                attention.
                            </p>
                        </div>
                    </div>
                    <div className="content flex gap-5">
                        <img
                            src={Pin}
                            alt=""
                            className="w-14 h-14 object-contain"
                        />
                        <div className="sub-content flex flex-col gap-1">
                            <h1 className="font-Satoshi-Bold text-2xl">
                                Instant Results
                            </h1>
                            <p className="font-Satoshi-Medium text-md text-gray-800">
                                Receive quick and accurate results for every
                                quiz you attempt, complete with feedback!
                                Compare your scores with others and climb the
                                leaderboard.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
