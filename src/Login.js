import React, { useState } from "react";
import { Link } from "@material-ui/core";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    //do sone fancy firebase login stufffff....

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    //do sone fancy firebase register stufffff....
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and password
        //console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signin-in you agree to the Amazon Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
