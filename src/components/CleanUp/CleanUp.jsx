import React, { useState, useEffect } from "react";
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
import AdminComponent from "../Admin/AdminComponent"; // Import the Admin Component

function CleanUp() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(false);

  // Check if user is logged in and has a role of "admin"
  useEffect(() => {
    if (user && user.role === "admin") {
      setAdmin(true);
      console.log("you are a admin");
    } else {
      setAdmin(false);
      console.log("you are not an admin :(");
    }
  }, [user]);

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
              element={
                <Logout
                  setUser={setUser}
                  user={user}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              }
            />
            <Route
              path="/home/:id"
              element={<OneGame setUser={setUser} user={user} />}
            />
            <Route
              path="/cart"
              element={<Cart setUser={setUser} user={user} />}
            />
            {admin && (
              <Route
                path="/admin"
                element={
                  <AdminComponent setUser={setUser} user={user} admin={admin} />
                }
              />
            )}
          </>
        ) : (
          <>
            <Route
              path="/signup"
              element={
                <SignUpForm
                  setUser={setUser}
                  user={user}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              }
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
