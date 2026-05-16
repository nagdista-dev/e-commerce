import React, { Fragment } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
// import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </main>
      <Footer />
      {/* @TOASTIFY */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}
