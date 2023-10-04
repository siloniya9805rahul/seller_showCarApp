import React from "react";
import "./Cards.css";
import Card from "../card/Card";

import pagesData from "../../cardsData.json";

const Cards = ({index}) => {
  let data = pagesData[index||0];
 

  return (
    <div className="cards w-full m-5">
      <div className="flex flex-wrap -m-4 w-full ">
        {data.map((item) => (

          <Card
            carImage={item.carImage}
            seats={item.seats}
            carName={item.carName}
            fuelType={item.fuelType}
            isautomatic={item.isautomatic}
            year={item.year}
            mileage={item.mileage}
            price={item.price}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Cards;
