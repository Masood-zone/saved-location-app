import React from "react";

export default function LocationForm({
  handleSubmit,
  selectedLocation,
  setSelectedLocation,
  editMode,
  handleEditSave,
}) {
  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="flex-col flex items-start justify-start form-control m-1 "
        autoComplete="off"
      >
        <div className="w-full  flex-col p-2 flex">
          <label htmlFor="name" className="font-semibold">
            Name of Location
          </label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter location"
            className="input input-bordered w-full max-w-xs"
            value={selectedLocation ? selectedLocation.name : ""}
            onChange={(e) =>
              setSelectedLocation({ ...selectedLocation, name: e.target.value })
            }
            autoComplete="off"
          />
        </div>
        <div className="w-full  flex-col flex p-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
            value={selectedLocation ? selectedLocation.description : ""}
            onChange={(e) =>
              setSelectedLocation({
                ...selectedLocation,
                description: e.target.value,
              })
            }
            autoComplete="off"
          ></textarea>
        </div>

        <div className="w-full  flex-col flex p-2">
          {editMode ? (
            <button
              className="btn"
              onClick={(e) => handleEditSave(e, selectedLocation)}
            >
              Update
            </button>
          ) : (
            <button type="submit" className="btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
