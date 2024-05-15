import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { useContext } from "react";
import { Darkmode } from "../../App";
import BlogData from "./blogdata";
const BlogDetails = () => {
    const {title} = useParams()
    const {darkmode} = useContext(Darkmode)
    let Data = BlogData.find((e)=>e.Title === title)
    
    const renderContentWithHTML = (content) => {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    };
    return ( 
        <motion.section  initial={{opacity:0}} transition={transition1}   animate={{opacity:1}} className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} font-secondary pt-[100px]  px-[10px] md:pt-[160px] lg:pl-[100px] min-h-[100vh]`}>
           <div className="flex flex-col py-5 gap-10 justify-center  lg:px-48">
              <div className="flex justify-center text-3xl font-semibold">{Data.Title}</div>
              <div className="flex justify-center tracking-wider text-[20px] ">{Data.Intro}</div>
              <div className="px-16"><img className="w-full h-[250px] lg:h-[340px]" src={Data.Img} alt="img"/> </div>

              <div className="pt-5 lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content1)}</span>
              <div className="px-20">{Data.Content1img &&<img className="w-full h-[230px] lg:h-[320px]" src={Data.Content1img} alt="img"/>} </div>
              </div>
              
              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content2)}</span>
              <div className="px-20">{Data.Content2img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content2img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content3)}</span>
              <div className="px-20">{Data.Content3img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content3img} alt="img"/>}</div>
              </div>

              <div className=" lg:tracking-wider tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content4)}</span>
              <div className="px-20">{Data.Content4img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content4img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content5)}</span>
              <div className="px-20">{Data.Content5img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content5img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content6)}</span>
              <div className="px-20">{Data.Content6img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content6img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content7)}</span>
              <div className="px-20">{Data.Content7img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content7img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content8)}</span>
              <div className="px-20">{Data.Content8img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content8img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content9)}</span>
              <div className="px-20">{Data.Content9img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content9img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content10)}</span>
              <div className="px-20">{Data.Content10img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content10img} alt="img"/>}</div></div>

              <div className=" lg:tracking-wider flex flex-col tracking-wide text-[17px] lg:text-[20px]">
                <span>{renderContentWithHTML(Data.Content11)}</span>
              <div className="px-20">{Data.Content11img && <img className="w-full h-[230px] lg:h-[320px]" src={Data.Content11img} alt="img"/>}</div></div>

           </div>
        </motion.section>
    );
}
 
export default BlogDetails;