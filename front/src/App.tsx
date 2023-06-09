import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePrivateRoute from './components/ProfilePrivateRoute';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Booking from './components/Booking';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/AdminPanel';
import Dishes from './pages/Dishes';
import { MantineProvider } from '@mantine/core';
import MyTheme from './utils/myTheme';
import './assets/styles/App.css';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: number;
};

export type CurrentUserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const CurrentUserContext = createContext<CurrentUserContextType>({
  user: null,
  setUser: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProfilePrivateRoute />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ]
  },
  {
    element: <AdminPrivateRoute />,
    children: [
      {
        path: "/control-panel",
        element: <Admin />,
      },
    ]
  },
  {
    path: "/dishes",
    element: <Dishes />,
  },
]);

function App() {

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <MantineProvider theme={MyTheme} withGlobalStyles withCSSVariables withNormalizeCSS>
      <CurrentUserContext.Provider
        value={{
          user: currentUser,
          setUser: setCurrentUser,
        }}
      >
        <RouterProvider router={router} />
      </CurrentUserContext.Provider>
    </MantineProvider>
  );
}

export default App;
