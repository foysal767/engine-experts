import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import "./App.css";
import router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}

export default App;
