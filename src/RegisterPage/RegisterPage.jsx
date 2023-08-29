import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const registerbtn = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    if (name === " " || email === " " || password === " ") {
      alert("Please fill fields");
    } else {
      axios
        .post("http://localhost:3000/register", {
          name: name,
          email: email,
          password: password,
        })
        .then((response) => {
          let result = response.data;
          console.log(result);
          alert("Data stored successfully!");
          // navigate("/LoginPage");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="MainContainer">
      <div className="FormContainer">
        <div className="FormHeader">Registration Page</div>
        <div className="FormInputs">
          <label className="InputLabel">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
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
          onClick={registerbtn}
          style={{ display: "flex", marginTop: "15px" }}
        >
          Register
        </button>
        <div>
          Already have an Account?
          <span className="LoginText" onClick={registerbtn}>
            Login now
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
