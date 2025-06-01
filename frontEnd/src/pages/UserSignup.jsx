import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });
    console.log(userData);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
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

          <button
            className="bg-[#111] text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-base placeholder:text-base"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <p className="text-center">
          Already have an Account?{" "}
          <Link to="/login" className="text-blue-600">
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
export default UserSignup;
