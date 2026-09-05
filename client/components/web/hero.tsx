import { ChevronRight, MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-28">
      
      {/* Badge */}
      <p className="rounded-md border-2 border-gray-500 px-3 py-1 text-xs sm:text-sm">
        Digital Marketing and Creative Growth Agency
      </p>

      {/* Heading */}
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
        We Turn Attention{" "}
        <br className="hidden sm:block" />
        Into{" "}
        <span className="text-emerald-400">
          Business Growth
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
        From creative content to powerful campaigns, we help brands
        grow, engage & dominate online.
      </p>

      {/* Buttons */}
      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
        
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-700 px-6 py-3 transition hover:bg-green-600 sm:w-auto sm:px-8">
          Grow Your Business
          <MoveRight size={20} />
        </button>

        <button className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-700 px-6 py-3 transition hover:bg-gray-800 sm:w-auto sm:px-8">
          View Our Work
          <ChevronRight size={20} />
        </button>

      </div>
    </section>
  );
}