import "./App.css";
import "./index.css";
import Home from "./Home.jsx";
import Bg from "./assets/home .jpg";
import ListApp from "./ListTab/ListApp.jsx"; 
import Layout from "./Layout/Layout.jsx";
import SinglePage from "./Single/singlepage.jsx";
import Profile from "./profile/ProfilePage.jsx";
import Auth from "./Auth/Auth.jsx";


import {
    createBrowserRouter,
    RouterProvider,
  
  } from "react-router-dom";

 function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children:[
           { path:"/",
            element:<Home/>},
            {
              path:"/list",
              element:<ListApp/>
            },
            {
              path:"/:id",
              element: <SinglePage/>
            },
            {
              path:"Profile",
              element: <Profile/>
            },
            {
              path:"/auth",
              element: <Auth/>
            }
          ]
        },
      
      ]);


    
    return(
        <>
      <RouterProvider router={router} />


        </> 
    );
 }
 console.log("Router setup loaded successfully");

 export default App ;