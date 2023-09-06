import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

function HomePage({ name }) {
  console.log(name);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Send a request to retrieve user data using the token
      axios
        .get("/getProfileData", {
          headers: {
            token: token,
          },
        })
        .then((response) => {
          const responseData = response.data;
          if (responseData.success) {
            // Set the user's name in state
            const userName = responseData.decodeData.name;
            setUserName(userName);
          } else {
            console.error("Access Denied");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="homeMainContainer">
      <div className="Appbar">
        <span>Money Lend Monitor</span>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
            marginRight: "20px",
          }}
        >
          <span>Home</span>
          <span>Details</span>
          <span>LogOut</span>
        </div>
      </div>
      {userName && <span>Welcome {userName}</span>}
      <span>Welcome Steven</span>
    </div>
  );
}

export default HomePage;
