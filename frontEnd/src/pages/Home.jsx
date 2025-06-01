import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1641124259501-b393df35d654?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative pt-8">
      <img
        className="w-40 mt-8 ml-4 absolute top-0 left-0"
        // src="/images/uberLogoWhite.png"
        src="/images/uberLogoWhite.png"
        alt="uberLogo"
      />
      <div className="flex-1 flex flex-col justify-end">
        <div className="bg-white py-2 pb-7 px-4 mt-10">
          <h2 className="text-3xl w-full font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center items-center w-full bg-black text-3xl text-white py-3 rounded mt-4"
          >
            Continue
          </Link>
        </div>
      </div>
      <div className="w-full py-1 bg-black text-white text-center">
        © {new Date().getFullYear()} Uber. All rights reserved.
      </div>
    </div>
  );
};

export default Home;
