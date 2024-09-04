 
import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'
import Popup from '../banner/Popup';
import { VscOpenPreview } from "react-icons/vsc";
const ProjectCard = ({id,image,title,des,src}) => {
    const [videoPopup, setVideoPopup] = useState(null);
    const [popToggle, setPopToggle] = useState(false);

    const openPopup = (id) =>{
        setVideoPopup(id);
        setPopToggle(true);
        console.log(setPopToggle);

    }
    const closePopup = () =>{
        setVideoPopup(null);
        setPopToggle(false);
    }
  return (
    <div className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col
    bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
    hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
            <img className="w-full max-h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer" src={src} alt="" />

        </div>
        <div className="w-full mt-5 font-bodyFont">
            <div className="flex items-center justify-between">
                <h3 className="text-designColor text-lg font-bold">{title}</h3>
                <div className="flex gap-2">
                    <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub/>
                    </span>
                    <span 
                    onClick={() =>openPopup(id)}
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex
                    justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <VscOpenPreview  />
                    </span>
                </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 text-justify">{des}</p>
        </div>
        <div>
            {videoPopup === id && <Popup image={image} closePopup={closePopup} popToggle={popToggle}/>}
        </div>
    </div>
  )
}

export default ProjectCard