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
      <div className="h-screen absolute">
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
      </div>
    </>
  );
};

export default Home;
