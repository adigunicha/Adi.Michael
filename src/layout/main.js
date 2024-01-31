import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import { useState } from "react";
import { useContext } from "react";
import { Darkmode } from "../App";
const Mainlayout  = () => {
    const {darkmode} = useContext(Darkmode)
    return ( 
        <div className={`${darkmode ? "bg-black" : "bg-white"}`}>
            <Navbar/>
           <div>
           <Outlet/>
           </div> 
          
        </div>
     );
}
 
export default Mainlayout