
import Image from "next/image";
import { OrbitingCircles } from "./orbiting-circles";

export function Orbital() {
  const outerServices = [
    "Digital Marketing",
    "Video Production",
    "Drone Service",
    "Content Creation",
  ];

  const innerServices = [
    "Graphics Design",
    "Social Media",
    "Product Shoots",
    "Advertising",
  ];

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden md:h-[500px]">

      {/* =========================
          AMBIENT CENTER GLOW
      ========================== */}
      <div className="absolute h-40 w-40 rounded-full bg-emerald-500/20 blur-[80px]" />

      <div className="absolute h-32 w-32 rounded-full bg-cyan-400/10 blur-[60px]" />

      {/* =========================
          ORBIT RINGS
      ========================== */}

      {/* Outer Ring */}
      <div
        className="
          absolute
          h-[360px] w-[360px]
          rounded-full
          border border-white/5
          md:h-[440px] md:w-[440px]
        "
      />

      {/* Inner Ring */}
      <div
        className="
          absolute
          h-[230px] w-[230px]
          rounded-full
          border border-white/5
          md:h-[280px] md:w-[280px]
        "
      />

      {/* =========================
          OUTER ORBIT
      ========================== */}

      <OrbitingCircles
        iconSize={40}
        radius={210}
        speed={0.7}
      >
        {outerServices.map((service) => (
          <div
            key={service}
            className="
              cursor-pointer
              whitespace-nowrap
              rounded-full
              border border-white/10
              bg-white/5
              px-4 py-2
              text-[9px]
              font-medium
              uppercase
              tracking-wider
              text-white/70
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-300
              ease-out

              hover:scale-110
              hover:border-emerald-400/50
              hover:bg-emerald-400/10
              hover:text-emerald-300
              hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]

              md:text-[10px]
            "
          >
            {service}
          </div>
        ))}
      </OrbitingCircles>

      {/* =========================
          INNER ORBIT
      ========================== */}

      <OrbitingCircles
        iconSize={30}
        radius={110}
        reverse
        speed={1.2}
      >
        {innerServices.map((service) => (
          <div
            key={service}
            className="
              cursor-pointer
              whitespace-nowrap
              rounded-full
              border border-cyan-400/20
              bg-black/30
              px-3 py-1.5
              text-[8px]
              font-medium
              uppercase
              tracking-wide
              text-cyan-200/70
              shadow-md
              backdrop-blur-md
              transition-all
              duration-300
              ease-out

              hover:scale-110
              hover:border-cyan-300/60
              hover:bg-cyan-400/10
              hover:text-cyan-200
              hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]

              md:text-[9px]
            "
          >
            {service}
          </div>
        ))}
      </OrbitingCircles>

      <div
        className="
          relative
          z-10
          flex
          h-24 w-24
          items-center
          justify-center
          rounded-full
          border border-white/15
          bg-black/40
          p-4
          shadow-[0_0_60px_rgba(16,185,129,0.25)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:scale-105
          hover:border-emerald-400/30
          hover:shadow-[0_0_90px_rgba(16,185,129,0.35)]

          md:h-32 md:w-32
          md:p-6
        "
      >
        <Image
          src="/logo.png"
          alt="Be Next Digital"
          width={200}
          height={200}
          priority
          className="h-auto w-auto object-contain"
        />
      </div>

    </div>
  );
}

