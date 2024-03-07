import * as Yup from "yup";
// -------------- sign up page --------------
const signupValidation = Yup.object({
	fname: Yup.string()
		.min(1, "First name is too short")
		.max(20, "First name is too long")
		.required("Please enter your first name"),
	lname: Yup.string()
		.min(1, "Last name is too short")
		.max(20, "Last name is too long")
		.required("Please enter your last name"),
	email: Yup.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	password: Yup.string()
		.min(8, "Password is too short. Password should be 8 to 20 characters")
		.max(20, "Password is too long. Password should be 8 to 20 characters")
		.required("Please enter a password"),
	cpassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Password does not match")
		.required("Please confirm your password"),
});

// -------------- password reset page --------------
const emailValidation = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
});

// -------------- personal info page --------------
const firstNameValidation = Yup.object({
	newFirstName: Yup.string()
		.min(5, "First name is too short")
		.max(20, "First name is too long")
		.required("Please enter your first name"),
});

const lastNameValidation = Yup.object({
	newLastName: Yup.string()
		.min(5, "Last name is too short")
		.max(20, "Last name is too long")
		.required("Please enter your last name"),
});

// -------------- account settings page --------------
const newEmailValidation = Yup.object({
	newEmail: Yup.string()
		.email("Please enter a valid email")
		.required("Please enter your updated email"),
});

const newPasswordValidation = Yup.object({
	newPassword: Yup.string()
		.min(8, "Password is too short")
		.max(20, "Password is too long")
		.required("Please enter a password"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("newPassword"), null], "Password does not match")
		.required("Please confirm your password"),
});

// -------------- login page --------------
const loginValidation = Yup.object({
	email: Yup.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	password: Yup.string()
		.min(8, "Password is too short")
		.max(20, "Password is too long")
		.required("Please enter your password"),
});

export {
	signupValidation,
	emailValidation,
	firstNameValidation,
	lastNameValidation,
	newEmailValidation,
	newPasswordValidation,
	loginValidation,
};
