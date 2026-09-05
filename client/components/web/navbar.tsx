import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h1 className="text-3xl ml-4 hidden lg:block">
          Be <span className="text-teal-600">Next</span> Digital
        </h1>
      </div>
      <div className="flex gap-2 ">
        <div className=" hidden md:flex gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            About
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            Services
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            Work
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            Team
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            Contact Us
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="">
            CTA
          </Link>
          <Link className={buttonVariants({ variant: "outline" })} href="">
            Start Project
          </Link>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
