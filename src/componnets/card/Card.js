import React from "react";
import { useNavigate} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import { faUserGroup,faGasPump ,faGauge,faStaffAesculapius} from '@fortawesome/free-solid-svg-icons'
import "./Card.css";
import handleSearchCar from "../searchCar";


const Card = ({carImage,carName,fuelType,isautomatic,year,mileage,seats,price}) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    const data = handleSearchCar(carName);
    navigate("/car_detail", { state: data });
  };

  return (
    <div className="card lg:w-[30%] md:w-[45%] w-full m-4 p-4 box-border rounded-lg  ">
      <div className="block relative h-56 rounded overflow-hidden">
        <img onClick={() => {
              handleSearch();
            }}
          alt="ecommerce"
          className="object-cover rounded-lg object-center w-full h-full block"
          src={carImage}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <h2 className="text-gray-900 title-font text-lg font-bold">
            {carName}
          </h2>
          <span id="year">{year}</span>
        </div>
        <div className="features grid grid-cols-2 mb-2">
          <div className="icon">
            <FontAwesomeIcon icon={faUserGroup} />
            <span id="seats">{seats}</span>
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faGasPump} />
              <span id="car_type">{fuelType}</span>
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faGauge} />
              <span id="milage">{mileage} km /1-litre</span>
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faStaffAesculapius} />
              <span id="auto">{isautomatic?"Automatic":"Hybrid"}</span><FontAwesomeIcon icon="steering-wheel" />
          </div>
        </div>
        <hr />
        <div className="bottom mt-2 flex justify-between items-center">
          <p className="">
            <span id="price" className="text-lg font-bold">
              
              $ {price}
            </span>
            /month
          </p>
          <div className="bottom_right flex justify-between items-center">
            <div className="icon cursor-pointer">
              <i className="fa-regular fa-heart"></i>
            </div>
            <button className="ml-3 p-1 ps-2 pe-2 rounded bg-cyan-500">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
