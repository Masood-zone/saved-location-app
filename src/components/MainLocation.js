import React, { useState } from "react";
import LocationForm from "./LocationForm";
import { FaPlus } from "react-icons/fa6";
import LocationList from "./LocationList";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { locationValidator } from "../schema/locationValidator";
import { useGeolocated } from "react-geolocated";

function MainLocation() {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: locationValidator,
    onSubmit: (values, { resetForm }) => {
      const body = {
        id: uuidv4(),
        name: values.name,
        description: values.description,
        longitude: coords.longitude,
        latitude: coords.latitude,
      };
      setLocations([...locations, body]);
      console.log(body);
      setShowLocations(true);
      resetForm(values);
    },
  });

  const handleEdit = (data) => {
    // setEditMode(true);
    // const location = locations.find((place) => place === data);
    // setSelectedLocation(location);
    // setShowLocations(false);
  };

  const handleDelete = (id) => {
    const newLocation = locations.filter((place) => place.id !== id);
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
        <LocationList
          data={locations}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ) : (
        <LocationForm formik={formik} />
      )}
    </div>
  );
}

export default MainLocation;
