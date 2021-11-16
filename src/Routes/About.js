import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Layouts/Header";

const About = () => {
  const navigate = useHistory();

  const handleToggleBtn = () => {
    navigate.push("/");
  };

  return (
    <div className="main" style={{ textAlign: "left" }}>
      <Header onToggleBtn={handleToggleBtn} />
      <hr />
      <ul>
        <li>Version: 1.0.0 release</li>
        <li>Develop by CKDEV</li>
      </ul>
    </div>
  );
};

export default About;
