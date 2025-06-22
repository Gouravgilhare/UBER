import React from "react";

const CaptainDetails = () => {
  return (
    <div>
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

export default CaptainDetails;
