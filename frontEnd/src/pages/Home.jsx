import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import "remixicon/fonts/remixicon.css";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelCloseRef = useRef(null);
  const confrimRideRef = useRef(null);
  const waitingForDriverRef = useRef(null);
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

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confrimRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confrimRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
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
                className=" bg-[#eee] px-8 w-full text-base   mt-5 py-2  rounded-lg"
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
                className=" bg-[#eee] px-8 w-full  text-base  mt-3 py-2  rounded-lg"
                type="text"
                placeholder="Enter your destination  "
              />
            </form>
          </div>
          <div ref={panelRef} className=" bg-white  h-0 ">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
          </div>
        </div>

        <div
          ref={vehiclePanelRef}
          className="fixed w-full  z-10 px-3 py-10 translate-y-full  bg-white bottom-0"
        >
          <VehiclePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
        <div
          ref={confrimRideRef}
          className="fixed w-full  z-10 px-3 py-6 translate-y-full  bg-white bottom-0"
        >
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehicleFound={setVehicleFound}
          />
        </div>
        <div
          ref={vehicleFoundRef}
          className="fixed w-full  z-10 px-3 py-6 translate-y-full  bg-white bottom-0"
        >
          <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>
        <div
          ref={waitingForDriverRef}
          className="fixed w-full  z-10 px-3 py-6  translate-y-full bg-white bottom-0"
        >
          <WaitingForDriver waitingForDriver={setWaitingForDriver} />
        </div>
      </div>
    </>
  );
};

export default Home;
