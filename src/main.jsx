// NPM IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// STYLING
import "./index.css";

// GLOBAL PAGES
import LoginPage from "./pages/GlobalPages/LoginPage.jsx";
import RegisterPage from "./pages/GlobalPages/RegisterPage.jsx";
import HomePage from "./pages/GlobalPages/HomePage.jsx";
import AboutPage from "./pages/GlobalPages/AboutPage.jsx";
import ErrorPage from "./pages/GlobalPages/ErrorPage.jsx";

// EVENT PAGES
import AllEventsPage from "./pages/EventsPages/AllEventsPage.jsx";
import EventPage from "./pages/EventsPages/EventPage.jsx";
import CreateEventPage from "./pages/EventsPages/CreateEventPage.jsx";
import UpdateEventPage from "./pages/EventsPages/UpdateEventPage.jsx";
import ScheduleEventMentorPage from "./pages/EventsPages/ScheduleEventMentorPage.jsx";

// USER PAGES
import ProfilePage from "./pages/UserPages/ProfilePage";
import UpdateProfilePage from "./pages/UserPages/UpdateProfilePage";
import ManageUsersPage from "./pages/UserPages/ManageUsersPage";
import UpdateUserProcessPage from "./pages/UserPages/UpdateUserProcessPage.jsx";
import UpdateMentorAvailabilityPage from "./pages/EventsPages/UpdateMentorAvailabilityPage.jsx";
// COMPONENTS
import { AuthProvider } from "./components/AuthProvider.jsx";
import NavBar from "./components/GlobalElements/NavBar.jsx";
import { NavbarProvider } from "./components/NavBarContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/events", element: <AllEventsPage /> },
      { path: "/event/:id", element: <EventPage /> },
      { path: "/create-event", element: <CreateEventPage /> },
      { path: "/event/:id/update", element: <UpdateEventPage /> },
      { path: "/event/:id/schedule", element: <ScheduleEventMentorPage /> },
      { path: "/mentor/:id/update", element: <UpdateMentorAvailabilityPage /> },
      { path: "/users/:id", element: <ProfilePage /> },
      { path: "/users/:id/update", element: <UpdateProfilePage /> },
      { path: "/users/manage", element: <ManageUsersPage /> },
      { path: "/user-process/:id", element: <UpdateUserProcessPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NavbarProvider>
        <RouterProvider router={router} />
      </NavbarProvider>
    </AuthProvider>
  </React.StrictMode>
);
