import React, { useState } from "react";
import { createContext } from "react";

export const LocationsContext = createContext();

function LocationsContextProvider({ children }) {
  const [locations, setLocations] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    setLocations([...locations, data]);
  };
  const onDelete = (name) => {
    const newLocation = locations.filter((location) => location.name !== name);
    setLocations(newLocation);
  };

  return (
    <LocationsContext.Provider value={{ locations, onSave, onDelete }}>
      {children}
    </LocationsContext.Provider>
  );
}

export default LocationsContextProvider;
