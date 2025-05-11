import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: "#d3d3d3",
  height: "300px",
  width: "200px",
  border: "2px solid black",
};

const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"
        alt="food-item"
      />
      <h3 style={{ textAlign: "center" }}>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.3 ⭐️</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const RestaurantCard2 = ({ resName, cuisine }) => {
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"
        alt="food-item"
      />
      <h3 style={{ textAlign: "center" }}>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 ⭐️</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const RestaurantCard3 = (props) => {
  const { resData } = props;
  const { resName, cuisine } = resData?.data;
  return (
    <div className="res-card" style={cardStyle}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"
        alt="food-item"
      />
      <h3 style={{ textAlign: "center" }}>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 ⭐️</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const resList = [
  {
    data: {
      resName: "Mangoes",
      cuisine: "Fast Food",
    },
  },
  {
    data: {
      resName: "Dominos",
      cuisine: "Pizza",
    },
  },
  {
    data: {
      resName: "Pizza Hut",
      cuisine: "Pizza",
    },
  },
  {
    data: {
      resName: "Burger King",
      cuisine: "Burger",
    },
  },
  {
    data: {
      resName: "Mcdonald",
      cuisine: "Cafe",
    },
  },
  {
    data: {
      resName: "Starbucks",
      cuisine: "Coffee",
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">search</div>
      <div className="res-container">
        <RestaurantCard resName="Half Fried" cuisine="Momos, Pizza, Chinese" />
        <RestaurantCard2 resName="KFC" cuisine="Burger, Chiken Wings" />
        {resList.map((restaurant, index) => (
          <RestaurantCard3 key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright"></div>
      <div className="social-links"></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
