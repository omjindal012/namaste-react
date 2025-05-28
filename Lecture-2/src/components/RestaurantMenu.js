import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    const { name, cuisines, costForTwoMessage } =
      json?.data?.cards[2]?.card?.card?.info;
    const menuCard = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
  (c) => c?.card?.card?.itemCards
);

const menu = menuCard?.card?.card?.itemCards;
    setResInfo({ name, cuisines, costForTwoMessage, menu });
    console.log(menu);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <p>
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo.menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
