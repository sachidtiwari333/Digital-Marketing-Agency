import Image from "next/image";
import Link from "next/link";

export function Navbar () {
  return(
    <nav className="flex justify-between p-5">
      <div className="flex items-center">
        {/* <Image src="/logo.png" alt="Logo" height={100} width={100} /> */}
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold">Be <span className="text-green-500">Next</span> Digital</h1>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">Home</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">services</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">Clients</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">Case Studies</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">About</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">Contact</Link>
        <Link className="px-3 py-1 hover:bg-gray-700 rounded-3xl transition-colors duration-300" href="">Blog</Link>
      </div>
    </nav>
  )
}