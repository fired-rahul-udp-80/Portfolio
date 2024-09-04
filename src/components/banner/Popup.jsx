import React, { useState } from 'react'

const Popup = ({image,popToggle,closePopup,title,des}) => {
    
    const controlPopup = ()=>{

    }
  return (
    <div className=" w-full h-full fixed backdrop-blur-sm  inset-0 ">
        <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
         lg:w-[500px] w-[90%] h-[400px]  bg-bodyColor rounded shadow-shadowOne p-5 flex flex-col 
         justify-between z-50">
            {
               popToggle && (
                <div className="w-full h-full">
                <video
                muted
                loop
                autoPlay
                controls
                
                >
                    <source src={image} />
                </video>
                </div>
                )    
            }
                <div>
                    <div className="flex flex-col gap-5">
                    <p className="text-3xl font-bold text-designColor text-left">{title}</p>
                    <p className="text-gray-400 text-lg text-justify">{des}</p>
                    </div>
                    
                </div>
               
            
            <div className="border-t-[1px] pt-5 flex justify-end ">
                    <button
                    onClick={closePopup}
                    className="text-white bg-designColor px-5 py-2 rounded">Close</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Popup