import { Hero } from "@/components/web/hero";
import { Navbar } from "@/components/web/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
