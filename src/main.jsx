import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Dogtcha from './components/Dogtcha.jsx'
import NotADog from './components/NotADog.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Login Page */}
      <Route
        index
        element={< Login />}
      />
      {/*Create User Page */}
      <Route
        path="/createUser"
        element={< CreateUser />}
      />
      {/*Dogtcha Page */}
      <Route
        path="/dogtcha"
        element={< Dogtcha />}
      />
      {/*Home Page */}
      <Route
        path="/home/:userId"
        element={< Home />}
      />
      {/*Not a dog Page */}
      <Route
        path="/notADog"
        element={< NotADog />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
