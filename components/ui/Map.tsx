"use client";


import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { Icon, LatLngTuple } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Image from "next/image";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then(({ MapContainer }) => MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(({ TileLayer }) => TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(({ Marker }) => Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(({ Popup }) => Popup), { ssr: false });

const markers: { position: LatLngTuple; title: string; subtitle: string; image: string }[] = [
  {
    position: [41.6460936, 41.6282782],
    title: "Location 1",
    subtitle: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, quis.",
    image: "/map/1.png",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

function Map() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20 xl:after:from-white xl:after:via-white/80 xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:w-full"
      id="contact"
    >
      <MapContainer
        zoom={isMobile ? 10 : 12}
        zoomControl={false}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        center={[41.6460936, 41.6282782]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {markers.map((m, i) => (
          <Marker icon={customIcon} position={m.position} key={i}>
            <Popup>
              <div className="flex gap-x-[30px]">
                <div>
                  <h3>{m.title}</h3>
                  <p className="leading-snug">{m.subtitle}</p>
                </div>
                <div className="flex-1">
                  <Image width={130} height={160} src={m.image} alt="marker" />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
}

export default Map;
