import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import SideBar from "./SideBar";
import { fetchCars } from "./utils";

type Props = {};

function Main({}: Props) {
  const [cars, setCars] = useState([]);
  const [makeInput, setMakeInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("Fuel");
  const [cylinders, setCylinders] = useState("Cylinders");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [selectedDriveType, setSelectedDriveType] = useState<string>("");

  const isDataEmpty = !Array.isArray(cars) || cars.length === 0 || !cars;

  const handleTransmissionChange = (trans: string) => {
    setSelectedTransmission(trans);
  }

  const handleDriveTypeChange = (drive: string) => { 
    setSelectedDriveType(drive);
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCars(
          makeInput,
          yearInput,
          selectedFuel,
          cylinders,
          selectedTransmission,
          selectedDriveType,
        );
        setCars([]);
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchData();
  }, [makeInput, yearInput, selectedFuel, cylinders, selectedTransmission, selectedDriveType]);

  return (
    <div className="mx-4 md:mx-0  md:pt-14 pb-28" id="cars">
      <h1 className="font-[manrope] text-[36px] font-bold lg:text-[45px]">
        Car Catalogue
      </h1>
      <span className="font-[manrope] lg:text-[23px]">
        Explore the cars you might like
      </span>
      <div className="flex flex-col md:flex-row gap-4 pt-6 md:pt-10">
        <div className="relative flex-grow">
          <input
            className="bg-[rgba(59,60,152,.03)] py-[16px] pl-[42px] pr-[16] rounded-full w-full font-[manrope] outline-none"
            style={{
              backgroundImage: `url(https://cars-showcase-ftmk.vercel.app/car-logo.svg)`,
              backgroundPosition: "10px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px auto",
            }}
            placeholder="Volkswagen"
            type="text"
            value={makeInput}
            onChange={(e) => setMakeInput(e.target.value)}
          />
        </div>
        <div className="relative flex-grow">
          <input
            className="bg-[rgba(59,60,152,.03)] py-[16px] pl-[42px] pr-[16] rounded-full w-full font-[manrope] outline-none"
            style={{
              backgroundImage: `url(https://cars-showcase-ftmk.vercel.app/_next/image?url=%2Fmodel-icon.png&w=32&q=75)`,
              backgroundPosition: "10px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "20px auto",
            }}
            placeholder="Year"
            type="text"
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
          />
        </div>
        <div className="flex gap-4 ml-0 md:ml-2">
          <select
            className="py-[8px] px-[12px] font-[manrope] border-[1px] rounded-lg shadow-xl outline-none"
            name="Fuel"
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
          >
            <option value="Fuel">Fuel</option>
            <option value="Gas">Gas</option>
            <option value="Electricity">Electricity</option>
            <option value="Diesel">Diesel</option>
          </select>
          <select
            className="py-[8px] px-[12px] font-[manrope] border-[1px] rounded-lg shadow-xl outline-none"
            name="cylinders"
            value={cylinders}
            onChange={(e) => setCylinders(e.target.value)}
          >
            <option value="Cylinders">Cylinders</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        {!isDataEmpty && (
          <SideBar
          onTransmissionChange={handleTransmissionChange}
          onDriveTypeChange={handleDriveTypeChange}
          />
        )}
        <div className="flex flex-wrap justify-center items-start gap-4 pt-10">
          {!isDataEmpty ? (
            cars.map((car, i) => <Cards key={i} car={car} />)
          ) : (
            <div className="">
              <h1 className="font-[manrope] text-[36px] font-bold lg:text-[45px]">
                No cars found
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
