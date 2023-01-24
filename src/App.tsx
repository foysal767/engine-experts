import React from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}

export default App;
