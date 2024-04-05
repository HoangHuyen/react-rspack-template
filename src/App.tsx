import "./styles.css";

import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import AppRoutes from "@src/routes";
import { store } from "@src/model/store";

export const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <AppRoutes />
        </ReduxProvider>
      </BrowserRouter>
    </NextUIProvider>
  );
};
