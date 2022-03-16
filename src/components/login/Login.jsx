import React, { useState, useEffect } from "react";
import "./signUp.css";
import "./login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState([]);
  const [ok2, setOk2] = useState("sign_span");
  const [ok3, setOk3] = useState("sign_span");

  useEffect(() => {
    fetch("http://localhost:3001/Admin")
      .then((res) => res.json())
      .then((date) => setDate(date));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (date.find((i) => i.password === password && i.user_name === userName)) {
      console.log("ok");
      window.location.replace("/admin");
    } else {
      setOk2("wrong");
      setOk3("wrong");
    }
  }

  return (
    <div className="SignUp-container loginBox">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="signUp__header login_header">Log In</h1>
        <label className="user_N_label sign_label">
          <input
            type="text"
            minLength={6}
            className={
              userName.length > 5 ? "sign_input correct" : "sign_input wrong"
            }
            onChange={(e) => {
              setUserName(e.target.value);
              if (e.target.value === e.target.value) {
                setOk2("sign_span ok");
              }
              if (e.target.value.length === 0) {
                setOk2("sign_span");
              }
            }}
            required
          />
          <span className={ok2}>User Name...</span>
        </label>

        <label className="user_N_label sign_label">
          <input
            type="text"
            minLength={6}
            className={
              password.length > 5 ? "sign_input correct" : "sign_input wrong"
            }
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value === e.target.value) {
                setOk3("sign_span ok");
              }
              if (e.target.value.length === 0) {
                setOk3("sign_span");
              }
            }}
            required
          />
          <span className={ok3}>Password...</span>
        </label>

        <button className="SignBtn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
