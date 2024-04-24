import { motion } from "framer-motion";
import { transition1 } from "./transition";
import { useContext } from "react";
import { Darkmode } from "../App";
const Blog = () => {
    const {darkmode} = useContext(Darkmode)
    return ( 
        <motion.section  initial={{opacity:0}} transition={transition1}   animate={{opacity:1}} className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} font-secondary pt-[100px]  px-[10px] md:pt-[160px] lg:pl-[100px]`}>
        <div>This is the blog page </div>
        </motion.section>
     );
}
 
export default Blog;