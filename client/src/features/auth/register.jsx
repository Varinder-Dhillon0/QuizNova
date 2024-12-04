import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useToast } from "../../hooks/useToast";
import RightBanner from "./components/rightBanner";
import { registerValidationSchema } from "../../schemas/auth";
import Input from "./components/input";
import { useRegister } from "./api/register";

export default function Register() {
	const showToast = useToast();
	const [msg, setMsg] = useState("");

	const { mutate: registerMutation, isPending } = useRegister({
		onSuccess: (data) => {
			if (data.success) {
				setMsg(data.success);
				formik.resetForm();
			}
			if (data.warning) {
				setMsg(data.warning);
				formik.resetForm();
			}
			if (data.error) {
				showToast(2, data.error)
			}
		},
		onError: (error) => {
			console.log("Error occurred:", error);
			showToast(2, error)
		},
	});

	const formik = useFormik({
		initialValues: {
			firstname: "",
			lastname: "",
			email: "",
			password: "",
		},
		validationSchema: registerValidationSchema,
		onSubmit: (values) => {
			registerMutation(values);
		},
	});

	return (
		<div className="main-wrapper flex h-screen">
			<div className="left-container bg-black w-1/2 flex items-center justify-center">
				<div className="min-h-[570px] min-w-[555px] bg-[#212121] flex flex-col items-center justify-center mx-auto my-auto p-8 rounded-2xl">
					<form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
						<h1 className="text-white font-Satoshi-Bold text-3xl mb-6 text-center">
							Create an Account
						</h1>

						<div className="flex flex-col gap-4 w-full mb-4">
							{/* Name Fields */}
							<div className="w-full flex justify-between">
								<div className="w-[47%]">
									<Input
										name="firstname"
										type="text"
										placeholder="First Name*"
										formik={formik}
									/>
								</div>

								<div className="w-[47%]">
									<Input
										name="lastname"
										type="text"
										placeholder="Last Name*"
										formik={formik}
									/>
								</div>
							</div>

							{/* Email Field */}
							<Input
								name="email"
								type="email"
								placeholder="E-mail address*"
								formik={formik}
							/>

							{/* Password Field */}
							<Input
								name="password"
								type="password"
								placeholder="Password*"
								formik={formik}
							/>

						</div>
						{/* Submit Button */}
						<button
							type="submit"
							className="text-black font-Satoshi-Bold mb-4 text-md rounded-full bg-[#caef45] px-40 py-4"
							disabled={isPending}
						>
							{isPending ? "Loading" : "REGISTER"}
						</button>

						<h1 className="text-white mb-2 mt-2 text-center">
							Already have an account?
							<Link to="/login" className="text-[#caef45] ml-1">
								Login
							</Link>
							<p className="text-red-500 text-center mt-3 text-base font-Satoshi-Medium">
								{msg}
							</p>
						</h1>
					</form>
				</div>
			</div>
			<RightBanner />
		</div>
	);
}