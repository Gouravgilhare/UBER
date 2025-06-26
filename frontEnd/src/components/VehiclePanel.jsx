import React, { Component } from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <div>
        <h5
          onClick={() => {
            props.setVehiclePanel(false);
          }}
          className="p-3 text-center w-[93%] absolute text-3xl text-gray-300 pt-5 top-0 "
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold p-4 ">Choose a Vehicle</h3>
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
            props.setVehicleType('car');
          }}
          className="flex w-full p-3 py-6 border-2 border-gray-100 active:border-black mb-2 bg-gray-100   rounded-xl items-center justify-between"
        >
          <img className=" h-12" src="/images/car.png" alt="car" />
          <div className="  w-1/2">
            <h4 className="font-medium text-base">
              UberGO{" "}
              <span>
                {" "}
                <i className="ri-user-3-fill "></i>
              </span>
              4
            </h4>
            <h5 className="font-medium text-base">2 Mins away</h5>
            <p className="font-normal text-xs">Affordable, compact rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
        </div>
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
           props.setVehicleType('auto');
          }}
          className="flex w-full p-3 py-6 border-2 mb-2 bg-gray-100 border-gray-100 active:border-black  rounded-xl items-center justify-between"
        >
          <img className=" h-12" src="/images/auto.png" alt="car" />
          <div className="  w-1/2">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                {" "}
                <i className="ri-user-3-fill "></i>
              </span>
              3
            </h4>
            <h5 className="font-medium text-base">3 Mins away</h5>
            <p className="font-normal text-xs">Affordable, auto rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
        </div>
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
           props.setVehicleType('motorcycle');
          }}
          className="flex w-full p-3 py-6 border-2 mb-2 bg-gray-100 border-gray-100 active:border-black  rounded-xl items-center justify-between"
        >
          <img className=" h-12" src="/images/bike.png" alt="car" />
          <div className=" -ml-4  w-1/2">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                {" "}
                <i className="ri-user-3-fill "></i>
              </span>
              1
            </h4>
            <h5 className="font-medium text-base">2 Mins away</h5>
            <p className="font-normal text-xs">Affordable, motorcycle rides</p>
          </div>
          <h2 className="text-lg font-semibold">₹{props.fare.motorcycle }</h2>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
