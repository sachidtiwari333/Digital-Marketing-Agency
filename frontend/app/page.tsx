import { Hero } from "@/components/web/hero";
import { Navbar } from "@/components/web/navbar";
import { MarqueeDemo } from "@/components/web/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeDemo />
      <h1>Hello</h1>
    </>
  );
}
