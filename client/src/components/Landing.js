import React from "react";
import "../styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-background">
      <div className="landing-mask center-align valign-wrapper">
        <div style={{ margin: "0 auto", width: "50%" }}>
          <h1>Emailer</h1>
          To manage feedback from users 
        </div>
      </div>
    </div>
  );
};

export default Landing;
