import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // Now since the btnName is constant then how is it updating it's value
  // This is because React is creating a new instance of btnName during re-render. A new btnName variable will be initizalized with the updated value
  let [cart, setCart] = useState("Cart");
  let home = "Home";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{home}</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>{cart}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              cart = "Carts";
              home = "Homeless";
              console.log("Button Clicked");
              console.log(cart); // cart does not refreshes
              console.log(home); // home does not refreshes// This is because during component re-render there value is re-initalized hence there is no change in value but in case of useState default value in not re-initialized
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
