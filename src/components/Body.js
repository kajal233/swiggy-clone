import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
   

    const restaurantsCard = json.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListofRestaurants(restaurants);
    setOriginalList(restaurants);
  };

  const handleTopRated = () => {
    const filteredList = listofRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setListofRestaurants(filteredList);
  };

  const handleReset = () => {
    setListofRestaurants(originalList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return (<h1>Looks like you are offline,Please check your internet connection!</h1>
  );

  if (!Array.isArray(listofRestaurants) || listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex items-center gap-2 m-4">
        <input
          type="text"
          className="border border-black rounded-lg px-2 py-1"
          value={searchText}
          placeholder="Search restaurant"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-3 py-1 bg-blue-300 rounded-lg"
          onClick={() => {
            const filteredRestaurant = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListofRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="px-3 py-1 bg-green-300 rounded-lg"
          onClick={handleTopRated}
        >
          Top Rated Restaurant
        </button>
        <button
          className="px-3 py-1 bg-red-300 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
        <dropdown />
      </div>

      <div className="flex flex-wrap ">
        {listofRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

            {/* if the restaurant is promoted then add a promoted label to it */}
            {/* {restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (
              <RestaurantCard resData={restaurant} />
            )} */}
            <RestaurantCard resData={restaurant} />
          </Link>))}
      </div>
    </div>
  );
};

export default Body;
