import React, { useState } from 'react'
import { featureCardData } from '../../constants'
import Title from '../layouts/Title'
import Popup from '../banner/Popup'
 

const Features = () => {
  const [popUp, setPopUp] = useState(null);
   

  const openPopup = (id) =>{
    setPopUp(id);
   
  }
  const closePopup = () =>{
    setPopUp(null);
  
  }

  return (
    <section id="features" className="relative w-full h-full py-16 flex border-b-[1px] flex-col border-b-black ">
         <Title title="Feature" des="What I Do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 ">
          {
            featureCardData.map((cardData) =>(
              <div key={cardData.id} className="w-50 lg:h-90 rounded-lg shadow-shadowOne flex items-center transition-300 overflow-hidden
              bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
              hover:from-black hover:to-[#1e2024] transition-colors duration-100 ">
                <div className="flex flex-col gap-8 px-6 py-5 items-start translate-y-2 group-hover:translate-y-0
                transition-transform duration-500 ">
                  <div className="w-[40px] h-[40px] bg-white rotate-45">
                   
                  </div>
                  <div className="flex flex-col gap-6">
                    <h2  className="text-3xl font-bodyFont font-bold text-gray-300">{cardData.title}</h2>
                    <p className="base text-justify">{cardData.des}</p>
                  </div>
                  <button
                  onClick={()=> openPopup(cardData.id)}
                   className=" text-gray-200 md:text-xl text-sm
                        px-6 py-3 rounded-md hover:bg-opacity-80 bg-designColor
                         cursor-pointer">Go To</button>
                  </div>
                  <div>
                    {
                      popUp === cardData.id && <Popup   closePopup={closePopup} title={cardData.title} des={cardData.des} />
                    }
                  </div>
              </div>
              
            ))
          }
            
             
        </div>
        
    </section>
  )
}

export default Features