import NavBar from "../NavBar";
import {Outlet } from "react-router-dom";

const Layout =() =>{
    return (<>
    <div> 
        <div> <NavBar/></div>
       <div><Outlet/></div>
    </div>

    </>);
}

export default Layout;