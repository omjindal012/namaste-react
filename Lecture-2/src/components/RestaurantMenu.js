import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); // custom Hook

  const [showIndex, setShowIndex] = useState(null);

  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   const { name, cuisines, costForTwoMessage } =
  //     json?.data?.cards[2]?.card?.card?.info;
  //   const menuCard =
  //     json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
  //       (c) => c?.card?.card?.itemCards
  //     );

  //   const menu = menuCard?.card?.card?.itemCards;
  //   setResInfo({ name, cuisines, costForTwoMessage, menu });
  //   console.log(menu);
  // };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-3">{resInfo.name}</h1>
      <p className="font-semibold text-lg">
        {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
      </p>
      {resInfo.categories.map((category, index) => (
        // RestaurantCategory is a controlled component because it is being controlled by RestaurantMenu
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItem={showIndex === index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
