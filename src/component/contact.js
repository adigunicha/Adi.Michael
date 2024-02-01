import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "./transition";
import { FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { Darkmode } from "../App";
import { useRef,useState } from "react";
import emailjs from '@emailjs/browser';
const Contact = () => {
   const {darkmode} = useContext(Darkmode)
   const [msg,setMsg] = useState(false)
   const [error,errorMsg] = useState(false)
   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_7fkugw6', 'template_1bpo86r', form.current, 'q8Uwr31sLnUWrBK5W')
     .then((result) => {
         setMsg(true)
         console.log(result.text)
         // Set a timeout to hide the success message after 2 seconds
      setTimeout(() => {
         setMsg(false);
       }, 4000);
     }, (error) => {
         errorMsg(false)
         console.log(error.msg)
     });
 };

    return ( 
      <motion.div   initial={{opacity:0,y:'50%'}} transition={transition1} animate={{opacity:1,y:0}} className={`${darkmode ? "bg-black text-white" : "bg-white text-black"} overflow-x-hidden `} >
        <section className=" relative font-secondary pt-[100px] pb-3 px-[10px] md:pt-[160px] lg:pl-[100px]">
           <div className="flex  border-b-2 mr-5 border-gray-200 pb-5 md:pb-10 md:gap-5 gap-3 items-center">
                   <span> <IoCall size={30} className=""/> </span>
                    <span className="md:text-5xl text-3xl font-primary font-medium ">Contact Me</span>
                </div>
                 <div className="grid pt-14 gap-16 relative md:gap-28 xl:grid-cols-2">
                   <div>
                     <form ref={form} onSubmit={sendEmail} className=" space-y-10">
                        <input className={`md:w-[600px] ${darkmode ? "border-gray-400 bg-black" : "border-black"}  w-[90vw] h-[30px] p-5 border-0 border-b-2 outline-none  `} type="text" placeholder="Name" required name="from_name"/>

                        <input className={`md:w-[600px] w-[90vw] ${darkmode ? "border-gray-400 bg-black" : "border-black"}   h-[30px] p-5 border-0 border-b-2 outline-none `} type="email" placeholder="Emai" required name="from_email"/>

                        <textarea className={`md:w-[600px] ${darkmode ? "border-gray-400 bg-black" : "border-black"}   w-[90vw]  h-[200px] p-5 border-2 outline-none `} placeholder="Message" required name="message" />

                        <div className="flex    md:mt-0">
                    < input type="submit" value="Send" placeholder="Message"  className={`font-bold border-2 ${darkmode ? "border-gray-400 bg-black" : "border-black"}   flex items-center py-2 px-6 md:py-2 md:px-8 md:text-lg hover:cursor-pointer`}/>
                    </div>
                          {/* succcess msg */}
                <div className={`fixed ${msg ? "right-5" : " right-[-80vw]"} ${darkmode ? "bg-black text-white" : "bg-white text-black"} transition-all ease-in-out duration-300 fixed font-semibold   z-50 top-28 md:top-56 py-4 px-10 shadow flex items-center gap-1 rounded-sm`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="green" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-1.02-4.13h-.71L4 8.6l.71-.71l1.92 1.92l4.2-4.21l.71.71z" clip-rule="evenodd"/></svg>
                     <span>Messaage sent </span>
                      </div> 
                     </form>
                   </div>
                   <div>
                   <motion.div  initial={{y:'80%'}} transition={transition1}   animate={{y:0}} className="flex   gap-6 flex-col">
                    <span className="font-primary font-medium text-2xl">LET'S TALK</span>
                    <span className="font-medium text-lg">Adigunmichael818@gmail.com</span>
                    <span className="font-medium text-lg"> (+234) 704 559 0112 </span>
                    <div className=" md:pt-5 flex space-x-5">
                            <Link to='https://github.com/adigunicha?tab=repositories'><FaGithub className="md:h-[25px] md:w-[20px]"/></Link>
                            <Link to="https://twitter.com/mike_milz_"><FaSquareXTwitter className="md:h-[25px] md:w-[20px]"/></Link>
                            <Link to='https://www.instagram.com/adigunmichael_'><FaInstagramSquare className="md:h-[25px] md:w-[20px]"/></Link>
                            <Link to='https://www.linkedin.com/in/adigun-michael-0919a0219/'><FaLinkedin className="md:h-[25px] md:w-[20px]"/></Link>
                         </div>
                    </motion.div>
                   </div>
                </div>
              </section>
          {/* map */}
          <div className="mt-10  pb-5 ">
                <iframe className="w-[99vw]"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.784192600977!2d3.3488719736673653!3d6.548909993444081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8de9023c68e3%3A0x3360c2083c00ea84!2s1%20Nitel%20Rd%2C%20Cappa%2C%20Oshodi%2C%20Lagos%20100001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1706526515841!5m2!1sen!2sng" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
        </motion.div>
     );
}
 
export default Contact;