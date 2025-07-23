import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link } from "react-router-dom"
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

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

  if (!Array.isArray(listofRestaurants) || listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
      <div className="search">
      <input type="text" className="search-box" value={searchText} onChange={(e) => {
        setSearchText(e.target.value);
      }} />
      <button onClick={() => {
        console.log(searchText);
        const filteredRestaurant = listofRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setListofRestaurants(filteredRestaurant);
      }}>Search</button></div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>
        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
        <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}> <RestaurantCard  resData={restaurant} />
      </Link>   ))}
      </div>
    </div>
  );
};

export default Body;
