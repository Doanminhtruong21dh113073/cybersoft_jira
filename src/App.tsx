import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ErrorTemplate from "./Templates/ErrorTemplate/ErrorTemplate";

type Props = {};

const App: React.FC = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="404" element={<ErrorTemplate />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
