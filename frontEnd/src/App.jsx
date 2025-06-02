import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserDataContext } from "./context/UserContext.jsx";
import Start from "./pages/start.jsx";
import Home from "./pages/Home.jsx";
import UserProtectWrapper from "./pages/UserProtectedWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper.jsx";
const App = () => {
  // const ans = useContext(UserDataContext);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/signup" element={<UserSignup />}></Route>
          <Route path="/captain-login" element={<CaptainLogin />}></Route>
          <Route path="/captain-signup" element={<CaptainSignup />}></Route>
          <Route
            path="/home"
            element={
              <UserProtectWrapper>
                <Home />
              </UserProtectWrapper>
            }
          ></Route>

          <Route
            path="/user/logout"
            element={
              <UserProtectWrapper>
                <UserLogout />
              </UserProtectWrapper>
            }
          ></Route>

          <Route
            path="/captain-home"
            element={
              <CaptainProtectWrapper>
                <CaptainHome />
              </CaptainProtectWrapper>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
