import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "742 Evergreen Terrace Springfield, USA ZIP: 62704",
    "10 Downing Street Westminster, London, UK Postal Code: SW1A 2AA",
    "1600 Pennsylvania Avenue NW Washington, D.C., USA ZIP: 20500",
    "1-1 Chiyoda Chiyoda City, Tokyo, Japan Postal Code: 100-8111",
    " 221B Baker Street London, UK Postal Code: NW1 6XE",
  ];
  return (
    <div>
      {locations.map(function (element, index) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex gap-4 items-center my-2 active:border-black border-2  p-3 border-gray-200  rounded-xl justify-start"
          >
            <h2 className="bg-[#eee] rounded-full w-8 h-8 px-2 flex text-lg justify-center items-center">
              <i className="ri-map-pin-2-fill "></i>
            </h2>
            <h4 className="text-sm bg-[#eee] px-5  font-medium rounded-full">
              {element}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
