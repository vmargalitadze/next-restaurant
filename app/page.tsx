"use client"
import About from "@/components/ui/About";
import Choose from "@/components/ui/Choose";


import Hero from "@/components/ui/Hero";
import dynamic from "next/dynamic";



import Menu from "@/components/ui/Menu";
import Reservation from "@/components/ui/Reservation";
import { useMemo } from "react";






export default function Home() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/ui/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])
  return (
   <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
    

   <Hero />
   <Choose />
   <Menu />
   <Reservation />

   <About />
    <Map />
   </main>
  );
}
