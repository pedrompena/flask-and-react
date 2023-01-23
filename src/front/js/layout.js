import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { Signup } from "./pages/signup";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Home from "./pages/home";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
