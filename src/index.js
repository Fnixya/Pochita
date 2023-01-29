import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// import './tailwindcss.css';    //tailwindcss
import './index.css';

import Bocchi from './components/three/Bocchi';
import Pochita from './components/three/Pochita';

const router = createHashRouter([
  {
    path: "/Pochita",
    element: <Pochita />,
    // errorElement: 
    // loader: rootLoader, // pantalla de carga
  }, 
  {
    path: "/bocchi",
    element: <Bocchi />    
  },
]);


// render by element app 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
