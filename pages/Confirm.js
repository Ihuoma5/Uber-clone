import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Map from "./components/Map";
import Link from "next/link";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log("Pickup", pickup);
  console.log("Dropoff", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaWh1b21hNSIsImEiOiJjbDZldXo5Y3gwYjM5M2JwcmY4cDBneHZ1In0.UeSYGhDz_slrb47wqGbraQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDrop0ffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaWh1b21hNSIsImEiOiJjbDZldXo5Y3gwYjM5M2JwcmY4cDBneHZ1In0.UeSYGhDz_slrb47wqGbraQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDrop0ffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <div className="wrapperConfirm">
       <div className="ButtonContainerRide">
        <Link href="/Search">
          <img
            className="BackButton"
            src="https://img.icons8.com/ios-filled/344/long-arrow-left.png"
          />
        </Link>
      </div>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <div className="RideContainer">
        <RideSelector
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
        />
        <div className="Button">Confim Blood Group</div>
      </div>
    </div>
  );
};

export default Confirm;
