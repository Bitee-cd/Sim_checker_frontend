import React from "react";

function Navbar() {
  return (
    <nav className=" flex flex-col gap-8 sm:flex-row justify-between ">
      <h3 className="text-3xl font-medium ">Sim Checker</h3>
      <a
        className="hover:text-dark_purple"
        href="https://en.wikipedia.org/wiki/Telephone_numbers_in_Nigeria"
      >
        Data source
      </a>
    </nav>
  );
}

export default Navbar;
