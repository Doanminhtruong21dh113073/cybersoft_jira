import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import { unstable_HistoryRouter as HistoryBrowser } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ErrorTemplate from "./Templates/ErrorTemplate";
import ContactPage from "./Pages/ContactPage";
import { history } from "./Utils/setting";

type Props = {};

const App: React.FC = (props: Props) => {
  return (
    <HistoryBrowser history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="404" element={<ErrorTemplate />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </HistoryBrowser>
  );
};

export default React.memo(App);
