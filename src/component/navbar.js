import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { Darkmode } from "../App";
const Navbar = () => {
   const {darkmode,setdarkmode} = useContext(Darkmode)
    const [menubar,Setmenubar] = useState(false)
    const handleclick=()=>{
        Setmenubar(!menubar)
    }
    const handledarkmode = ()=>{
      setdarkmode(!darkmode)
      console.log(darkmode)
    }
    return ( 
        <section className="">
        <div className={` ${darkmode ? "bg-black" : "bg-white"} fixed z-50   w-full`}>
           <nav className="flex shadow-sm justify-between items-center md:p-10 p-5 ">
              <div>
                <Link to='/' className=" font-primary font-bold text-2xl md:text-2xl"><span className=" text-blue-400">Adi</span><span className={`${darkmode ? "text-white" : "text-black"}`}>.Michael</span></Link>
              </div>
              <div className="flex items-center gap-5 md:gap-10">
               {/* darkmode icon */}
              <button onClick={handledarkmode}><CgDarkMode className={` ${darkmode ? "hidden" : null} w-[30px] md:h-[30px]`}  /></button> 
              {/* lightmode icon */}
              <button onClick={handledarkmode} className={`${darkmode ? null : "hidden"}`}><MdOutlineLightMode className={`md:w-[30px] md:h-[30px]`} color={darkmode ? "white" : "black"}  /></button>

                <button className={`${menubar ? "hidden" : null}`} onClick={handleclick}><FiMenu className="md:w-[30px] md:h-[30px] " color={darkmode ? "white" : "black"} /></button> 
                <button className={`${menubar ? null : "hidden"}`} onClick={handleclick}><MdOutlineCancel className="md:w-[30px] md:h-[30px]" color={darkmode ? "white" : "black"}  /></button> 
              </div>
           </nav>
           </div>
          {/* this is the opened navbar */}
         
          <div className={`${menubar ? "lg:top-24 top-[70px]" :" -top-[100vh] "} z-30  p-0 h-screen w-full  ${darkmode ? "bg-black " : "bg-white"} transition-all ease-linear duration-500 fixed `}>
               <div  className={` ${darkmode ? "text-white" : "text-black"} font-primary pt-3   flex w-full  justify-center`}>
                  <div className="flex font-medium md:font-normal flex-col md:pt-0 pt-8 space-y-10 lg:space-y-12 ">
                    <Link onClick={()=>{Setmenubar(!menubar)}} to='/' className=" text-4xl hover:text-blue-400 transition-colors ease-in-out duration-300  lg:text-6xl">Home</Link>
                    <Link onClick={()=>{Setmenubar(!menubar)}} to='/about' className=" hover:text-blue-400  transition-colors ease-in-out duration-300  text-4xl  lg:text-6xl">About</Link>
                    <Link onClick={()=>{Setmenubar(!menubar)}} to='/portfolio' className=" hover:text-blue-400 transition-colors ease-in-out duration-300 text-4xl  lg:text-6xl">Portfolio</Link>
                    <Link onClick={()=>{Setmenubar(!menubar)}} to='/contact' className=" hover:text-blue-400 transition-colors ease-in-out duration-300 text-4xl  lg:text-6xl">Contact</Link>
                  </div>
               </div>
               {/* social icons */}
            <div className=" md:pt-28 bottom-28 absolute w-full items-center justify-center hidden xl:flex space-x-3">
                 <Link to="https://github.com/adigunicha?tab=repositories"><FaGithub color={darkmode ? "white" : null} size={20}/></Link>
                 <Link to='https://twitter.com/mike_milz_'><FaSquareXTwitter color={darkmode ? "white" : null}  size={20}/></Link>
                 <Link to='https://www.instagram.com/adigunmichael_'><FaInstagramSquare color={darkmode ? "white" : null}  size={20}/></Link>
                 <Link to='https://www.linkedin.com/in/adigun-michael-0919a0219/'><FaLinkedin color={darkmode ? "white" : null}  size={20}/></Link>
          </div>
           </div>
            
        </section>
     );
}
 
export default Navbar;