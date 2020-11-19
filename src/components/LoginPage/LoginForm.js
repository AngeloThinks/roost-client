import React, { useState } from "react";
import LoginFormPage from "./LoginFormPage";
import "./LoginForm.css";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitLoginForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="login-form-container">
        <span className="close-btn"></span>
        <div className="login-form-content-left">
          <img
            src="images/hen-chickens.svg"
            alt="hen-chicken"
            className="form-img"
          />
        </div>

        {!isSubmitted ? (
          <LoginFormPage submitLoginForm=
          {submitLoginForm} />
        ) : (
          <LoginFormPage />
        )}
      </div>
    </>
  );
};

export default LoginForm;
