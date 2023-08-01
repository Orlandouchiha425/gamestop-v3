import React, { useState } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import Logout from "../Logout/Logout";
import LoginForm from "../LoginForm/LoginForm";
import NavBar from "../../NavBar/NavBar";
import Footer from "../Footer/Footer";
import OneGame from "../OneGame/OneGame";
import Cart from "../Cart/Cart";
import AdminLogin from "../Admin/AdminLogin";
function CleanUp() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(false);

  return (
    <div>
      <NavBar setUser={setUser} user={user} />

      <Routes>
        {user ? (
          <>
            <Route
              path="/home"
              element={<Home user={user} setUser={setUser} />}
            />

            <Route
              path="/logout"
              element={<Logout user={user} setUser={setUser} />}
            />
            <Route
              path="/home/:id"
              element={<OneGame setUser={setUser} user={user} />}
            />
            <Route
              path="/cart"
              element={<Cart setUser={setUser} user={user} />}
            />
          </>
        ) : (
          <>
            <Route
              path="/adminlogin"
              element={<AdminLogin setUser={setUser} user={user} />}
            />
            <Route
              path="/signup"
              element={<SignUpForm setUser={setUser} user={user} />}
            />

            <Route
              path="/*"
              element={<LoginForm setUser={setUser} user={user} />}
            />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default CleanUp;
