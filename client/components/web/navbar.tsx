import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar(){
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="text-2xl -mt-4 -ml-4">Be <span className="text-teal-600">Next</span> Digital</h1>
      </div>
      <div className="flex gap-2">
      <Link className={buttonVariants({variant:"ghost"})} href="">Home</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">About</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">Services</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">Work</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">Team</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">Contact Us</Link>
      <Link className={buttonVariants({variant:"ghost"})} href="">CTA</Link>
      <Link className={buttonVariants({variant:"outline"})} href="">Start Project</Link>
      <ThemeToggle />
      </div>
    </div>
  )
}