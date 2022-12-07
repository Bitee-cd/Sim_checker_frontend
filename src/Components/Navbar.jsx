import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="flex justify-between ">
      <h3 className="text-3xl font-medium">Sim Checker</h3>
      <div className=" flex flex-col gap-4   ">
        <h4 className="font-semibold text-2xl">The Developers</h4>
        <p className="flex  items-center justify-between hover:translate-x-4  transition-transform ease-linear cursor-pointer">
          Bitee
          <span>
            <HiArrowNarrowRight />
          </span>
        </p>
        <p className="flex  items-center justify-between hover:translate-x-4  transition-transform ease-linear cursor-pointer">
          Ekong
          <span>
            <HiArrowNarrowRight />
          </span>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
