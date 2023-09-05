import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div className="flex flex-col pb-8 md:flex-row lg:pt-20 pt-10 items-center xl:justify-center xl:gap-36 ">
      <div className="lg:ml-20 md:ml-4 sm:ml-4 md:w-[50%] lg:w-[40%] xs:w-full flex flex-col gap-5 sm:w-[100%]">
        <p className="font-[manrope] lg:text-[62px] md:text-[55px] text-[30px] font-bold max-w-full">
          Find, book, or rent a car — quickly and easily!
        </p>
        <p className="lg:text-[27px] md:text-[22px] text-[16px]">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <a href="#cars">
          <button className="text-white px-6 py-3 bg-blue-600 rounded-full w-36 whitespace-nowrap">
            Explore Cars
          </button>
        </a>
      </div>
      <div className="w-full md:w-[50%] relative mt-4 md:mt-0">
        <img
          className="w-full min-w-[300px] object-contain"
          src="https://cars-showcase-ftmk.vercel.app/_next/image?url=%2Fhero.png&w=1920&q=75"
          alt="Car"
        />
        <img
          className="absolute md:-top-44 bottom-12 -z-10 w-full md:w-[1200px]"
          src="https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/public/hero-bg.png?raw=true"
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Home;
