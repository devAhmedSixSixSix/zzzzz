import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
// import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ForgetPassword from "./Pages/ForgetPassword";
import VeryfiyResetPasswordCode from "./Pages/VeryfiyResetPasswordCode";
import ResetPassword from "./Pages/ResetPassword";
import ConfirmingChangeingPasswordSuccessflye from "./Pages/ConfirmingChangeingPasswordSuccessflye";
import Payment from "./Pages/Payment";
import { useState } from "react";


function App() {
  const [userLang, setUserLang] = useState("gr")

  return (
    <>
      <NavigationBar setUserLang={setUserLang} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup userLang={userLang}/>} />
        <Route path="/login" element={<Login userLang={userLang}/>} />
        <Route path="/forgetpassword" element={<ForgetPassword userLang={userLang}/>} />
        <Route path="/veryfiyresetpasswordcode" element={<VeryfiyResetPasswordCode userLang={userLang}/>} />
        <Route path="/resetpassword" element={<ResetPassword userLang={userLang}/>} />
        <Route path="/confirmingchangeingpasswordsuccessflye" element={<ConfirmingChangeingPasswordSuccessflye userLang={userLang}/>} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
