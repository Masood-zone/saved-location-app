import React, { useState } from "react";
import LocationForm from "./LocationForm";
import { FaPlus } from "react-icons/fa6";
import LocationList from "./LocationList";

function MainLocation() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
    }
    setLocations([...locations, body]);
    setShowLocations(true);
  };

  const handleDelete = (name) => {
    const newLocation = locations.filter((place) => place.name !== name);
    setLocations(newLocation);
  };

  return (
    <div className="w-[50%] h-max mx-auto my-5 flex flex-col items-center justify-center ">
      <section className="flex items-center justify-between gap-10 my-3">
        <h1 className="text-xl font-medium">Saved Locations</h1>
        <button
          className="btn btn-circle "
          onClick={() => setShowLocations(!showLocations)}
        >
          <FaPlus />
        </button>
      </section>

      {showLocations ? (
        <LocationList data={locations} onDelete={handleDelete} />
      ) : (
        <LocationForm handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default MainLocation;
