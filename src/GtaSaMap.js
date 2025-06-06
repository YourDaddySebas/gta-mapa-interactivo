import React from "react";
import { MapContainer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { CRS, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Crea el icono personalizado para USFS
const usfsIcon = icon({
  iconUrl: "/icons/usfs.png",
  iconSize: [16, 16], // Tamaño del icono
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Crea el icono personalizado para JJ Bar
const barIcon = icon({
  iconUrl: "/icons/bar.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const turismoIcon = icon({
  iconUrl: "/icons/turistico.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const negociosIcon = icon({
  iconUrl: "/icons/negocio.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const policeIcon = icon({
  iconUrl: "/icons/police.png",
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
const torre1Coords = [-1695.3263,-1951.0153]; // Torre Shady Creeks
const torre2Coords = [-469.8576,-2429.3118]; // Torre Back o Beyond
const AngelPineSheriffCoords = [-2162.2605,-2385.6914]; // Subestacion del sheriff de Angel Pine
const shadycabinsCoords = [-1643.9023,-2240.2190]; // Shady Cabins
const minaAbandonadaCoords = [-982.7253,-2153.6487]; // Mina Abandonada
const atalayaCoords = [-799.1308,-2258.7817]; // Atalaya
const centroRecreativoCoords = [-793.6925,-1913.1815,6.6391]; // Centro Recreativo
//negocios---
const jjBarCoords = [-2104.1787, -2342.3433]; // JJ Bar
const mundysDinnerCoords = [-1525.6049,-2767.1841]; // Mundy's Dinner
const rustlyAntlerCoords = [-1562.5034,-2733.3577]; // Rustly Antler
const estacionGasolinaAPCoords = [-1602.1514,-2709.9587]; // Estación de Gasolina AP
const RustRoadCoords = [-1624.3854,-2693.2678,48.7427]; // Rust Road concecionaria


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

      //Shady Cabins
      <Marker
        position={gameCoordsToImgCoords(...shadycabinsCoords)}
        icon={turismoIcon}
      >
        <Popup>Shady Cabins<br/>Una cabaña abandonada, por algun motivo atrae a los turistas</Popup>
      </Marker>

      <Marker
        position={gameCoordsToImgCoords(...torre1Coords)}
        icon={usfsIcon}
      >
        <Popup>Torre de vigilancia Shady Creeks <br/>Una torre de vigilancia a servicio del US. Forest Service</Popup>
      </Marker>

      <Marker
        position={gameCoordsToImgCoords(...torre2Coords)}
        icon={usfsIcon}
      >
        <Popup>Torre de vigilancia Back o Beyond <br/>Una torre de vigilancia a servicio del US. Forest Service</Popup>
      </Marker>

      // Mina Abandonada
      <Marker
        position={gameCoordsToImgCoords(...minaAbandonadaCoords)}
        icon={turismoIcon}
      >
        <Popup>Mina Abandonada<br/>Una mina abandonada, por algun motivo atrae a los turistas</Popup>
      </Marker>

      // Atalaya
      <Marker position={gameCoordsToImgCoords(...atalayaCoords)} icon={turismoIcon}>
        <Popup>Atalaya Española<br/>Conoce el pasado y la gran arquitectura de la misma..¿que hace aqui?...¿porque aqui?</Popup>
      </Marker>
      // Centro Recreativo
      <Marker position={gameCoordsToImgCoords(...centroRecreativoCoords)} icon={turismoIcon}>
        <Popup>Centro Recreativo<br/>Visita el Centro Recreativo de Whetstone, vive una experiencia agradable en familia y amigos.</Popup>
      </Marker>
      // Mundy's Dinner
      <Marker position={gameCoordsToImgCoords(...mundysDinnerCoords)} icon={barIcon}>
        <Popup>Mundy's Dinner<br/>Un restaurante de comida rápida, con un ambiente agradable y familiar.</Popup>
      </Marker>
      // Rustly Antler
      <Marker position={gameCoordsToImgCoords(...rustlyAntlerCoords)} icon={barIcon}>
        <Popup>Rustly Antler<br/>Un bar con un ambiente agradable, ideal para pasar un buen rato.</Popup>
      </Marker>

      // Estación de Gasolina AP
      <Marker position={gameCoordsToImgCoords(...estacionGasolinaAPCoords)} icon={negociosIcon}>
        <Popup>Estación de Gasolina AP<br/>Una estación de gasolina, ideal para repostar combustible.</Popup>
      </Marker>
      // Rust & Road
      <Marker position={gameCoordsToImgCoords(...RustRoadCoords)} icon={negociosIcon}>
        <Popup>Rust & Road<br/>Una concesionaria de autos, ideal para comprar un vehículo.</Popup>  
      </Marker>
      // Angel Pine Sheriff
      <Marker position={gameCoordsToImgCoords(...AngelPineSheriffCoords)} icon={policeIcon}>
        <Popup>Subestación del Sheriff de Angel Pine<br/>La subestación del sheriff de Angel Pine, encargada de la seguridad de la zona.</Popup>
      </Marker>

      


    </MapContainer>
  );
}