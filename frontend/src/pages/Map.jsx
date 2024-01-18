import { MapContainer, TileLayer } from "react-leaflet";
import { useContext } from "react";
import MagasinMarker from "../components/MagasinMarker";
import LocationMarker from "../components/LocationMarker";
import ProductContext from "../Context/ProductContext";
import "../scss/Map.scss";

function Map() {
  window.scrollTo(0, 0);
  const { selectedProduct } = useContext(ProductContext);
  console.info(selectedProduct);
  return (
    <div className="allMap">
      <div className="Container">
        <div className="Leaflet_Map">
          <MapContainer
            className="Map"
            center={{ lat: 46.67470283734314, lng: 2.425212152134166 }}
            zoom={10}
            scrollWheelZoom={window.innerWidth > 980}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
            <MagasinMarker />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Map;
