import React from "react";
import { lazy,Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Res_menu from "./components/Res_menu";
import Error from "./components/Error";


// chunking , code spliting , dynamic loading , on demand loading,lazy loading,dynaimc impotr


const Grocery = lazy(()=> import("./components/Grocery"));

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
            { path:"grocery", element:<Suspense fallback = {<h1>loading....</h1>}>
                <Grocery/></Suspense>},
            { path:"restaurants/:resId", element: <Res_menu/>},
        ],
        errorElement: <Error />, 
    },
]);

// Render the app using RouterProvider
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
