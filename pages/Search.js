import { useState } from "react";
import Link from "next/link";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  

  return (
    <div className="search-wrapper">
      <div className="ButtonContainer">
        <Link href="/">
          <img
            className="BackButton"
            src="https://img.icons8.com/ios-filled/344/long-arrow-left.png"
          />
        </Link>
      </div>
      <div className="InputContainer">
        <div className="FromToIcon">
          <img
            className="Circle"
            src="https://img.icons8.com/ios/50/9CA3AF/filled-circle.png"
          />
          <img
            className="Line"
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
          />
          <img
            className="Square"
            src="https://img.icons8.com/windows/344/square-full.png"
          />
        </div>
        <div className="InputBoxes">
          <input
            className="input"
            placeholder="Enter current location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <input
            className="input"
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </div>
        <img
          className="PlusIcon"
          src="https://img.icons8.com/android/344/plus.png"
        />
      </div>
      <div className="SavedPlaces">
        <img
          className="StarIcon"
          src="https://img.icons8.com/ios/344/star--v1.png"
        />
        Saved places
      </div>
      <Link
        href={{
          pathname: "/Confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <div className="Button">Confirm locations</div>
      </Link>
    </div>
  );
};

export default Search;
