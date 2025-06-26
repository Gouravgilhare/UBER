import React from "react";

const LocationSearchPanel = ({
  sugestions,
  // setVehiclePanel,
  // setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (sugestion) => {
    if (activeField === "pickup") {
      setPickup(sugestion);
    } else if (activeField === "destination") {
      setDestination(sugestion);
    }
  };
  return (
    <div>
      {sugestions.map(function (element, index) {
        return (
          <div
            onClick={() => {
              handleSuggestionClick(element);
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
