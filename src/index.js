import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './tailwindcss.css';    //tailwindcss
import './index.css';

import Bocchi from './components/three/Bocchi';
import Pochita from './components/three/Pochita';

const router = createBrowserRouter([
  {
    path: process.env.PUBLIC_URL + '/' ,
    element: <Pochita />,
    // errorElement: 
    // loader: rootLoader, // pantalla de carga
    
    children: [       
      {
        path: "bocchi",
        element: <Bocchi />    
      },
    ]
  },
]);


// render by element app 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);

console.log(process.env.PUBLIC_URL);
