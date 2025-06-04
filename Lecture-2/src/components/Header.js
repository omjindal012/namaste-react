import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // In case of Functional component how to use React Context
  const { loggedInUser } = useContext(UserContext);

  // Selector :- Only subscribe to the required portion of the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

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
    <div className="flex justify-between pr-[20px] items-center border-1 border-solid border-black sm:bg-yellow-200 lg:bg-green-200">
      <div>
        <img className="w-[100px] h-[100px]" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex gap-[30px]">
          <li className="text-[20px] self-center">
            Online Status : {onlineStatus == true ? "✅" : "🔴"}
          </li>
          <li className="text-[20px] self-center">
            <Link to="/">{home}</Link>
          </li>
          <li className="text-[20px] self-center">
            {/* <a href="/about">About Us</a> */}
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-[20px] self-center">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-[20px] self-center">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="text-[20px] self-center font-bold ">
            <Link to="/cart">
              {cart} ({cartItems.length})
            </Link>
          </li>
          <button
            className="text-[20px] self-center"
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
          <li className="text-[20px] self-center font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

// default Export
export default Header;
