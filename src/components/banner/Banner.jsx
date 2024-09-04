import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import { SiTailwindcss,SiFigma,SiReact } from 'react-icons/si';
import { FaFacebook, FaFigma, FaLinkedin,FaInstagram} from 'react-icons/fa';
import {RiNodejsLine} from "react-icons/ri"
import { file } from '../../assets';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Graphics Designer.', 'Front End Developer.','UI Developer.'],
        loop :true,
        typeSpeed : 20,
        deleteSpeed : 10,
        delaySpeed : 2000,

    });
    return (
    <section id="home" className="w-full py-6 md:py-16 flex lg:flex-row flex-col-reverse items-center border-b-[1px] gap-y-10 gap-x-10 border-b-black">
        <div className='md:w-2/3 flex flex-col gap-y-14'>
            <div className="flex flex-col gap-y-5 font-titleFont ">
                <h4 className="md:text-lg  text-sm font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">Hi I'm 
                    <span className="text-designColor capitalize"> Rahul Kumar</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                    cursorBlinking ="false"
                    cursorStyle="|"
                    cursorColor='#ff014f' />
                </h2>
                <p className="text-justify lg:w-[80%]">I have 2+ years of experience in webflow developement. My mission is to design and develop a Website and Web Application that you and your audience love. My favouite tools for design and propotyping are Figma, ReactJs, NodeJs, ExpressJs, MongoDB.
                </p>
            </div>
            <div className="lg:w-[80%] flex lg:flex-row flex-col gap-y-10 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/profile.php?id=100055551663311" target="_blank">  
                            <span className="bannerIcon ">
                            <FaFacebook/>
                            </span>
                        </a>
                        <a href="https://www.instagram.com/rahul_this_side9.0/" target="_blank">
                            <span className="bannerIcon  first-letter:">
                                <FaInstagram/>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/rahuludp/" target="_blank">
                            <span className="bannerIcon  ">
                            <FaLinkedin/>
                            </span>
                        </a>
                    </div>
                </div>
                <div >
                    <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
                        <div className="flex gap-x-4">
                            <a href="https://react.dev/" target="_blank">
                                <span className="bannerIcon  ">
                                    <SiReact/>
                                </span>
                            </a>
                            <a href="https://nodejs.org/en" target="_blank" rel="NodeJs"> 
                                <span className="bannerIcon">
                                   <RiNodejsLine />
                                </span>
                            </a>
                            <a href="https://tailwindcss.com/" target="_blank">
                                <span className="bannerIcon  ">
                                   <SiTailwindcss/>
                                </span>
                            </a>
                            <a href="https://www.figma.com/" target="_blank">
                                <span className="bannerIcon  ">
                                    <SiFigma/>
                                </span>
                            </a>
                        </div>
                </div>
            </div>
        </div>

        <div className="md:w-1/3 lg:hidden xl:flex md:flex-col justify-center  items-center  relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-red-100 opacity-5 rounded-3xl blur-3xl"></div>
             <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[120%]  h-[120%] rounded-full bg-red-400 opacity-10 "></div>
             <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[105%]  h-[105%] rounded-full bg-red-600 opacity-20 "></div>
             
             <div className="z-10 bg-red-900 rounded-full">
             <img src={file} alt="" className=" z-40 lg:w-[400px] w-[270px] lg:h-[430px] h-[280px] contrast-200  saturate-50 grayscale  " />
             </div>
             <div className="  z-20 absolute top-[90%] left-[10%] -translate-y-[90%] -translate-x-[10%] bg-blue-100 w-[50%] h-[30%]
             rounded-md flex flex-col justify-between items-center py-2">
                <p className="text-gray-900 text-xs md:text-lg font-titleFont font-semibold ">Learning Chart</p>
                <div>
                    <div className=" h-full flex gap-2 md:gap-4 ">
                         <div className="text-gray-800 text-[5px] md:text-[10px] font-bold font-bodyFont flex flex-col gap-4 md:gap-y-5 w-[10%] ">
                            <p>100</p>
                            <p>50</p>
                            <p>10</p>
                         </div>
                         <div className="flex gap-4 items-end w-[90%]">
                            <div className="w-2 md:w-5 h-14 md:h-20 bg-purple-700 rounded-t-md"></div>
                            <div className="w-2 md:w-5 h-8 md:h-14 bg-pink-900 rounded-t-md"></div>
                            <div className="w-2 md:w-5 h-6 bg-yellow-500 rounded-t-md"></div>
                            <div className="w-2 md:w-5 h-12 md:h-10 bg-green-800 rounded-t-md"></div>
                            <div className="w-2 md:w-5 h-8 md:h-12 bg-cyan-700 rounded-t-md"></div>
                         </div>
                    </div>
                </div>
             </div>
             
             
        </div>
    </section>
    )
}

export default Banner