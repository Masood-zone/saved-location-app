import React, { useContext } from "react";
import { LocationsContext } from "../contexts/LocationsContext";
import { FaPlus } from "react-icons/fa6";
import LocationList from "./LocationList";

function LocationCard() {
  const { locations, onSave, onDelete } = useContext(LocationsContext);

  return (
    <div className="card w-[70%] h-full rounded shadow-md mx-auto px-3 py-3">
      <div className="card-title flex justify-between items-center">
        <h1>Saved Locations</h1>

        <button
          className="btn btn-ghost btn-circle"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <FaPlus fontSize={20} />
        </button>
      </div>
      <div className="card-body">
        {/* Modal */}
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box w-96">
            <h3 className="font-bold text-lg">
              Enter the details of the location
            </h3>
            <div className="modal-action">
              <form
                onSubmit={onSave}
                className="flex flex-col gap-3 items-start justify-start"
                method="dialog"
              >
                <div className="w-full">
                  <label>Name of location</label>
                  <input
                    placeholder="Name of location (eg: My Hostel)"
                    id="name"
                    type="name"
                    name="name"
                    className="input input-bordered w-full max-w-xs"
                    required
                  />
                </div>

                <div className="w-full">
                  <label>Description</label>
                  <textarea
                    placeholder="Description"
                    id="description"
                    name="description"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                    required
                  ></textarea>
                </div>
                <button className="btn">Submit</button>
              </form>
            </div>
          </div>
        </dialog>
        {locations.length === 0 ? (
          <div>Add a location to see it here</div>
        ) : (
          <LocationList data={locations} handleDelete={onDelete} />
        )}
      </div>
    </div>
  );
}

export default LocationCard;
