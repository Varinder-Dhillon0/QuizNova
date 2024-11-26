import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Logo2 from "../assets/img/logo2.png";
import { useToast } from "../hooks/useToast";

// Validation schema for fields 
const userValidationSchema = Yup.object({
	firstname: Yup.string()
		.required("required")
		.min(2, "First Name must be at least 2 characters"),
	lastname: Yup.string()
		.required("required")
		.min(2, "Last Name must be at least 2 characters"),
	email: Yup.string()
		.email("Email is invalid")
		.required("required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("required"),
});

export default function Register() {

	const showToast = useToast();
	const [msg, setMsg] = useState("");

	const { mutate: userMutation, isPending } = useMutation({
		mutationFn: async (values) => {
			const res = await axios.post("http://localhost:5000/register", values, { withCredentials: true });
			return res.data;
		},
		onSuccess: (data) => {
			if (data.success) {
				setMsg(data.warning);
				formik.resetForm();
			}
			if (data.warning) {
				setMsg(data.warning);
				formik.resetForm();
			}
			if (data.error) {
				showToast(2 , data.warning)
			}
		},
		onError: (error) => {
			console.log("Error occurred:", error);
		},
	});

	// Formik form handling
	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
		},
		validationSchema: userValidationSchema,
		onSubmit: (values) => {
			userMutation(values);
		},
	});

	// Helper function to conditionally render error messages
	const renderError = (field) => {
		return formik.touched[field] && formik.errors[field] && formik.errors[field] !== "required" ? (
			<div className="flex items-center mt-[3px] mb-2">
				<BsFillExclamationDiamondFill fill="red" size={12.5} />
				<p className="text-red-500 text-xs ml-[7px]">{formik.errors[field]}</p>
			</div>
		) : null;
	};

	return (
		<div className="main-wrapper flex h-[120vh]">
			<div className="left-container bg-black w-1/2 flex items-center justify-center">
			<div className="flex absolute items-center justify-center gap-2 left-16 top-10">
                <img src={Logo2} alt="" className="h-6 w-6" />
                <h1 className="text-white font-Satoshi-Bold leading-none text-3xl">
                    QuizNova
                </h1>
            </div>
				<div className="min-h-[570px] min-w-[555px] bg-[#111827] flex flex-col items-center justify-center mx-auto my-auto p-8 rounded-2xl">
					<form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
						<h1 className="text-white font-Satoshi-Bold text-4xl mb-6 text-center">
							Create an Account
						</h1>

						{/* Name Field */}
						<div className="w-full flex gap-4">
							<div className="w-1/2">
								<input
									type="text"
									name="firstname"
									placeholder="First Name*"
									className={`bg-gray-800 text-white mb-4 p-3 text-[15px] font-Satoshi-Regular rounded w-full outline-none ${formik.touched.firstname && formik.errors.firstname && "border-red-500 border-[1px]"}`}
									{...formik.getFieldProps('firstname')}
								/>
								{renderError('firstname')}
							</div>

							<div className="w-1/2">
								<input
									type="text"
									name="lastname"
									placeholder="Last Name*"
									className={`bg-gray-800 text-white mb-4 p-3 text-[15px] font-Satoshi-Regular rounded w-full outline-none ${formik.touched.lastname && formik.errors.lastname && "border-red-500 border-[1px]"}`}
									{...formik.getFieldProps('lastname')}
								/>
								{renderError('lastname')}
							</div>
						</div>

						{/* Email Field */}
						<input
							type="email"
							name="email"
							placeholder="E-mail address*"
							className={`bg-gray-800 text-white mb-4 p-3 text-[15px] font-Satoshi-Regular rounded w-full outline-none ${formik.touched.email && formik.errors.email && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('email')}
						/>
						{renderError('email')}

						{/* Password Field */}
						<input
							type="password"
							name="password"
							placeholder="Password*"
							className={`bg-gray-800 text-white mb-4 p-3 text-[15px] font-Satoshi-Regular rounded w-full outline-none ${formik.touched.password && formik.errors.password && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('password')}
						/>
						{renderError('password')}

						{/* Submit Button */}
						<button
							type="submit"
							className="text-black font-Satoshi-Bold mb-4 text-md rounded-full bg-[#caef45] px-40 py-4"
							disabled={isPending}
						>
							{isPending ? "Loading" : "REGISTER"}
						</button>

						<h1 className="text-white mb-2 text-center">
							Already have an account?
							<Link to="/login" className="text-[#caef45] ml-1">
								Login
							</Link>
							<p className="text-red-500 text-center mt-3 text-base font-Satoshi-Medium">{msg}</p>
						</h1>
					</form>
				</div>
			</div>

			<div className="right-container bg-white w-1/2 h-full">
				<div className="right-wrapper w-3/4 flex flex-col mx-auto my-auto px-12 py-24 gap-8">
					<div className="content flex gap-5">
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png"
							alt=""
							className="w-16 h-16 object-contain"
						/>
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">
								Boost your Payments
							</h1>
							<p>
								On top of all that, we takes care of other
								common issues such as missing system-fonts,
								missing. Increased conversion and expansion on
								new markets
							</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png"
							alt=""
							className="w-16 h-16 object-contain"
						/>
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">
								Boost your Payments
							</h1>
							<p>
								On top of all that, we takes care of other
								common issues such as missing system-fonts,
								missing. Increased conversion and expansion on
								new markets
							</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png"
							alt=""
							className="w-16 h-16 object-contain"
						/>
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">
								Boost your Payments
							</h1>
							<p>
								On top of all that, we takes care of other
								common issues such as missing system-fonts,
								missing. Increased conversion and expansion on
								new markets
							</p>
						</div>
					</div>
					<div className="content flex gap-5">
						<img
							src="https://assets.website-files.com/623865af2eee366912508587/62387f9ffc386a444ec10114_image%2070.png"
							alt=""
							className="w-16 h-16 object-contain"
						/>
						<div className="sub-content flex flex-col gap-2">
							<h1 className="font-Satoshi-Bold text-2xl">
								Boost your Payments
							</h1>
							<p>
								On top of all that, we takes care of other
								common issues such as missing system-fonts,
								missing. Increased conversion and expansion on
								new markets
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
