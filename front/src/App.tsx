import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import { MantineProvider } from '@mantine/core';
import MyTheme from './utils/myTheme';
import './assets/styles/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <MantineProvider theme={MyTheme} withGlobalStyles withCSSVariables withNormalizeCSS>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </MantineProvider>
  );
}

export default App;
