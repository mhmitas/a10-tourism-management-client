import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router';
import TouristSpotsProvider from './provider/TouristSpotsProveder';
import AuthProvider from './provider/AuthProvider';
// import { TouristSpotsContext } from './provider/TouristSpotsProveder';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TouristSpotsProvider>
        <RouterProvider router={router}></RouterProvider>
      </TouristSpotsProvider>
    </AuthProvider>
  </React.StrictMode>
)
