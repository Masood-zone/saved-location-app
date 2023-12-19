import LocationsContextProvider from "./contexts/LocationsContext";
import MainApp from "./pages";

function App() {
  return (
    <div>
      <LocationsContextProvider>
        <MainApp />
      </LocationsContextProvider>
    </div>
  );
}

export default App;
