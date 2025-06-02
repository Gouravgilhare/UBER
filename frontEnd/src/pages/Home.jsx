import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import "remixicon/fonts/remixicon.css";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, { height: "70%", padding: 24 });
        gsap.to(panelCloseRef.current, { opacity: 1 });
      } else {
        gsap.to(panelRef.current, { height: "0%", padding: 0 });
        gsap.to(panelCloseRef.current, { opacity: 0 });
      }
    },
    [panelOpen]
  );

  return (
    <>
      <div className="h-screen absolute overflow-hidden">
        <img
          src="/images/uberLogo.png"
          alt="uberlogo"
          className=" w-16 absolute top-3 left-3"
        />

        <div className="h-screen w-screen">
          {/* Image for temporary use */}
          <img
            src="/images/ubermap.png"
            alt="Map"
            className=" object-cover h-full w-full"
          />
        </div>
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
          <h5
            ref={panelCloseRef}
            className="absolute top-6  opacity-0 right-6 text-xl"
            onClick={() => {
              setPanelOpen(false);
            }}
          >
            <img src="/images/arrow-down-wide-line.png" alt="" />
          </h5>
          <div className="h-[30%] p-5 bg-white rounded-md">
            <h4 className="text-3xl font-semibold ">Find a trip</h4>
            <form
              action=""
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute h-13 w-1 mt-9 left-10 bg-gray-800 rounded-full "></div>
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                className=" bg-[#eee] px-8 w-full text-base   mt-5 py-2 text-sm rounded-lg"
                type="text"
                placeholder="Add a Pick-up Location  "
              />
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                className=" bg-[#eee] px-8 w-full  text-base  mt-3 py-2 text-sm rounded-lg"
                type="text"
                placeholder="Enter your destination  "
              />
            </form>
          </div>
          <div ref={panelRef} className=" bg-white  h-0 ">
            <LocationSearchPanel />
          </div>
        </div>

        <div className="fixed w-full  z-10 p-2 bg-white bottom-0">
          <h3 className="text-2xl font-semibold p-4 ">Choose a Vehicle</h3>
          <div className="flex w-full p-3 py-6 border-2 border-gray-100 active:border-black mb-2 bg-gray-100   rounded-xl items-center justify-between">
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
            <h2 className="text-lg font-semibold">₹195.50</h2>
          </div>
          <div className="flex w-full p-3 py-6 border-2 mb-2 bg-gray-100 border-gray-100 active:border-black  rounded-xl items-center justify-between">
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
            <h2 className="text-lg font-semibold">₹118.50</h2>
          </div>
          <div className="flex w-full p-3 py-6 border-2 mb-2 bg-gray-100 border-gray-100 active:border-black  rounded-xl items-center justify-between">
            <img className=" h-12" src="/images/bike.png" alt="car" />
            <div className="  w-1/2">
              <h4 className="font-medium text-base">
                Moto{" "}
                <span>
                  {" "}
                  <i className="ri-user-3-fill "></i>
                </span>
                1
              </h4>
              <h5 className="font-medium text-base">2 Mins away</h5>
              <p className="font-normal text-xs">
                Affordable, motorcycle rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹65</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
