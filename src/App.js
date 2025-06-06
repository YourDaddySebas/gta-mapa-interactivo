import React from "react";
import GtaSaMap from "./GtaSaMap";
import "./App.css";

function App() {
  return (
    <div className="gta-map-container">
      <img
        src="/images/jjbar.png"
        alt="J & J's Restaurant"
        className="img-folleto-jjs"
      />
      <img
        src="/images/usfs-logo.png"
        alt="USFS"
        className="img-folleto-usfs"
      />
      
      <img
        src="/images/smokey.png"
        alt="Smokey Bear - El bosque es mi casa"
        className="img-folleto-smokey"
      />

      <h1 className="titulo-mapa">Mapa Interactivo Whetstone</h1>
      <GtaSaMap />
    </div>
  );
}

export default App;