import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import { Layer } from "ol/layer";

useGeographic();

const view = new View({ center: [10.8, 59.9], zoom: 10 });
const map = new Map({ view });

function Application() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [layers, setLayers] = useState<Layer[]>([
    new TileLayer({ source: new OSM() }),
  ]);
  useEffect(() => map.setTarget(mapRef.current!), []);
  useEffect(() => map.setLayers(layers), [layers]);

  return (
    <>
      <nav>
        <button>Center on me</button>
      </nav>
      <main>
        <div ref={mapRef}></div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Application />);
