import React from "react";
import { TiDelete } from "react-icons/ti";

function LocationList({ data, onDelete }) {
  return (
    <section>
      <div>
        {data.map((location) => (
          <div
            key={location.name}
            className="border-2 border-gray-100 my-3 p-2 flex items-start rounded-md justify-between gap-8"
          >
            <div>
              <h1 className="font-medium">{location.name}</h1>
              <p>{location.description}</p>
            </div>
            <button
              className="btn btn-circle"
              onClick={() => onDelete(location.name)}
            >
              <TiDelete fontSize={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationList;
