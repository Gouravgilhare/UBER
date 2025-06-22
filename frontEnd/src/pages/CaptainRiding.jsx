import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FinishRide from "./FinishRide";
import CaptainDetails from "./CaptainDetails";
const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <div>
      <div className="h-screen ">
        <div className="flex items-center p-6 top-0 justify-between w-screen bg-transparent absolute z-10">
          <img src="../images/uberLogo.png" alt="Uber Logo" className="w-16" />
          <Link
            to="/captain-login"
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          >
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>

        <div className="h-4/5 ">
          <img
            src="../images/ubermap.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="h-1/5 p-3 flex items-center justify-between bg-yellow-400 relative"
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
            <h5 className="p-1 h-10" onClick={() => {}}>
              <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
            </h5>
          </div>
          <div className="flex-1 flex items-center justify-center gap-8">
            <h4 className="text-xl font-semibold">4 KM away</h4>
            <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
              Complete Ride
            </button>
          </div>
          <div
            ref={finishRidePanelRef}
            className="fixed w-full  z-10 px-3 py-10 h-screen translate-y-full bg-white bottom-0"
          >
            <FinishRide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
