import React from "react";
import { useEffect, useState } from "react";
import { carList } from "../data/carList";

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {
const[rideDurarion, setRideDuration] = useState(0)

useEffect(() => {
    rideDurarion = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaWh1b21hNSIsImEiOiJjbDZldXo5Y3gwYjM5M2JwcmY4cDBneHZ1In0.UeSYGhDz_slrb47wqGbraQ`)
    .then(res => res.json())
    .then(data => {
        setRideDuration(data.routes[0].duration/100)
    })
},[pickupCoordinates,dropoffCoordinates])

  return (
    <div className="RideSelectorWrapper">
      <div className="Title">Choose a a blood type</div>
      <div className="CarList">
        {carList.map((car, index) => (

            <div className="Car" key={index}>

            <img className="CarImage" src={car.imgUrl} />
            <div className="CarDetails">
              <div className="Service">{car.service}</div>
              <div className="Time">5 minutes away</div>
            </div>
            <div className="Price">{'₦' + (rideDurarion*car.multiplier).toFixed(2)}</div>
          </div>
        ))}

        
      </div>
    </div>
  );
};

export default RideSelector;
