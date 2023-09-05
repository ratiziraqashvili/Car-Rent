import React, { useState } from "react";
import CarDetailsCard from "./CarDetailsCard";
import { CarProps } from "./types";
import { calculateCarRent, generateCarUrl } from "./utils";

interface CarCardProps {
  car: CarProps;
}

const Cards = ({ car }: CarCardProps) => {
  const [detail, setDetail] = useState<boolean>(false);

  const { city_mpg, year, make, model, transmission } = car
  const carRent = calculateCarRent(city_mpg, year)

  const handleDetail = () => {
    setDetail(true);
  };
  const handleClosed = () => {
    setDetail(false);
  };
  return (
    <div>
        {detail && (
          <div className="modal-overlay" onClick={handleClosed}>
            <CarDetailsCard car={car} handleClosed={handleClosed} />
          </div>
        )}

      <div className="bg-white rounded-xl shadow-lg p-4  w-[272px] h-[400px] flex flex-col justify-between transition-transform transition-bg hover:scale-105 hover:bg-blue-100">
        <img
          src={generateCarUrl(car)}
          alt=""
          className="w-full h-[200px] object-contain rounded-t-xl"
        />
        <div>
          <h1 className="font-[manrope] font-bold text-[18px] mt-2">
            {make} {model}
          </h1>
          <span className="font-[manrope] text-[18px] text-blue-600 font-semibold">
            ${carRent}/day
          </span>
          <div className="mt-2">
            <div className="flex items-center justify-between pt-5">
              <div className="flex items-center">
                <img
                  src="https://cars-showcase-ftmk.vercel.app/steering-wheel.svg"
                  alt="Automatic"
                  className="w-4 h-4"
                />
                <span className="ml-2 text-sm">Automatic</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://cars-showcase-ftmk.vercel.app/tire.svg"
                  alt="FWD"
                  className="w-4 h-4"
                />
                <span className="ml-2 text-sm">FWD</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://cars-showcase-ftmk.vercel.app/gas.svg"
                  alt="MPG"
                  className="w-4 h-4"
                />
                <span className="ml-2 text-sm">{city_mpg} MPG</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleDetail}
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Cards;
