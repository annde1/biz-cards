import { useEffect, useRef } from "react";
const MapComponent = ({ coords }) => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (window.H && coords && coords.lat && coords.lng) {
      const platform = new window.H.service.Platform({
        apikey: "vkO4zw12R9oMrqqrQIGprb2uwuKIUSt6V8bViZmTXNM",
      });
      const defaultLayers = platform.createDefaultLayers();
      try {
        if (!mapRef.current) {
          const map = new window.H.Map(
            document.getElementById("mapContainer"),
            defaultLayers.vector.normal.map,
            {
              center: coords,
              zoom: 15,
            }
          );
          const marker = new window.H.map.Marker(coords);
          map.addObject(marker);
          mapRef.current = map;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, [coords]);
  if (!coords || !coords.lat || !coords.lng) {
    return null;
  }
  return <div id="mapContainer" style={{ height: "15rem", width: "100%" }} />;
};
export default MapComponent;
