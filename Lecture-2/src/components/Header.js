import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // Now since the btnName is constant then how is it updating it's value
  // This is because React is creating a new instance of btnName during re-render. A new btnName variable will be initizalized with the updated value
  let [cart, setCart] = useState("Cart");
  let home = "Home";

  console.log("Header rendered1");
  // no dependency array -> load every time component renders
  useEffect(() => {
    console.log("Use Effect called");
  });
  // dependency array is empty -> It will be called on initial render just once
  useEffect(() => {
    console.log("Use Effect2 called");
  }, []);
  // with dependency -> Only be called when dependency changes
  useEffect(() => {
    console.log("Use Effect3 called");
  }, [btnName]);
  console.log("Header rendered2");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">{home}</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>{cart}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              cart = "Carts";
              home = "Homeless";
              // console.log("Button Clicked");
              // console.log(cart); // cart does not refreshes
              // console.log(home); // home does not refreshes// This is because during component re-render there value is re-initalized hence there is no change in value but in case of useState default value in not re-initialized
            }}
          >
            {btnName}
            {/* When the button is pressed the React will re-render the whole header component*/}
          </button>
        </ul>
      </div>
    </div>
  );
};

// default Export
export default Header;
