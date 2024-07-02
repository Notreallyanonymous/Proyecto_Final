import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Julio from "../img/Julio.png";

function TopContainer() {
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search items, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src={Julio} alt="" />
        </div>
        <p className="profileName">Julio Quintanilla</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>System Architect</li>
            <li>UI / UX Designer</li>
            <li>Backend Developer</li>
            <li>Human Scum</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
