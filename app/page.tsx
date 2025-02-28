"use client"
import About from "@/components/ui/About";
import Choose from "@/components/ui/Choose";


import Hero from "@/components/ui/Hero";

import Menu from "@/components/ui/Menu";
import Reservation from "@/components/ui/Reservation";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => {
    return import("@/components/ui/Map");
  },
  { ssr: false }
);



export default function Home() {
  return (
   <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
    

   <Hero />
   <Menu />
   <Choose />
   <Reservation />
   <About />
   <Map />

   </main>
  );
}
