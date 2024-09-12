import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";

const router = () => {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default router;
