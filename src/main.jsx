import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import ChatPage from './Pages/ChatPage.jsx'
import Dogtcha from './Pages/Dogtcha.jsx'
import NotADog from './Pages/NotADog.jsx'
import FeedPage from './Pages/FeedPage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'

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
      {/*Chat Page */}
      <Route
        path="/chat"
        element={< ChatPage />}
      />
      {/*Not a dog Page */}
      <Route
        path="/notADog"
        element={< NotADog />}
      />
      <Route
        path="/feed"
        element={< FeedPage />}
      />
      <Route
        path="/profile"
        element={< ProfilePage />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
