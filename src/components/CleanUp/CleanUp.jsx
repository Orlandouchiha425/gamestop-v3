import React, { useState, useEffect } from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getUser } from "../../utilities/users-service";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";
import Logout from "../Logout/Logout";
import LoginForm from "../LoginForm/LoginForm";
import NavBar from "../../NavBar/NavBar";
import OneGame from "../OneGame/OneGame";
import Cart from "../Cart/Cart";
import Admin from "../Admin/CreateGameForm";
import CreateGameForm from "../Admin/CreateGameForm";
import EditPage from "../EditPage/EditPage";
function CleanUp() {
  const [user, setUser] = useState(getUser());
  const [admin, setAdmin] = useState(false);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    if (user && user.role === "admin") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [user]);

  return (
    <div>
      <NavBar setUser={setUser} user={user} admin={admin} setAdmin={setAdmin} />

      <Routes>
        {/* Routes for Admin only */}
        {admin && (
          <>
            <Route
              path="/admin"
              element={
                <Admin setUser={setUser} admin={admin} setAdmin={setAdmin} />
              }
            />
            <Route
              path="/create"
              element={
                <CreateGameForm
                  setUser={setUser}
                  admin={admin}
                  setAdmin={setAdmin}
                />
              }
            />
            <Route
              path="/:id"
              element={
                <EditPage setUser={setUser} admin={admin} setAdmin={setAdmin} />
              }
            />
          </>
        )}

        {/* Routes for non-logged-in users */}
        {!user && (
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
            <Route
              path="/"
              element={<LoginForm setUser={setUser} user={user} />}
            />
          </>
        )}

        {/* Common routes */}
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/about"
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
          element={
            <OneGame
              setUser={setUser}
              user={user}
              ratingCount={ratingCount}
              setRatingCount={setRatingCount}
              admin={admin}
              setAdmin={setAdmin}
            />
          }
        />
        <Route path="/cart" element={<Cart setUser={setUser} user={user} />} />
      </Routes>
    </div>
  );
}

export default CleanUp;
