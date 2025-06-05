import React from "react";

const LookingForDriver = (props) => {
  return (
      <div>
      {" "}
     
        <h5
          className="p-3 text-center w-[93%] absolute text-3xl h-10 flex justify-center items-center text-gray-300  top-0 "
          onClick={() => {
            props.setVehicleFound(false);
          }}
        >
          <i className="ri-arrow-down-wide-line  "></i>
        </h5>
    
      <h3 className="text-2xl font-semibold p-4 ">Looking For Driver</h3>
      <div className="flex gap-2 justify-between items-center flex-col ">
        <img className=" h-20" src="/images/car.png" alt="car" />
        <div className="w-full mt-2">
          <div className="flex items-center gap-5  p-3 border-gray-300 border-b-2">
            <i className=" text-3xl  ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">
                742 Evergreen Terrace Springfield,
              </h3>
              <p className="text-sm text-gray-800">USA ZIP: 62704</p>
            </div>
          </div>
          <div className="flex items-center gap-5  p-3  border-gray-300 border-b-2">
            <i className=" text-3xl ri-map-pin-2-line"></i>
            <div>
              <h3 className="text-lg font-medium ">
                742 Evergreen Terrace Springfield,
              </h3>
              <p className="text-sm text-gray-800">USA ZIP: 62704</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5  p-3 ">
              <i className="ri-money-rupee-circle-fill text-3xl"></i>
              <div>
                <h3 className="text-lg font-medium ">196.35</h3>
                <p className="text-sm text-gray-800">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default LookingForDriver;
