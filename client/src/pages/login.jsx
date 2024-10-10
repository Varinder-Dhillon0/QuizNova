import React from "react";
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const userValidationSchema = Yup.object({
    email : Yup.string().email("Email is invalid").required("required"),
    password : Yup.string().min(6, "Password must be at least 6 characters").required("required")
});

export default function Login() {

    const {mutate : userMutation , isPending} = useMutation({
        mutationFn : async(values) =>{
            const res = await axios.post("http://localhost:5000/login", values, {withCredentials : true});
            return res.data; 
        },
        onSuccess: (data) => {
			if (data.success) {
				console.log("Success:", data.success);
			}
			if (data.warning) {
				console.log("Warning:", data.warning);
			}
			if (data.error) {
				console.log("Error:", data.error);
			}
		},
		onError: (error) => {
			console.log("Error occurred:", error);
		}
    })

    const formik = useFormik({initialValues :{
        email : "",
        password : ""
    } ,
    validationSchema : userValidationSchema ,
    onSubmit : (values) =>{
        userMutation(values);
    }})

	const renderError = (field) => {
		return formik.touched[field] && formik.errors[field] && formik.errors[field] !== "required" ? (
			<div className="flex items-center mt-[3px] mb-2">
				<BsFillExclamationDiamondFill fill="red" size={12.5} />
				<p className="text-red-500 text-xs ml-[7px]">{formik.errors[field]}</p>
			</div>
		) : null;
	};

    return (    
        <div className="main-wrapper flex h-full">
            <div className="left-container bg-black w-1/2 flex items-center justify-center">
                <div className="max-h-[520px] max-w-[520px] bg-gray-900 flex flex-col items-center justify-center mx-auto my-auto p-8 rounded-2xl">
                    <form className="flex flex-col items-center justify-center" onSubmit={formik.handleSubmit}>
                        <h1 className="text-white font-Satoshi-Bold text-4xl mb-6">
                            Welcome back
                        </h1>
                        <button className="text-white font-sans text-md border border-[#caef45] rounded-full px-28 py-4 mb-4">
                            SIGN IN VIA GOOGLE
                        </button>
                        <h1 className="font-Satoshi-Bold text-white mb-4">OR</h1>
                        <input
                            type="email"
                            placeholder="E-mail address*"
                            className={`bg-gray-800 text-white p-3 rounded mb-4 w-full outline-none ${formik.touched.email && formik.errors.email && "border-red-500 border-[1px]"}`}
                            {...formik.getFieldProps("email")}
                        />
                        {renderError("email")}

                        <input
                            type="password"
                            placeholder="Password*"
                            className={`bg-gray-800 text-white p-3 rounded mb-4 w-full outline-none ${formik.touched.password && formik.errors.password && "border-red-500 border-[1px]"}`}
                            {...formik.getFieldProps("password")}
                        />
                        {renderError("password")}

                        <button type="submit" className="text-black font-Satoshi-Bold text-md rounded-full bg-[#caef45] px-40 py-4 mb-4" disabled={isPending}>
                            {isPending ? "Loading" : "SIGN IN"}
                        </button>
                        <h1 className="text-white mb-2">
                            Don't have an account?
                            <Link to="/register" className="text-[#caef45] ml-1">Register</Link>
                        </h1>
                        <a href="#" className="text-[#caef45]">Forgot Password?</a>
                    </form>
                </div>
            </div>
            <div className="right-container bg-white w-1/2 h-full">
				<div className="right-wrapper w-3/4 flex flex-col mx-auto my-auto px-12 py-24 gap-8">
					<div className="content flex gap-5">
						<img src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png" alt="" className="w-16 h-16 object-contain" />
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">Boost your Payments</h1>
							<p>On top of all that, we takes care of other common issues such as missing system-fonts, missing. Increased conversion and expansion on new markets</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png" alt="" className="w-16 h-16 object-contain" />
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">Boost your Payments</h1>
							<p>On top of all that, we takes care of other common issues such as missing system-fonts, missing. Increased conversion and expansion on new markets</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png" alt="" className="w-16 h-16 object-contain" />
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">Boost your Payments</h1>
							<p>On top of all that, we takes care of other common issues such as missing system-fonts, missing. Increased conversion and expansion on new markets</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png" alt="" className="w-16 h-16 object-contain" />
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">Boost your Payments</h1>
							<p>On top of all that, we takes care of other common issues such as missing system-fonts, missing. Increased conversion and expansion on new markets</p>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
}
