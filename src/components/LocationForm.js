import React from "react";

export default function LocationForm({ handleSubmit }) {
  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="flex-col flex items-start justify-start form-control m-1 "
      >
        <div className="w-full  flex-col p-2 flex">
          <label className="font-semibold">Name of Location</label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Enter location"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="w-full  flex-col flex p-2">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
          ></textarea>
        </div>

        <div className="w-full  flex-col flex p-2">
          <button type="submit" className="btn ">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
