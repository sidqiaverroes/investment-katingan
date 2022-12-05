import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotFound from "./Pages/NotFound";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/auth/Login";
 import Dashboard from "./Pages/admin/Dashboard";
import ForgotPass from "./Pages/auth/ForgotPass";
import ResetPass from "./Pages/auth/ResetPass";
import Layout from "./components/layout/Layout";
import Product from "./Pages/admin/Product";
import AddProduct from "./Pages/admin/AddProduct";
import EditProduct from "./Pages/admin/EditProduct";
import Invest from "./Pages/admin/Invest";
import AddInvest from "./Pages/admin/AddInvest";
import EditInvest from "./Pages/admin/EditInvest";

import "./index.css";

import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/KatinganAdmin" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/resetpassword/:resetToken" element={<ResetPass />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/komoditas"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/komoditas/tambah-komoditas"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />
        <Route
          path="/komoditas/edit-komoditas/:id"
          element={
            <Layout>
              <EditProduct />
            </Layout>
          }
        />
        <Route
          path="/invest"
          element={
            <Layout>
              <Invest />
            </Layout>
          }
        />
        <Route
          path="/invest/tambah-investasi"
          element={
            <Layout>
              <AddInvest />
            </Layout>
          }
        />
        <Route
          path="/invest/edit-investasi/:id"
          element={
            <Layout>
              <EditInvest />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
