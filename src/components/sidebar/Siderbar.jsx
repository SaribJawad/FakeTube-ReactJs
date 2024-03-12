/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { IoMdHome } from "react-icons/io";

import { IoGameControllerOutline } from "react-icons/io5";
import { PiCarProfileDuotone } from "react-icons/pi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { TbBrandFunimation } from "react-icons/tb";
import { MdBiotech } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { MdCameraOutdoor } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

function Siderbar({ sidebar, category, setCategory }) {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          className={`side-links ${category === 0 ? "active" : ""}`}
          onClick={() => setCategory(0)}
        >
          <IoMdHome className="icons" />
          <p>Home</p>
        </div>

        <div
          className={`side-links ${category === 20 ? "active" : ""}`}
          onClick={() => setCategory(20)}
        >
          <IoGameControllerOutline className="icons" />
          <p>Gaming</p>
        </div>

        <div
          className={`side-links ${category === 2 ? "active" : ""}`}
          onClick={() => setCategory(2)}
        >
          <PiCarProfileDuotone className="icons" />
          <p>Automobiles</p>
        </div>

        <div
          className={`side-links ${category === 17 ? "active" : ""}`}
          onClick={() => setCategory(17)}
        >
          <MdOutlineSportsBasketball className="icons" />
          <p>Sports</p>
        </div>

        <div
          className={`side-links ${category === 24 ? "active" : ""}`}
          onClick={() => setCategory(24)}
        >
          <TbBrandFunimation className="icons" />
          <p>Entertainment</p>
        </div>

        <div
          className={`side-links ${category === 28 ? "active" : ""}`}
          onClick={() => setCategory(28)}
        >
          <MdBiotech className="icons" />
          <p>Technology</p>
        </div>

        <div
          className={`side-links ${category === 10 ? "active" : ""}`}
          onClick={() => setCategory(10)}
        >
          <IoMusicalNotes className="icons" />
          <p>Music</p>
        </div>

        <div
          className={`side-links ${category === 22 ? "active" : ""}`}
          onClick={() => setCategory(22)}
        >
          <MdCameraOutdoor className="icons" />
          <p>Blogs</p>
        </div>

        <div
          className={`side-links ${category === 25 ? "active" : ""}`}
          onClick={() => setCategory(25)}
        >
          <IoNewspaperOutline className="icons" />
          <p>News</p>
        </div>
        <hr />
      </div>

      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFKj_BNwizePBZswdUbrb0HniM9oyR0NuPARwhPlahw&s"
            alt=""
          />
          <p>MrBeast</p>
        </div>
        <div className="side-links">
          <img
            src="https://i1.sndcdn.com/artworks-LpiOTjAE7XnkdCsk-3dHwxA-t500x500.jpg"
            alt=""
          />
          <p>PlayboyCarti</p>
        </div>
        <div className="side-links">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKCiMAABgAAA0JCSMAAA9XV2Obm6IAAB0AABRGRlP///+wsLcXFyo7O00AAAAnJzempqwEBCHr6+5zc3wAABHCwsfa2t47O0f09PZRUV5cXGgAABeBgYrT09cAABO2trwAABqXl58AAAUAACAVFSphYWlbW2E1NUKPj5cfHzLMzNBoaHQsLD//65ZnAAABT0lEQVR4AcRQBYKDQAwMTtM2FN/i7v9/32XZcvKCGyQycfgvaLrx12Ho2qWalq0pn3NF25apNPeGd/3kHk9SLv2ON1cqjocvOsv6jyCMVAl6oeew1OJE8+EMSwW+VQNfS2LNAC1DK/8UKxDLSs2WW5hpQHVCoGo1CaKwGmVRUhNUov2QXYGMQv+QrXDBE6ELEv0gEAMsSNV1Q+FBKsZGDXhHjAucCjjZZhQpzGLUzsiMG3qhuOOiS1sbxQyrKmvkG+JCC3dNwFdlVzBF28mOc8BespkM0l6O1woTKC5JkmmAe+SGkpwlSWVMEIU4y0MNiYDe0N57WfJpwJmRT+mvSd2xFS2Ja/AhqN5zju3iZPXZu+NO8pr1w2Dh2RELYmcEDJ5id9ntHD7/n5Lj3ra6mx/VZSW3UZYUVVmbPii78Xr4g95r/Es3Lu2Cyv8arQAAQJwXtvIxXO8AAAAASUVORK5CYII="
            alt=""
          />
          <p>freeCodeCamp</p>
        </div>
      </div>
    </div>
  );
}

export default Siderbar;
