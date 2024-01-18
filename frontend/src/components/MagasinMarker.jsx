import { Marker, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { useContext, useEffect, useCallback, useState } from "react";
import Supercluster from "supercluster";
import iconMarker from "../assets/marker.png";
import { Link } from "react-router-dom";
import MagasinContext from "../Context/BornesContext";

function GetIcon() {
  // fonction qui permet de customiser l'icône des bornes
  return L.icon({
    iconUrl: iconMarker,
    iconSize: [30, 30],
    iconAnchor: [30, 15],
  });
}
function MagasinMarker() {
  let allMagasin = [];

  // import des contexts qui seront utilisés

  const { magasin, setMagasin } = useContext(MagasinContext);

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

  useEffect(() => {
    // import des data sur les bornes
    axios
      .get(`${API_URL}/magasins`)
      .then((res) => setMagasin(res.data))
      .catch((error) => console.error(error));
  }, []);

  allMagasin = magasin.map((oneMagasin) => ({
    ...oneMagasin,
    type: "Feature",
    properties: {
      cluster: true,
      point_count: magasin.indexOf(oneMagasin),
      clusterId: oneMagasin.code_postal.slice(0, 2),
    },
    geometry: {
      type: "Point",
      coordinates: [oneMagasin.lat, oneMagasin.lng],
    },
  }));

  const supercluster = new Supercluster({ radius: 75, maxZoom: 10 });
  const bounds = [
    -36.64988022329375, -4.915832801313164, 51.328635401706265,
    59.84481485969108,
  ];
  const [zoom, setZoom] = useState(10);
  const [clusters, setClusters] = useState([]);
  const map = useMap();

  function updateMap() {
    setZoom(map.getZoom());
  }
  const onMove = useCallback(() => {
    updateMap();
  }, [map]);

  useEffect(() => {
    updateMap();
  }, []);

  useEffect(() => {
    map.on("move", onMove);
  }, [map, onMove]);

  useEffect(() => {
    supercluster.load(allMagasin);
    setClusters(supercluster.getClusters(bounds, zoom));
  }, [zoom]);

  return (
    <div>
      {clusters.map((cluster) => {
        // every cluster point has coordinates
        const [lat, lng] = cluster.geometry.coordinates;
        // the point may be either a cluster or a crime point
        const { cluster: isCluster } = cluster.properties;

        if (isCluster) {
          return (
            <Link to="/Magasin">
              <Marker
                key={`cluster-${cluster.id}`}
                position={[lat, lng]}
                icon={GetIcon()}
              />
            </Link>
          );
        }
        return cluster.map((mag) => (
          <Link to="/Magasin">
            <Marker position={[lat, lng]} key={mag.id} icon={GetIcon()} />
          </Link>
        ));
      })}
    </div>
  );
}
export default MagasinMarker;
