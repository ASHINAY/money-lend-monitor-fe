import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const loginbtn = () => {
    if (email === "" || password === "") {
      alert("Please fill fields");
    } else {
      console.log(email);
      console.log(password);
      console.log("Steven");
      axios
        .post("http://localhost:3000/login", {
          email: email,
          password: password,
        })

        .then((response) => {
          let responseData = response.data;
          console.log(responseData);
          console.log(responseData.token);
          if (responseData.success) {
            localStorage.setItem("token", responseData.token);
           
            navigate("/HomePage");
          } else {
            alert(responseData.message);
          }
          // alert(responseData);
          // navigate("/HomePage")
        })
        .catch((error) => {
          console.log(error);
        });
    }

    //   navigate("/HomePage");
  };
  return (
    <div className="MainContainer">
      <div className="FormContainer">
        <div className="FormHeader">Login Page</div>
        <div className="FormInputs">
          <label className="InputLabel">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailOnChange}
          />
          <label className="InputLabel">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button
          onClick={loginbtn}
          style={{ display: "flex", marginTop: "15px" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
