import React from "react";
import { CarProps } from "./types";
import { generateCarUrl } from "./utils";

type CarDetailsCardProps = {
  handleClosed: () => void;
  car: CarProps;
};

const CarDetailsCard = ({ handleClosed, car }: CarDetailsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
      <img
        className="w-full h-auto object-cover rounded-t-lg"
        src={generateCarUrl(car)}
        alt="Car"
      />
      <div className="p-4">
        <h1 className="text-xl font-semibold">
          {car.make} {car.model}
        </h1>
        <div className="mt-2 text-gray-600">
              {Object.entries(car).map(([key, value], i) => (
                <>
                <p key={i} className="flex justify-between font-[manrope]">
                  <span key={key}>{key}:</span>{" "}
                  <span key={value} className="text-black font-bold">{value}</span>
                  </p>
                </>
              ))}
            
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleClosed}
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Close
          </button>
          <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsCard;
