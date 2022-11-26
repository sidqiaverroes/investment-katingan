import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SET_LOGIN } from "./redux/authSlice";
import { getLoginStatus } from "./services/authService";

import NotFound from "./Pages/NotFound";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/auth/Login";
import Dashboard from "./Pages/Dashboard";
import ForgotPass from "./Pages/auth/ForgotPass";

import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/KatinganAdmin" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
