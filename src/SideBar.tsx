import React from "react";

type SideBarProps = {
  onTransmissionChange: (trans: string) => void;
  onDriveTypeChange: (drive: string) => void;
};

function SideBar({ onTransmissionChange, onDriveTypeChange }: SideBarProps) {
  return (
    <div className="hidden md:flex flex-col w-[900px] h-[700px] bg-[#F6F7F9] rounded-lg p-7">
      <div>
        <span className="uppercase text-[#D9D9D9] font-[Plus Jakarta Sans] text-[12px] tracking-widest">
          transmission
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center pt-5">
          <input
            onChange={() => onTransmissionChange("m")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Manual" className="ml-2 text-[#596780]">
            Manual
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => onTransmissionChange("a")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Automatic" className="ml-2 text-[#596780]">
            Automatic
          </label>
        </div>
      </div>
      <div className="pt-10">
        <span className="uppercase text-[#D9D9D9] font-[Plus Jakarta Sans] text-[12px] tracking-widest">
          transmission
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center pt-5">
          <input
            onChange={() => onDriveTypeChange("fwd")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Manual" className="ml-2 text-[#596780]">
            FWD
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => onDriveTypeChange("rwd")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Automatic" className="ml-2 text-[#596780]">
            RWD
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => onDriveTypeChange("awd")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Automatic" className="ml-2 text-[#596780]">
            AWD
          </label>
        </div>
        <div className="flex items-center">
          <input
            onChange={() => onDriveTypeChange("4wd")}
            type="checkbox"
            className="ui-checkbox"
          />
          <label htmlFor="Automatic" className="ml-2 text-[#596780]">
            4WD
          </label>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
