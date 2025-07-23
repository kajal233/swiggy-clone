import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Zomato Logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="cart.asp">Cart</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header
