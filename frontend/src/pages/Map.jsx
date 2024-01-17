import { MapContainer, TileLayer } from "react-leaflet";
// import BornesMarker from "../components/BornesMarker";
import LocationMarker from "../components/LocationMarker";
import "../scss/Map.scss";

function Map() {
  window.scrollTo(0, 0);
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
            {/* <BornesMarker /> */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Map;
