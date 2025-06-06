import React from "react";
import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Crea el icono personalizado para USFS
const usfsIcon = icon({
  iconUrl: "/icons/usfs.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Crea el icono personalizado para JJ Bar
const barIcon = icon({
  iconUrl: "/icons/bar.png",
  iconSize: [64, 64],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Conversión de coordenadas del juego a imagen
const IMAGE_HEIGHT = 6000;
function gameCoordsToImgCoords(x_game, y_game) {
  const escala_x = 0.9984;
  const offset_x = 2998.07;
  const escala_y = -1.0020;
  const offset_y = 2995.91;
  const x_img = escala_x * x_game + offset_x;
  const y_img = escala_y * y_game + offset_y;
  const y_img_invertido = IMAGE_HEIGHT - y_img;
  return [y_img_invertido, x_img];
}

// Coordenadas de los puntos
const usfsCoords = [-2084.3704, -2266.5444];
const jjBarCoords = [-2104.1787, -2342.3433]; // JJ Bar

const bounds = [
  [0, 0],
  [6000, 6000],
];

export default function GtaSaMap() {
  return (
    <MapContainer
      center={gameCoordsToImgCoords(...usfsCoords)}
      zoom={1}
      minZoom={-2}
      maxZoom={2}
      crs={CRS.Simple}
      scrollWheelZoom={true}
      style={{ height: "80vh", width: "100%" }}
      maxBounds={bounds}
      maxBoundsViscosity={1.0}
    >
      <ImageOverlay url="/gta_sa_map.png" bounds={bounds} />
      <Marker
        position={gameCoordsToImgCoords(...usfsCoords)}
        icon={usfsIcon}
      >
        <Popup>Estacion US. Forest Service</Popup>
      </Marker>
      <Marker
        position={gameCoordsToImgCoords(...jjBarCoords)}
        icon={barIcon}
      >
        <Popup>J & J´s Restaurant<br /></Popup>
      </Marker>
    </MapContainer>
  );
}