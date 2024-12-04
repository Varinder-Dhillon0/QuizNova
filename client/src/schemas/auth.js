import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("required"),
    password: Yup.string()
        .min(6, "must be at least 6 characters")
        .required("required"),
});

export const registerValidationSchema = Yup.object({
	firstname: Yup.string()
		.required("required")
		.min(2, "must be at least 2 characters"),
	lastname: Yup.string()
		.required("required")
		.min(2, "must be at least 2 characters"),
	email: Yup.string()
		.email("Invalid Email")
		.required("required"),
	password: Yup.string()
		.min(6, "must be at least 6 characters")
		.required("required"),
});