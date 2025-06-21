import React from "react";
import { Link } from "react-router-dom";
const Riding = () => {
  return (
    <div className="h-screen ">
      <Link
        to="/home"
        className="fixed h-10 w-10 bg-white  top-2 right-2 block flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium  ri-home-line"></i>
      </Link>

      <div className="h-1/2">
        <img
          src="../images/ubermap.png"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-1/2 p-2">
        <div className="flex items-center justify-between ">
          <img className=" h-12" src="/images/car.png" alt="car" />
          <div className="text-right">
            <h2 className="text-lg font-medium ">Gourav</h2>
            <h4 className="font-semibold text-xl -mt-1 -mb-1">CG 04 HD 4695</h4>
            <p className="text-sm text-gray-500">Tata Indica Vista</p>
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center flex-col p-2 ">
          <div className="w-full mt-2">
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
        <button className="mt-5 flex justify-center w-full bg-green-600 font-semibold p-2 rounded-lg  text-white">
          Make a Payment
        </button>
      </div>
    </div>
  );
};
export default Riding;
