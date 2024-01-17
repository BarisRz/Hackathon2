import { Marker } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { useContext, useEffect } from "react";
import iconMarker from "../assets/marker.svg";
import BornesContext from "../Context/BornesContext";

function GetIcon() {
  // fonction qui permet de customiser l'icône des bornes
  return L.icon({
    iconUrl: iconMarker,
    iconSize: [30, 30],
    iconAnchor: [30, 15],
  });
}
function BornesMarker() {
  // import des contexts qui seront utilisés

  const { magasin, setMagasin } = useContext(BornesContext);

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

  useEffect(() => {
    // import des data sur les bornes
    axios
      .get(`${API_URL}/bornes`)
      .then((res) => setMagasin(res.data))
      .catch((error) => console.error(error));
  }, []);

  return magasin.map((mag) => (
    <Marker position={(mag.lat, mag.lng)} key={mag.id} icon={GetIcon()} />
  ));
}

export default BornesMarker;
