import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const { name, cuisines, costForTwoMessage } =
      json?.data?.cards[2]?.card?.card?.info;
    const menuCard =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (c) => c?.card?.card?.itemCards
      );
    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    const menu = menuCard?.card?.card?.itemCards;
    setResInfo({ name, cuisines, costForTwoMessage, menu, categories });
  };
  return resInfo;
};

export default useRestaurantMenu;
