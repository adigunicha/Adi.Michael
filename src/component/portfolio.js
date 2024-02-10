import { FaRegFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Alinastudio from './img/Alinastudio.png'
import Agency from './img/levelup_agency.png'
import webstore from './img/webstore.png'
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "./transition";
import { useState, useContext } from "react";
import { Darkmode } from "../App";
const Portfolio = () => {
   const {darkmode} = useContext(Darkmode)
    const [hover,sethover] = useState(false)
    const [hover2,sethover2] = useState(false)
    const [hover3,sethover3] = useState(false)
    const [hoverbtn,sethoverbtn] = useState(false)
    return (
        <motion.section initial={{opacity:0,y:'50%'}} animate={{opacity:1,y:0}} transition={transition1} className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} font-secondary  pt-[100px] pb-3 px-[10px] md:pt-[160px] lg:pl-[100px]`}>
            <div className={ ` flex border-b-2 pr-5 border-gray-200 pb-5 md:pb-10 md:gap-5 gap-3 items-center`}>
                   <span> <FaRegFolderOpen size={30} className=""/> </span>
                    <span className="md:text-5xl text-3xl font-primary font-medium ">Portfolio</span>
                </div>
                <div className="grid items-center  pt-16 md:grid-cols-2 xl:grid-cols-3 lg:gap-5">
                   <div className="flex hover:cursor-pointer items-center justify-center gap-3 flex-col">
                   <div onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}}  className="lg:w-[400px] md:w-[350px] p-3 relative  md:h-[250px] w-[90vw]  md:mx-0 h-[250px] bg-black" >
                    <img  className="h-full w-full" src={Agency} alt="levelupagency"/>
                 <div className="flex justify-center ">
                    <div className={` ${hover ? "flex" : "hidden"} absolute z-20 gap-5  justify-center h-full backdrop-blur-sm w-full items-center bottom-0`}>
                     <Link target="_blank" to="https://level-up-agency.vercel.app/" className="bg-black p-3 rounded-full " ><FaLink color="white" size={25} /></Link> 
                     <Link target="_blank" to="https://github.com/adigunicha/LevelUPAgency" className="bg-black p-3 rounded-full "> <FaGithub color="white" size={25}/> </Link> 
                    </div></div>  
                   </div>
                   <span className="text-2xl  font-medium">LevelUp Agency</span>
                   <span className=" text-sm  text-gray-400 ">REACT.JS , FRAMERMOTION , TAILWIND </span>
                   </div> 
                   
                   <div className="flex hover:cursor-pointer items-center justify-center gap-3 flex-col">
                   <div onMouseEnter={()=>{sethover2(true)}} onMouseLeave={()=>{sethover2(false)}} className="lg:w-[400px] md:w-[350px] relative p-3 md:h-[250px] w-[90vw] h-[250px] bg-black" >
                   <img className="h-full w-full" src={Alinastudio} alt="levelupagency"/>
                   <div className="flex justify-center ">
                    <div className={` ${hover2 ? "flex" : "hidden"} absolute z-20 gap-5  justify-center h-full backdrop-blur-sm w-full items-center bottom-0`}>
                     <Link target="_blank" to='https://alina-studio.vercel.app/' className="bg-black p-3 rounded-full " ><FaLink color="white" size={25} /></Link> 
                     <Link target="_blank" to="https://github.com/adigunicha/AlinaStudio" className="bg-black p-3 rounded-full "> <FaGithub color="white" size={25}/> </Link> 
                    </div></div>  
                   </div>
                   <span className="text-2xl font-medium">AlinaStudio</span>
                   <span className=" text-sm   text-gray-400 ">REACT.JS , FRAMERMOTION , TAILWIND </span>
                   </div> 

                  <div className="flex hover:cursor-pointer justify-center items-center gap-3 flex-col">
                   <div onMouseEnter={()=>{sethover3(true)}} onMouseLeave={()=>{sethover3(false)}} className="lg:w-[400px] md:w-[350px] relative p-3 md:h-[250px] w-[90vw] h-[250px] bg-black" >
                   <img className="h-full w-full" src={webstore} alt="levelupagency"/>
                   <div className="flex justify-center ">
                    <div className={` ${hover3 ? "flex" : "hidden"} absolute z-20 gap-5  justify-center h-full backdrop-blur-sm w-full items-center bottom-0`}>
                     <Link target="_blank" to="https://m-ike-webstore.vercel.app/" className="bg-black p-3 rounded-full " ><FaLink color="white" size={25} /></Link> 
                     <Link target="_blank" to="https://github.com/adigunicha/MIke_webstore" className="bg-black p-3 rounded-full "> <FaGithub color="white" size={25}/> </Link> 
                    </div></div>  
                   </div>
                   <span className="text-2xl font-medium">Webstore</span>
                   <span className="  text-sm text-gray-400 ">REACT.JS , TAILWIND , REDUXTOOLKIT </span>
                   </div> 
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center pt-20  justify-between">
                    <div className=" flex flex-col">
                       <span className=" font-semibold text-2xl">Let's talk</span>
                       <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 ${darkmode ? "to-white" : "to-black"}  text-3xl md:text-6xl`}>About your next project</span>
                    </div>
                    <div className=" mt-5 flex lg:mt-0 md:pr-24">
                    <Link to='/contact' onMouseEnter={()=>{sethoverbtn(true)}} onMouseLeave={()=>{sethoverbtn(false)}} className={`font-bold overflow-x-hidden border-2 ${darkmode ? "border-white" : "border-black"}   relative  flex items-center py-1 px-5 md:py-2 md:px-8 md:text-lg`}>
                          <span className={`${hoverbtn ? "text-white z-20" : "text-black "} ${darkmode ? "hidden" : null } `}>Get In Touch</span>
                          <span className={`${hoverbtn ? "text-black z-20" : "text-white "} ${darkmode ? null : "hidden" } `}>Get In Touch</span>
                          <span className={`${hoverbtn ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? "hidden" : null}  bg-black right-0 w-full h-full absolute`}></span>
                          <span className={`${hoverbtn ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? null : "hidden"}   bg-white right-0 w-full h-full absolute`}></span>
                          </Link> 
                    </div>
                </div>
        </motion.section>
     );
}
 
export default Portfolio;