import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ConfigureSentry } from "../utils/sentry";

const router = createBrowserRouter(AppRoutes);

ConfigureSentry();

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
