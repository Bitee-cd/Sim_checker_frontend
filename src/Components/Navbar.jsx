import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Navbar() {
  return (
    <nav className=" flex flex-col gap-8 sm:flex-row justify-between ">
      <h3 className="text-3xl font-medium ">Sim Checker</h3>
      <div className=" flex flex-col gap-4  w-fit ">
        <h4 className="font-semibold text-2xl">The Developers</h4>
        <a
          href="https://github.com/Bitee-cd"
          target="_blank"
          rel="noreferrer"
          className=" grid items-center grid-cols-2 hover:translate-x-4  transition-transform ease-linear cursor-pointer"
        >
          Bitee
          <span>
            <HiArrowNarrowRight />
          </span>
        </a>
        <a
          href="https://github.com/Arachalev"
          target="_blank"
          rel="noreferrer"
          className="grid items-center grid-cols-2 hover:translate-x-4  transition-transform ease-linear cursor-pointer"
        >
          Ekong
          <span>
            <HiArrowNarrowRight />
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
