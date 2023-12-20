import React from "react";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

function LocationList({ data, onDelete, onEdit }) {
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
            <div className="flex items-center gap-4">
              <button
                className="btn btn-circle"
                onClick={() => onDelete(location.name)}
              >
                <TiDelete fontSize={20} />
              </button>
              <button
                className="btn btn-circle"
                onClick={() => onEdit(location)}
              >
                <FaEdit fontSize={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationList;
