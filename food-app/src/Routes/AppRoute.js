import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login } from "src/pages";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoute;
