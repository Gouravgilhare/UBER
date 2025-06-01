// import React, { useContext } from "react";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserDataContext } from "./context/UserContext.jsx";


const App = () => {
  // const ans = useContext(UserDataContext);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/captain-login" element={<CaptainLogin />}></Route>
          <Route path="/captain-signup" element={<CaptainSignup />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
