import React from "react";
import { Link } from "react-router-dom";
const ConfirmRidePopUp = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

   
  return (
    <div className=" h-screen pb-6 ">
      <div>
        {" "}
        <h5
          className="p-3 text-center w-[93%] absolute text-3xl h-10 flex justify-center items-center text-gray-300  top-0 "
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
          }}
        >
          <i className="ri-arrow-down-wide-line  "></i>
        </h5>
        <h3 className="text-2xl font-semibold p-4 ">
          Confrim this ride to Start!!
        </h3>
        <div className="flex items-center  justify-between mt-3 bg-yellow-300  rounded-lg p-3">
          <div className="flex items-center  gap-3 ">
            <img
              className="h-12 w-12 rounded-full object-cover "
              src="../images/randomPerson2.png"
              alt=""
            />
            <h2 className="text-lg font-medium">Harsh Patel</h2>
          </div>
          <h5 className="font-semibold text-lg ">2.2 KM</h5>
        </div>
        <div className="flex gap-2 justify-between items-center flex-col ">
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

          <div className="mt-1 w-full ">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input
                type="text"
                className="bg-[#eee] px-3 border-1 py-4 text-lg font-mono rounded-lg w-full mt-3"
                placeholder="Enter OTP"
              />

              <div className="mt-5 flex justify-center w-full bg-green-600 font-semibold p-2 rounded-lg  text-white">
                <Link
                  to="/captain-riding"
                  onClick={() => {
                    props.setRidePopupPanel(false);
                    props.setConfirmRidePopupPanel(false);
                  }}
                >
                  Confirm
                </Link>
              </div>
              <div className="mt-1  mb-5 flex justify-center w-full bg-red-500 font-semibold p-2 rounded-lg  text-white">
                <button
                  onClick={() => {
                    props.setConfirmRidePopupPanel(false);
                    props.setRidePopupPanel(false);
                  }}
                  className=""
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
