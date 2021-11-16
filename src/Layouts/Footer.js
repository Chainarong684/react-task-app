import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer-box' style={{ textAlign: 'center' }}>
      <p>Copyright &copy; 2021 - CKDEV</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Footer;
