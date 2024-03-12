/* eslint-disable react/prop-types */
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { RiVideoUploadLine } from "react-icons/ri";
import { MdOutlineNotificationsNone } from "react-icons/md";

import { Link } from "react-router-dom";

function Navbar({ setSidebar, query, setQuery }) {
  function handleHamburger() {
    setSidebar((prev) => (prev === false ? true : false));
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <RxHamburgerMenu onClick={handleHamburger} className="menu-icon" />
        <Link to={"/"}>
          <h1 className="logo">FakeTube</h1>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to={"/search"}>
            <IoSearchOutline className="search-icon" />
          </Link>
        </div>
      </div>
      <div className="nav-right flex-div">
        <RiVideoUploadLine className="nav-right-icon" />
        <MdOutlineNotificationsNone className="nav-right-icon" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcv7EYrebbk1UROmcXkqJ9t9YDf81OW_mXVQ&usqp=CAU"
          className="user-icon"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
