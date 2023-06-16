import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Orderform from "./pages/Orderform";
import Finish from "./pages/Finish";

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Order" element={<Orderform />} />
      <Route path="*" element={<Finish/>} />
    </Routes>
      
    </>
  );
};
export default App;
