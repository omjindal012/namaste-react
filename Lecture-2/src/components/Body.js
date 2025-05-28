import {
  RestaurantCard,
  RestaurantCard2,
  RestaurantCard3,
} from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData"; // We may or may not write .js here
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  // Local State Varibale
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const arr = useState([]);
  const listOfRestaurants = arr[0];
  const setListOfRestaurants = arr[1];

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1525874&lng=77.3021698&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      // Optional Chaining
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // input change
            }}
          />
          <button
            onClick={() => {
              const updatedRestaurant = listOfRestaurants.filter((el) => {
                return el.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(updatedRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resName="Half Fried" cuisine="Momos, Pizza, Chinese" /> */}
        {/* <RestaurantCard2 resName="KFC" cuisine="Burger, Chiken Wings" /> */}
        {filteredRestaurant.map((restaurant, index) => (
          <Link to = {"/restaurant/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard3 resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
