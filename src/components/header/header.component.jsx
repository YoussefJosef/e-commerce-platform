import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/icon.svg";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="contact">
          CONTACT
        </Link>
        <Link className="signin" to="signin">
        SIGN IN
      </Link>
        <Link className="option" to="/">
          TEST
        </Link>
      </div>
    </div>
  );
};

export default Header;
