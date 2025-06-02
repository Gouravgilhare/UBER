import React from "react";

const LocationSearchPanel = () => {
  return (
    <div>
      <div className="flex gap-4 items-center my-4 justify-start">
        <h2 className="bg-[#eee] rounded-full w-8 h-8 flex text-lg justify-center items-center">
          <i className="ri-map-pin-2-fill "></i>
        </h2>
        <h4 className="text-sm bg-[#eee] px-2  font-medium rounded-full">
          742 Evergreen Terrace Springfield, USA ZIP: 62704
        </h4>
      </div>
      <div className="flex gap-4 items-center my-4 justify-start">
        <h2 className="bg-[#eee] rounded-full w-8 h-8 flex text-lg justify-center items-center">
          <i className="ri-map-pin-2-fill "></i>
        </h2>
        <h4 className="text-sm bg-[#eee] px-2  font-medium rounded-full">
          10 Downing Street Westminster, London, UK Postal Code: SW1A 2AA
        </h4>
      </div>
      <div className="flex gap-4 items-center my-4 justify-start">
        <h2 className="bg-[#eee] rounded-full w-8 h-8 flex text-lg justify-center items-center">
          <i className="ri-map-pin-2-fill "></i>
        </h2>
        <h4 className="text-sm bg-[#eee] px-2  font-medium rounded-full">
          1600 Pennsylvania Avenue NW Washington, D.C., USA ZIP: 20500
        </h4>
      </div>
      <div className="flex gap-4 items-center my-4 justify-start">
        <h2 className="bg-[#eee] rounded-full w-8 h-8 flex text-lg justify-center items-center">
          <i className="ri-map-pin-2-fill "></i>
        </h2>
        <h4 className="text-sm bg-[#eee] px-2  font-medium rounded-full">
          1-1 Chiyoda Chiyoda City, Tokyo, Japan Postal Code: 100-8111
        </h4>
      </div>
      <div className="flex gap-4 items-center my-4 justify-start">
        <h2 className="bg-[#eee] rounded-full w-8 h-8 flex text-lg justify-center items-center">
          <i className="ri-map-pin-2-fill "></i>
        </h2>
        <h4 className="text-sm bg-[#eee] px-2  font-medium rounded-full">
          221B Baker Street London, UK Postal Code: NW1 6XE
        </h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
