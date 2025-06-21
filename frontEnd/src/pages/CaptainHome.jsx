import React from "react";
import { Link } from "react-router-dom";
const CaptainHome = () => {
  return (
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

      <div className="h-3/5 ">
        <img
          src="../images/ubermap.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <img
              src="../images/randomPerson.jpg"
              className="h-10 w-10 rounded-full object-cover"
              alt=""
            />
            <h4 className="font-medium text-lg  ml-1">Gourav</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹800.52</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex justify-center gap-4  mt-6 p-3 bg-gray-100 rounded-xl">
          <div className="text-center">
            <i className=" font-thin text-3xl mb-2 ri-timer-2-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" font-thin text-3xl mb-2 ri-speed-up-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <i className=" font-thin text-3xl mb-2 ri-booklet-line"></i>
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
