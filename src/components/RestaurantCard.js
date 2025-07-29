
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info || resData;


  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 shadow-md transform transition duration-300  hover:scale-111">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData?.info?.cloudinaryImageId
        } />
      <h3 className="font-bold py-4 text-l">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>

    </div>
  );
};
// higher order Component-enhance version of res card (promoted label)

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     )
//   }
// }

export default RestaurantCard;