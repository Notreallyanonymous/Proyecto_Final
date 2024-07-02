import React, { useState, useEffect } from "react";
import { app } from "../config/firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { validateUser } from "../api";
import { LoginBg } from "../assets/videos";
import { user_icon } from "../assets/img/index";
import { email_icon } from "../assets/img/index";
import { password_icon } from "../assets/img/index";
import "./LoginCSS.css";

const Login = ({ setAuth }) => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const [action, setAction] = useState("Login");

  const [{ user }, dispatch] = useStateValue();

  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCredentials) => {
      if (userCredentials) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        firebaseAuth.onAuthStateChanged((userCredentials) => {
          if (userCredentials) {
            userCredentials.getIdToken().then((token) => {
              validateUser(token).then((data) => {
                dispatch({
                  type: actionType.SET_USER,
                  user: data,
                });
              });
            });
            navigate("/", { replace: true });
          } else {
            setAuth(false);
            dispatch({
              type: actionType.SET_USER,
              user: null,
            });
            navigate("/login");
          }
        });
      }
    });
  };

  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <video
        src={LoginBg}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-darkOverlay flex items-center justify-center p-4">
        <div className="w-full md:w-375 p-4 bg-lightOverlay shadow-2xl rounded-md backdrop-blur-md flex flex-col items-center justify-center">
          <div className="container-login">
            <div className="header-login">
              <div className="text-login">{action}</div>
              <div className="underline"></div>
            </div>
            <div className="inputs">
              <div className="input-container">
                <img className="input-icon" src={user_icon} alt="" />
                <input type="text" placeholder="Username" />
              </div>
              {action === "Login" ? (
                <div></div>
              ) : (
                <div className="input-container">
                  <img className="input-icon" src={email_icon} alt="" />
                  <input type="email" placeholder="Email" />
                </div>
              )}
              <div className="input-container">
                <img className="input-icon" src={password_icon} alt="" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
              <div className="submit-container">
                <div
                  className={action === "Login" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign Up
                </div>
                <div
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Login");
                  }}
                >
                  Login
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay
           cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all "
              onClick={loginWithGoogle}
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
