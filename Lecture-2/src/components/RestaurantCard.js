import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const cardStyle = {
  // backgroundColor: "#d3d3d3",
  // height: "auto",
  // width: "220px",
  // border: "2px solid black",
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={cardStyle}>
      <img className="res-logo" src={CDN_URL} alt="food-item" />
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
      <img className="res-logo" src={CDN_URL} alt="food-item" />
      <h3 style={{ textAlign: "center" }}>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 ⭐️</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const RestaurantCard3 = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, locality, costForTwo, avgRating } =
    resData?.info;
  return (
    <div
      className="rounded-lg bg-gray-100 hover:bg-gray-200 w-[225px] p-4"
      style={cardStyle}
    >
      <img
        className="h-[200px] w-[100%] rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="food-item"
      />
      <div style={{ padding: "10px" }}>
        <h3 className="font-bold text-lg mb-2 text-center">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} ⭐️</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
        <h4>{loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withDiscountLabel = (RestaurantCard3) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-xl mt-48">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard3 {...props} />
      </div>
    );
  };
};

export { RestaurantCard, RestaurantCard2, RestaurantCard3 };
