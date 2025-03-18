import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Res_menu from "./components/Res_menu";
import Error from "./components/Error";

// Layout component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/* This will render child routes */}
        </div>
    );
};

// Define routes using createBrowserRouter
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
       // Handles 404 or other errors
        children: [
            { path: "/", element: <Body /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path:"restaurant/:resId", element: <Res_menu/>},
        ],
        errorElement: <Error />, 
    },
]);

// Render the app using RouterProvider
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
