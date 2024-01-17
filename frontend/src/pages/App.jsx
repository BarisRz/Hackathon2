import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocationContext from "../Context/LocationContext";
import BornesContext from "../Context/BornesContext";

import "../styles/root.scss";

function App() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const positionValue = useMemo(
    () => ({ position, setPosition }),
    [position, setPosition]
  );
  const magasinValue = useMemo(
    () => ({ magasin, setMagasin }),
    [magasin, setMagasin]
  );
  return (
    <>
      <Navbar />
      <BornesContext.Provider value={magasinValue}>
        <LocationContext.Provider value={positionValue}>
          <Outlet />
        </LocationContext.Provider>
      </BornesContext.Provider>
      <Footer />
    </>
  );
}

export default App;
