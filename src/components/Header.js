import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser}= useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-amber-50 shadow-md px-6 py-3">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-24 rounded-xl hover:scale-105 transition-transform duration-200"
          alt="Food App Logo"
          src={LOGO_URL}
        />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-4 text-sm font-medium">
        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          {onlineStatus ? "🟢 Online" : "🔴 Offline"}
        </li>

        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          <Link to="/grocery">🧺 Grocery</Link>
        </li>

        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          <Link to="/">🍽️ Home</Link>
        </li>

        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          <Link to="/cart">🛒 Cart</Link>
        </li>

        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          <Link to="/contact">📞 Contact</Link>
        </li>

        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">
          <Link to="/about">👩‍🍳 About</Link>
        </li>

        <li>
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact === "Login" ? "🔐 Login" : "🔓 Logout"}
          </button>
        </li>
        <li className="px-3 py-1 bg-white rounded hover:bg-gray-100">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
