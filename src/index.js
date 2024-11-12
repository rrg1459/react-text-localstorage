import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Sender from './pages/sender/Sender.jsx';
import Receiver from './pages/receiver/Receiver.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sender />,
  },
  {
    path: "/sender",
    element: <Sender />,
  },
  {
    path: "/receiver",
    element: <Receiver />,
  },
  {
    path: "*",
    element: <Sender />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
