import React, { useRef } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import handleSearchCar from "../searchCar";
const Navbar = () => {
  const searchBoxRef = useRef();
  const navigate = useNavigate();

  const handleSearch = () => {
    const carname = searchBoxRef.current.value;
    const data = handleSearchCar(carname);
    navigate("car_detail", { state: data });
  };
  return (
    <div className="navbar z-50">
      <div className="conatiner">
        <div className="search_container">
          <input
            ref={searchBoxRef}
            className="outline-none"
            type="text"
            placeholder="Search"
          />
          <div
            onClick={() => {
              handleSearch();
            }}
            className="icon cursor-pointer"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="buttons">
          <select name="Relevance" id="revelence">
            <option>Relevance</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <select name="all_brands" id="all_brands">
            <option>All Brands</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
