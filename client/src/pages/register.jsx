import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// Validation schema for fields 
const userValidationSchema = Yup.object({
	name: Yup.string()
		.required("required")
		.min(2, "Name must be at least 2 characters"),
	email: Yup.string()
		.email("Email is invalid")
		.required("required"),
	password: Yup.string()
		.min(6, "Password must be at least 6 characters")
		.required("required"),
	dob: Yup.date().required("required"),
	mobile: Yup.string()
		.matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
		.required("required"),
	gender: Yup.string().required("required"),
});

export default function Register() {

	const { mutate: userMutation, isPending } = useMutation({
		mutationFn: async (values) => {
			const res = await axios.post("http://localhost:5000/register", values, { withCredentials: true });
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
		},
	});

	// Formik form handling
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			dob: "",
			mobile: "",
			gender: "",
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
		<div className="main-wrapper flex">
			<div className="left-container bg-black w-1/2 flex items-center justify-center">
				<div className="min-h-[520px] min-w-[520px] bg-gray-900 flex flex-col items-center mx-auto my-auto p-8 rounded-2xl">
					<form onSubmit={formik.handleSubmit} className="flex flex-col">
						<h1 className="text-white font-Satoshi-Bold text-4xl mb-6 text-center">
							Create an Account
						</h1>

						{/* Name Field */}
						<input
							type="text"
							name="name"
							placeholder="Enter your name*"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.name && formik.errors.name && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('name')}
						/>
						{renderError('name')}

						{/* Email Field */}
						<input
							type="email"
							name="email"
							placeholder="E-mail address*"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.email && formik.errors.email && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('email')}
						/>
						{renderError('email')}

						{/* Password Field */}
						<input
							type="password"
							name="password"
							placeholder="Password*"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.password && formik.errors.password && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('password')}
						/>
						{renderError('password')}

						{/* Date of Birth Field */}
						<input
							type="date"
							name="dob"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.dob && formik.errors.dob && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('dob')}
						/>	
						{renderError('dob')}

						{/* Mobile Number Field */}
						<input
							type="text"
							name="mobile"
							placeholder="Enter your mobile number*"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.mobile && formik.errors.mobile && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('mobile')}
						/>
						{renderError('mobile')}

						{/* Gender Field */}
						<input
							type="text"
							name="gender"
							placeholder="Enter your gender*"
							className={`bg-gray-800 text-white p-[10px] text-[15px] font-Satoshi-Regular rounded mt-2 w-full outline-none ${formik.touched.gender && formik.errors.gender && "border-red-500 border-[1px]"}`}
							{...formik.getFieldProps('gender')}
						/>
						{renderError('gender')}

						{/* Submit Button */}
						<button
							type="submit"
							className="text-black font-Satoshi-Bold text-md rounded-full bg-[#caef45] px-40 py-4 mb-4 mt-4"
							disabled={isPending}
						>
							{isPending ? "Loading" : "REGISTER"}
						</button>

						<h1 className="text-white mb-2">
							Already have an account?
							<Link to="/login" className="text-[#caef45] ml-1">
								Login
							</Link>
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
