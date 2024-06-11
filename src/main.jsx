import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import VideoContainer from "./components/VideoContainer";
import ProfileVideo from "./components/ProfileVideo";
import Recommended from "./components/Recommended";
import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import SidebarIcons from "./components/SidebarIcons";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import VideoModal from "./components/modals/VideoModal.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Sidebar />
            <VideoContainer />
          </>
        ),
      },
      {
        path: "/video-player",
        element: (
          <>
            <SidebarIcons />
            <VideoPlayer />
            <Recommended />
          </>
        ),
      },
      {
        path: "/profile-video",
        element: (
          <>
            <Sidebar />
            <ProfileVideo />
          </>
        ),
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
