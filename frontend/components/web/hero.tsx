import { ChevronRight, MoveRight } from "lucide-react";
import { Orbital} from "../ui/orbital";

export function Hero () {
  return(
    <section className="p-5 grid lg:grid-cols-2">
      <div className="flex flex-col gap-5 text-center lg:text-left " >

      <h3 className="uppercase text-cyan-700  md:text-2xl">Creative Ideas, Digital Growth</h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase">Make your brand </h1>
      <h1 className="text-emerald-500 text-5xl md:text-6xl lg:text-7xl uppercase italic">impossible</h1>
      <h1 className="text-5xl md:text-7xl lg:text-8xl uppercase">to ignore.</h1>
      <p className="text-xl">We are digital marketing and creative growth agency <br /> help businesses growth with strategy, creativity and <br /> stunning visuals</p>
      <div className="flex gap-5 items-center justify-around uppercase text-sm md:text-2xl ">
        <button className="px-5 py-2 rounded-md bg-green-700 flex items-center gap-5">Start a project <MoveRight /> </button>
        <button className="px-5 py-2 border-2 border-gray-600 rounded-md flex items-center gap-5">View our work <ChevronRight /></button>
      </div>
      </div>
      <div className="hidden lg:block">
    <Orbital />
      </div>
    </section>
  )
}