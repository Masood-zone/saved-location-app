import React from "react";
import { MdOutlineCancel } from "react-icons/md";

function LocationList({ data, handleDelete }) {
  return (
    <div>
      {data.map((location) => (
        <div
          className="w-full border-2 rounded-md  p-2 my-2 flex items-start justify-between"
          key={location.name}
        >
          <div className="">
            <h1 className="font-medium">{location.name}</h1>
            <p>{location.description}</p>
          </div>
          <button
            className="btn btn-circle"
            onClick={() => handleDelete(location.name)}
          >
            <MdOutlineCancel fontSize={20} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
