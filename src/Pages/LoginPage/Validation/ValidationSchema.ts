import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Username is required")
    .matches(/^[a-zA-Z0-9\s]*$/, "Account must not contain special characters"),
  passWord: yup
    .string()
    .required("Password is required")
    .max(32, "Maximum password length is 32 characters")
    .min(6, "Minimum password length is 6 characters"),
});
