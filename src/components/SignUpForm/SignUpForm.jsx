import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";

export default function SignUpForm({ setUser }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
    role: "user",
  });

  let navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value, error: "" });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const formData = { ...state };
      delete formData.error;
      delete formData.confirm;
      const newUser = await signUp(formData);

      setUser(newUser);
      if (state.role === "admin") {
        navigate("/create");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
      setState({ ...state, error: "Sign Up Failed" });
    }
  };

  const disable = state.password !== state.confirm;

  return (
    <div>
      <style>{"body { background: linear-gradient(#141e30, #243b55)}"}</style>
      <div className={styles.loginbox}>
        <h2>SignUp</h2>
        <h5>
          Need to Login ?
          <Link className="nav-link active" to="/login">
            <button>
              <em>Click Here</em>
            </button>
          </Link>
        </h5>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.userbox}>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <label>Name</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>

          <div className={styles.userbox}>
            <input
              type="password"
              name="confirm"
              value={state.confirm}
              onChange={handleChange}
              required
            />
            <label>Confirm</label>
          </div>

          <div className={styles.userbox}>
            <select
              name="role"
              id="role"
              value={state.role}
              onChange={handleChange}
            >
              <option value="user">Player</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" disabled={disable}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>
      </div>
      <p className="error-message">
        &nbsp;{state.error} <style>{"body { background: color)}"}</style>
      </p>
    </div>
  );
}
