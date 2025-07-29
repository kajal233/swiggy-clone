import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>
                                {item.card.info.name}
                            </span>
                            <span>
                                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                            </span>
                        </div>
                        <p className="text-xs">
                            {item.card.info.description}
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-3/12 p-4">
                        <img
                            alt={item.card.info.name}
                            src={CDN_URL + item.card.info.imageId}
                            className="w-full"
                        /><div className="absolute">
                        <button className="p-auto mx-10 rounded-lg bg-black text-white shadow-lg">
                        Add +
                        </button>
                    </div></div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
