import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { Darkmode } from "../../App";
import BlogData from "../All_blog/blogdata";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
const Blog = () => {
    const {darkmode} = useContext(Darkmode)
    return ( 
        <motion.section  initial={{opacity:0}} transition={transition1}   animate={{opacity:1}} className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} font-secondary pt-[100px]  px-[10px] md:pt-[160px] lg:pl-[100px]`}>
        <div className="grid gap-10">
            {BlogData.map((ele)=>(
            <did className="flex items-center" key={ele.id}>
                <div className=" flex flex-col md:basis-2/3 basis-[80%] shadow-sm shadow-slate-100 px-5 pb-8">
                   <div className="flex flex-row items-center"> <Link to='/about' className="pl-1"><span className=" text-lg font-medium">{ele.Author}</span></Link>
                   <RxDotFilled color="gray"/>
                   <span className=" text-sm text-gray-400 ">{ele.Date}</span> 
                   </div>
                   <div className="py-4 text-xl font-bold"><Link to={`/blog/${ele.id}`}>{ele.Title}</Link> </div>
                   <div className=" hidden md:flex"><Link to={`/blog/${ele.id}`}>{ele.Intro.slice(0,130)}...</Link></div>
                   <div className="flex items-center space-x-4 pt-3">
                  <div className="  bg-gray-200 rounded-xl flex items-center py-1 px-4"> <Link to={`/blog/${ele.id}`}className="text-[13px]">{ele.Category}</Link></div>
                    <span className="text-[13px] text-gray-400">{ele.ReadTime} read</span>
                   </div>
                   
                </div>
                <div>
               <span><img className="w-full h-[80px] md:h-[140px] rounded-lg" src={ele.Img} alt="blogimg"/></span> 
                </div>
            </did>
            ))}
        </div>
        </motion.section>
     );
}
 
export default Blog;