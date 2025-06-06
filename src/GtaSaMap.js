import React from "react";
import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import points from "./data/points";

// Crea el icono personalizado para USFS
const usfsIcon = icon({
  iconUrl: "icons/usfs.png",
  iconSize: [16, 16], // Tamaño del icono
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Crea el icono personalizado para JJ Bar
const barIcon = icon({
  iconUrl: "icons/bar.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const turismoIcon = icon({
  iconUrl: "icons/turistico.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const negociosIcon = icon({
  iconUrl: "icons/negocio.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const policeIcon = icon({
  iconUrl: "icons/police.png",
  iconSize: [32, 32],
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
//Oficiales
const usfsCoords = [-2084.3704, -2266.5444];

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
      attributionControl={false}
    >
      <ImageOverlay url="gta_sa_map.png" bounds={bounds} />

      {points.map((point, index) => (
        <Marker
          key={index}
          position={gameCoordsToImgCoords(...point.coords)}
          icon={point.type === "usfs"
            ? usfsIcon
            : point.type === "bar"
            ? barIcon
            : point.type === "turistico"
            ? turismoIcon
            : point.type === "negocio"
            ? negociosIcon
            : point.type === "police"
            ? policeIcon
            : null
          }
        >
          <Popup>{point.name}<br/>{point.description}</Popup>
        </Marker>
      ))}

    </MapContainer>
  );
}
