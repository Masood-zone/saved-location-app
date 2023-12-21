import React from "react";

export default function LocationForm({ formik }) {
  return (
    <section className="">
      <form
        onSubmit={formik.handleSubmit}
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
            className={`input input-bordered w-full max-w-xs ${
              formik.touched.name && formik.errors.name
                ? "border-2 border-red-600"
                : ""
            }`}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            autoComplete="off"
          />
          {formik.errors.name ? (
            <span className="text-red-600">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>

        <div className="w-full  flex-col flex p-2">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            className={`textarea textarea-bordered textarea-sm w-full max-w-xs ${
              formik.touched.description && formik.errors.description
                ? "border-2 border-red-600"
                : ""
            }`}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
          ></textarea>
          {formik.errors.description ? (
            <span className="text-red-600">{formik.errors.name}</span>
          ) : (
            ""
          )}
        </div>

        <div className="w-full  flex-col flex p-2">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
