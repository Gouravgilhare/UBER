import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const { setCaptain } = React.useContext(CaptainDataContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    const CaptainData = {
      fullname: {
        firstname,
        lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        vehicleType: vehicleType,
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        CaptainData
      );

      if (response.status === 201) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
    setVehicleColor("");
  };
  // Add this import at the top of your file:
  // import { Link } from "react-router-dom";

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 rounded-md"
          src="/images/uberdriverlogo.png"
          alt="uber logo"
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-base font-medium mb-2">What's your Name</h3>
          <div className="flex gap-2 mb-5">
            <input
              required
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-base"
              type="text"
              placeholder="First Name"
            />
            <input
              required
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee]  w-1/2 rounded-lg px-4 py-2  text-base placeholder:text-base"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-base placeholder:text-base"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="password"
          />
          <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-2 mb-5 ">
            <input
              required
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
              className="bg-[#eeeeee]  w-1/2 rounded-lg px-4 py-2  text-base placeholder:text-base"
              type="text"
              placeholder="Vehical Color"
            />
            <input
              required
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
              className="bg-[#eeeeee]  w-1/2 rounded-lg px-4 py-2  text-base placeholder:text-base"
              type="text"
              placeholder="Vehical Plate"
            />
          </div>
          <div className="flex gap-2 mb-5 ">
            <input
              required
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
              className="bg-[#eeeeee]  w-1/2 rounded-lg px-4 py-2  text-base placeholder:text-base"
              type="text"
              placeholder="Vehical Capacity"
            />

            <select
              name="VehicleType"
              className="bg-[#eeeeee]  w-1/2 rounded-lg px-4 py-2  text-base placeholder:text-base"
              required
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          <button
            className="bg-[#111] text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-base placeholder:text-base"
            type="submit"
          >
            Create Captain Account
          </button>
        </form>
        <p className="text-center">
          Already have an Account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};
export default CaptainSignup;
