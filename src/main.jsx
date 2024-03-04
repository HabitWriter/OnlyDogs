import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import ChatPage from './ChatPage.jsx'

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
      {/*Home Page */}
      <Route
        path="/home/:userId"
        element={< Home />}
      />
      {/*Chat Page */}
      <Route
        path="/chat/"
        element={< ChatPage />}
        
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
