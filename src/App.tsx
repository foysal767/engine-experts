// import { RouterProvider } from 'react-router-dom';
// import './App.css';
// import router from './Router/Router';

// function App() {
//   return (
//     <div>
//       <RouterProvider router={router}></RouterProvider>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import  { Toaster } from "react-hot-toast";
import './App.css';
import router from './Router/Router';

function App() {
  return (
    <div className="App">
      {/* <button className='absolute bottom-5 right-5 rounded-full '>Top</button> */}
      <RouterProvider router={router}/>
      <Toaster position="top-left" reverseOrder={true} />
    </div>
  );
}

export default App;
