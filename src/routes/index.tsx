import { Route, Routes } from "react-router-dom";

// Import your components here

import { Home } from "@src/pages/Home";
import React from "react";
// import MainLayout from "@src/layouts/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
      </Route> */}
    </Routes>
  );
};

export default AppRouter;
