import { RxLaptop } from "react-icons/rx";
import { GiSkills } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { transition1 } from "./transition";
import { useContext } from "react";
import { Darkmode } from "../App";
import { TbBuildingCommunity } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { TfiLayoutMediaRight } from "react-icons/tfi";
import { LiaToolsSolid } from "react-icons/lia";
import { PiTestTubeDuotone } from "react-icons/pi";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";

const About = () => {
    const {darkmode} = useContext(Darkmode)
    return ( 
        <motion.section  initial={{opacity:0}} transition={transition1}   animate={{opacity:1}} className={` ${darkmode ? "bg-black text-white" : "bg-white text-black"} font-secondary pt-[100px]  px-[10px] md:pt-[160px] lg:pl-[100px]`}>
                <motion.div initial={{opacity:0,y:'-50%'}} animate={{opacity:1,y:0}} transition={transition1} >
                <div className="flex border-b-2 mr-5 border-gray-200 pb-5 md:pb-10 md:gap-5 gap-3 items-center">
                   <span> <RxLaptop size={30} className=""/> </span>
                    <span className="md:text-5xl text-3xl font-primary font-medium ">About Me</span>
                </div>
                <div className="md:p-5 p-2 ">
                     <span className="md:text-lg">Hello! i'm Michael, from Lagos Nigeria. I'm a young passionate, dedicated and eager to learn developer with a strong intrest in creating and engaging an intuitive user experience and keen interest in the possibilities of Web3 and blockchain technologies.I have developed a deep understanding of web (web2 & web3) technologies and a knack for translating design concepts into beautiful and function websites. With a focus on providing effective solutions to individuals and small businesses in a timely manner. I am confident in my ability to thrive as a solution-driven developer capable of delivering high quality results. My goal is to leverage my skills and knowledge to contribute to the exciting future of Web3 applications and experiences.
                    </span>
                </div>
                </motion.div>
                
                {/* skill */}
                <motion.div initial={{opacity:0,y:'50%'}} animate={{opacity:1,y:0}}  transition={transition1}  className="pb-5">
                <div className="flex justify-center md:justify-normal items-center mt-5 md:mt-8">
                    <span className="md:text-3xl text-2xl md:pl-5 pl-2 flex gap-5  items-center">Web 2.0 Skills</span>
                </div>
                <div className="  md:pl-5 pl-2 md:pt-10 pt-5 grid gap-5 lg:grid-cols-3">
                    <div>
                        <span className="md:text-2xl text-xl font-medium">Programming Languages</span>
                        <div className="md:grid  flex flex-wrap md:grid-cols-2 pt-5 gap-5 md:gap-8">
                       <div className="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#E14E1D" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                       <span className="font-medium text-lg">Html</span>
                       </div> 

                       <div className="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#0277BD" rx="60"/><path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>
                       <span className="font-medium text-lg">Css</span>
                       </div> 

                       <div className="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#4E7896" d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"/><path fill="#F58219" d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.461 17.028-35.731 54.766z"/></g></svg>
                       <span className="font-medium text-lg">Java</span>
                       </div> 

                       <div className="flex gap-3 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/> </svg>
                       <span className="font-medium text-lg">Javascript</span>
                       </div> 
                        </div>
                    </div>
                    <div className="md:pt-0 pt-5 ">
                        <span className="md:text-2xl text-xl  font-medium">Libaries & Framework</span>
                        <div className="md:grid flex flex-wrap md:grid-cols-2 pt-5 gap-5 md:gap-8">
                        <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"/></svg>
                       <span className="font-medium text-lg">Tailwind</span>
                       </div> 
                       <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887m110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565m-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"/></svg>
                       <span className="font-medium text-lg">React</span>
                       </div> 
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" fill={darkmode ? "white" : "black"} height="1.5em" viewBox="0 0 128 128"><path d="M22.684 0h84.253v42.667H64.81zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333z"/></svg>
                       <span className="font-medium text-lg">FramerMotion</span>
                       </div> 
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><circle cx="64" cy="64" r="64"/><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209"/><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"/><defs><linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>
                       <span className="font-medium text-lg">Next</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.74em" height="1.5em" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0z"/></svg>
                       <span className="font-medium text-lg">Vue</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="2.29em" height="1.5em" viewBox="0 0 256 168"><path fill="#00DC82" d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"/></svg>
                       <span className="font-medium text-lg">Nuxt</span>
                       </div>
                       <div className="flex gap-3 items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25a59.61 59.61 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"/></svg>
                       <span className="font-medium text-lg">Redux</span>
                       </div> 
                       <div className="flex gap-3 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1.5em" viewBox="0 0 256 331"><defs><linearGradient id="logosPinia0" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%"><stop offset="0%" stop-color="#52CE63"/><stop offset="100%" stop-color="#51A256"/></linearGradient><linearGradient id="logosPinia1" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%"><stop offset="0%" stop-color="#52CE63"/><stop offset="100%" stop-color="#51A256"/></linearGradient><linearGradient id="logosPinia2" x1="50%" x2="50%" y1="0%" y2="58.811%"><stop offset="0%" stop-color="#8AE99C"/><stop offset="100%" stop-color="#52CE63"/></linearGradient><linearGradient id="logosPinia3" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%"><stop offset="0%" stop-color="#FFE56C"/><stop offset="100%" stop-color="#FFC63A"/></linearGradient></defs><path fill="url(#logosPinia0)" d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799c-10.328 1.015-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125" transform="rotate(-38 72.877 106.136)"/><path fill="url(#logosPinia1)" d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415c-10.328-1.015-35.989 32.542-32.334 69.717c3.654 37.175 15.201 61.92 45.567 64.905" transform="rotate(52 178.34 119.085)"/><path fill="url(#logosPinia2)" d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013c0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013" transform="rotate(7 128.858 77.673)"/><path fill="url(#logosPinia3)" d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482c0-74.955-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462c0 74.954 46.105 91.482 103.002 91.482"/><ellipse cx="165.427" cy="216.677" fill="#EAADCC" rx="14.717" ry="6.845"/><ellipse cx="57.273" cy="212.57" fill="#EAADCC" rx="14.717" ry="6.845" transform="rotate(7 57.273 212.57)"/><path d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.818 178.63a14.672 14.672 0 0 1 10.551 3.945a14.67 14.67 0 0 1 4.672 10.25a14.671 14.671 0 0 1-3.945 10.55a14.672 14.672 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.551-3.945a14.672 14.672 0 0 1-4.67-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.249-4.672"/><path fill="#FFF" d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336a4.792 4.792 0 0 0 9.579-.336"/><path d="M154.99 182.366a14.671 14.671 0 0 1 10.552 3.944a14.67 14.67 0 0 1 4.67 10.25a14.672 14.672 0 0 1-3.944 10.551a14.67 14.67 0 0 1-10.25 4.671a14.671 14.671 0 0 1-10.55-3.945a14.671 14.671 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.671 14.671 0 0 1 10.25-4.671"/><path fill="#FFF" d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165c.343 9.824-7.342 18.065-17.166 18.408c-9.824.343-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224c6.423-.224 11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165c.343 9.824-7.342 18.065-17.165 18.408c-9.824.343-18.065-7.342-18.408-17.165c-.343-9.824 7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223c-6.423.224-11.448 5.613-11.223 12.036c.224 6.423 5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037"/><path fill="#FFF" d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335"/><path fill="#ECB732" d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z"/><path fill="#FFC73B" d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0"/></svg>
                       <span className="font-medium text-lg">Pinia</span>
                       </div> 
                        </div>
                        
                    </div>
                    <div className="md:pt-0 pt-5 ">
                        <span className="md:text-2xl text-xl   font-medium">Tools & Platform</span>
                        <div  className="md:grid flex flex-wrap md:grid-cols-2 pt-5 gap-5 md:gap-8">
                        <div className="flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.677 9.677 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 0 1 3.167-2.11V47.333a9.581 9.581 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"/></svg>
                       <span className="font-medium text-lg">Git</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><path fill="#007acc" d="m11.72 18.685l-6.883 5.184L2 22.922L9 16L2 9.077l2.837-.947l6.883 5.184l11.433-11.3L30 4.922v22.155l-6.847 2.909ZM15.287 16l7.865 5.923V10.076Z"/></svg>
                        <span className="font-medium text-lg">Vs code</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"  fill={darkmode ? "white" : "black"}  viewBox="0 0 128 128"><path d="M64.002 8.576L128 119.424H0Zm0 0"/></svg>
                       <span className="font-medium text-lg">Vercel</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1.5em" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"/></svg>
                        <span className="font-medium text-lg">Figma</span>
                       </div>
                        </div>
                    </div>
                    
                    <div className="md:pt-0 pt-5 ">
                    <span className="md:text-3xl text-2xl md:pl-5 pl-2 flex gap-5  items-center">Web 3.0 Skills</span>
                        <div  className="md:grid flex flex-wrap md:grid-cols-2 pt-5 gap-5 md:gap-8">
                        <div className="flex gap-3 items-center">
                        <TbBuildingCommunity/>
                       <span className="font-medium text-lg">Community Moderator</span>
                       </div>
                       <div className="flex gap-3 items-center">
                        <GrUserManager  className=""/>
                        <span className="font-medium text-lg">Collab Manager</span>
                       </div>
                       <div className="flex gap-3 items-center">
                        <TfiLayoutMediaRight/>
                       <span className="font-medium text-lg">Social Media Manager</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <LiaToolsSolid/>
                        <span className="font-medium text-lg">Alpha Hunter</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <PiTestTubeDuotone/>
                        <span className="font-medium text-lg">Beta Tester</span>
                       </div>
                       <div className="flex gap-3 items-center">
                       <PiPencilSimpleLineDuotone/>
                        <span className="font-medium text-lg">Technical Writing</span>
                       </div>
                       
                       
                        </div>
                    </div>
                </div>
                </motion.div>
        </motion.section>
     );
}
 
export default About;
