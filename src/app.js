import React from "react";
import { lazy,Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import Error from "./components/Error";
import { useState,useEffect} from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// chunking , code spliting , dynamic loading , on demand loading,lazy loading,dynaimc impotr


const Grocery = lazy(()=> import("./components/Grocery"));




// Layout component
const AppLayout = () => {
    const [userName,setuserName] =useState();

useEffect(()=>{
    const data = {
     name : "ankesh",
    };

    setuserName(data.name);
},[])
    return (
        <Provider store={appStore }>
             <UserContext.Provider value={{LoggedInUser:userName,setuserName }}>
                <div className="app">
                <Header />
                <Outlet /> {/* This will render child routes */}
                </div>
            </UserContext.Provider>
        </Provider>
       
       
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
            { path:"restaurants/:resId", element: <ResMenu/>},
            {
               path:"/cart", element:<Cart/> },
        ],
        errorElement: <Error />, 
    },
]);

// Render the app using RouterProvider
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
