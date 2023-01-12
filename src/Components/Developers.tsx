import React from "react";
// import { HiArrowNarrowRight } from "react-icons/hi";

const Developers = () => {
  return (
    <div className=" mt-10">
      <h4 className="font-semibold text-2xl">The Developers</h4>
      <div className=" md:flex gap-4 gap-y-5  w-fit mt-3 md:mt-5">
        <a
          href="https://github.com/Bitee-cd"
          target="_blank"
          rel="noreferrer"
          className=" grid items-center grid-cols-2 hover:text-dark_purple  transition-transform ease-linear cursor-pointer"
        >
          Bitee
          {/* <span>
            <HiArrowNarrowRight />
          </span> */}
        </a>
        <a
          href="https://github.com/Arachalev"
          target="_blank"
          rel="noreferrer"
          className="grid items-center grid-cols-2 hover:text-dark_purple  transition-transform ease-linear cursor-pointer"
        >
          Ekong
          {/* <span>
            <HiArrowNarrowRight />
          </span> */}
        </a>
      </div>
    </div>
  );
};

export default Developers;
