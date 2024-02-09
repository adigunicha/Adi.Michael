import { MdWavingHand } from "react-icons/md";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import img from './img/BL 40.jpg'
import { transition1 } from "./transition";
import { useState } from "react";
import { useContext } from "react";
import { Darkmode } from "../App";

const Home = () => {
  const [hover,sethover] = useState(false)
  const {darkmode} = useContext(Darkmode)
    return ( 
        <motion.section  initial={{opacity:0}} transition={transition1}  animate={{opacity:1}}
      className={`${darkmode ? "bg-black text-white" : "bg-white text-black "}    font-secondary pt-[100px] pb-5  px-[10px] md:pt-[200px] lg:pl-[100px]`}>
            <div className="flex lg:grid lg:grid-cols-2 lg:gap-2  flex-col-reverse">
                <motion.div initial={{opacity:0,y:'-50%'}} animate={{opacity:1,y:0}} transition={transition1} className="flex mt-10 lg:mt-0  gap-5 flex-col">
                    <div className="flex gap-3 md:gap-5 items-center"><span className=" text-2xl md:text-3xl">Hello</span><MdWavingHand size={30} /></div>
                    <div><span className=" font-primary font-bold text-4xl md:text-5xl">I'm Adigun Michael</span> </div>
                    <div>
                        <span className="font-semibold z-0 text-xl md:text-3xl">
                        <Typewriter
                          options={{
                           strings: ["I'm a Frontend developer","I develop responsive website","I build beautiful design experience"],
                           autoStart: true,
                            loop: true,
                            deleteSpeed:65,
                            delay:95,
                               }}  />
                        </span>
                      </div>
                      <div>
                        <span className="  md:text-xl">
                        i'm a Frontend developer with a strong passion for building web applications with great user experiences,and making the web accessible to everyone.
                        </span>
                      </div>
                      <div className="flex items-center gap-5">
                        <Link to='/portfolio' onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}} className={`font-bold overflow-x-hidden border-2 relative  flex items-center ${darkmode ? "bg-white border-white " : "bg-black border-black "}  py-1 px-5 md:py-2 md:px-8 md:text-lg`}>

                          {/* whitemode text */}
                          <span className={` ${darkmode ? "hidden" : null} z-20 ${hover ? "text-black z-20" : "text-white"}`}> Portfolio</span>
                          {/*   darkmode text */}
                          <span className={` ${darkmode ? null : "hidden"}  z-20 ${hover ? "text-white z-20" : "text-black"}`}> Portfolio</span>

                           {/* whitemode backcover */}
                          <span className={`${hover ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? "hidden" : null } bg-white right-0 w-full h-full absolute`}></span>
                          
                          {/* blackmode backcover */}
                          <span className={`${hover ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? null : "hidden" } bg-black right-0 w-full h-full absolute`}></span>

                          </Link> 

                          {/* resume button */}
                          <Link to='/portfolio' onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}} className={`font-bold overflow-x-hidden border-2 relative  flex items-center ${darkmode ? "bg-black border-white" : "bg-white border-black "}  py-1 px-5 md:py-2 md:px-8 md:text-lg`}>

                          {/* whitemode text */}
                          <span className={` ${darkmode ? "hidden" : null} z-20 ${hover ? "text-white z-20" : "text-black"}`}> Resume 
                          </span>
                          {/*   darkmode text */}
                          <span className={` ${darkmode ? null : "hidden"}  z-20 ${hover ? "text-black z-20" : "text-white"}`}> Resume</span>

                           {/* whitemode backcover */}
                          <span className={`${hover ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? "hidden" : null } bg-black right-0 w-full h-full absolute`}></span>
                          
                          {/* blackmode backcover */}
                          <span className={`${hover ? "left-0" : "left-[-100%]"} transition-all ease-in-out duration-300 ${darkmode ? null : "hidden" } bg-white right-0 w-full h-full absolute`}></span>

                          </Link>  
                         </div>
                         <div className=" pt-5 flex space-x-5">
                            <Link to="https://github.com/adigunicha?tab=repositories"><FaGithub className="md:h-[30px] md:w-[25px]"/></Link>
                            <Link to="https://twitter.com/mike_milz_"><FaSquareXTwitter className="md:h-[30px] md:w-[25px]"/></Link>
                            <Link to="https://www.instagram.com/adigunmichael_"><FaInstagramSquare className="md:h-[30px] md:w-[25px]"/></Link>
                            <Link to="https://www.linkedin.com/in/adigun-michael-0919a0219/"><FaLinkedin className="md:h-[30px] md:w-[25px]"/></Link>
                         </div>
                </motion.div>
                 <motion.div  initial={{scale:0,}}  animate={{scale:1}} transition={transition1} whileHover={{scale:1.03}} className="  md:mt-[-100px]">
                  <img className=" md:h-[650px] w-full " src={img} alt="heropics"/>
                 </motion.div>
            </div>
        </motion.section >
     );
}
 
export default Home;