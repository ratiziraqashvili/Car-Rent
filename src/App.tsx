import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";
import NavbarLogin from "./NavbarLogin";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);
  return (
    <Router>
      {user ? (
        <>
          <NavbarLogin />
          <Home />
          <Main />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Login />
        </>
      )}
    </Router>
  );
}

export default App;
