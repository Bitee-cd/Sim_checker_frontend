import React from "react";
import { IoBulbSharp, IoHappyOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import Developers from "./Developers";

function Steps() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3 mt-5 font-[600]">
        <div className="flex gap-2 md:px-5 border-r-light_blue md:border-r-[1px] items-center">
          <IoBulbSharp className="text-xl" size={70} />
          <div>
            <h2>Find your Sim</h2>
            <p className="text-light_blue">
              Unsure about an unsaved number mobile provider? Use sim checker
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:px-5 border-r-light_blue md:border-r-[1px] items-center">
          <FiFilter className="text-xl" size={40} />
          <div>
            <h2>Open source </h2>
            <p className="text-light_blue">
              Developed by Nigerians, for Nigerians
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:px-5 items-center">
          <IoHappyOutline className="text-xl" size={60} />
          <div>
            <h2>Easy To Use</h2>
            <p className="text-light_blue">
              With a simple 3 step process you get to check fast and easy
            </p>
          </div>
        </div>
      </div>
      <Developers />
    </div>
  );
}

export default Steps;
