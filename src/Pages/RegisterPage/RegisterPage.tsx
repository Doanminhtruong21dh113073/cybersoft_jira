import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../../Redux/store";
import { USER_SIGNUP_SAGA } from "../../Redux/Constants/UserConstant";
import { UserRegister } from "../../Redux/types/UserType";
import { useFormik } from "formik";
import { validationSchema } from "./validationSchema.ts/ValidationSchame";

export const RegisterPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmitRegister = React.useCallback(
    (values: UserRegister) => {
      dispatch({
        type: USER_SIGNUP_SAGA,
        payload: values,
      });
    },
    [dispatch]
  );

  const frmRegister = useFormik<UserRegister>({
    initialValues: {
      email: "",
      passWord: "",
      name: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmitRegister,
  });

  return (
    <div className="register">
      <form
        className="lg:w-1/2 xl:max-w-screen-sm"
        onSubmit={frmRegister.handleSubmit}
      >
        <div className="bg-transparent min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-violet-800 px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <div>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="User Name"
                  name="email"
                  value={frmRegister.values.email}
                  onBlur={frmRegister.handleBlur}
                  onChange={frmRegister.handleChange}
                />
                {frmRegister.errors.email && (
                  <div className="text-red-700 font-semibold">
                    {frmRegister.errors.email}
                  </div>
                )}
              </div>

              <div>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="Password"
                  name="passWord"
                  type="password"
                  value={frmRegister.values.passWord}
                  onBlur={frmRegister.handleBlur}
                  onChange={frmRegister.handleChange}
                />
                {frmRegister.errors.passWord && (
                  <div className="text-red-700 font-semibold">
                    {frmRegister.errors.passWord}
                  </div>
                )}
              </div>

              <div>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  value={frmRegister.values.name}
                  onBlur={frmRegister.handleBlur}
                  onChange={frmRegister.handleChange}
                />
                {frmRegister.errors.name && (
                  <div className="text-red-700 font-semibold">
                    {frmRegister.errors.name}
                  </div>
                )}
              </div>  

              <div>
                <input
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  placeholder="Phone"
                  name="phoneNumber"
                  type="number"
                  value={frmRegister.values.phoneNumber}
                  onBlur={frmRegister.handleBlur}
                  onChange={frmRegister.handleChange}
                />
                {frmRegister.errors.phoneNumber && (
                  <div className="text-red-700 font-semibold">
                    {frmRegister.errors.phoneNumber}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
            shadow-lg"
              >
                Create Account
              </button>
            </div>

            <div className="mt-12 text-sm font-display font-extrabold text-gray-700 text-center">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(RegisterPage);
