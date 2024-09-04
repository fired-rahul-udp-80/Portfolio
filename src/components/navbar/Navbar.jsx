import React, { useState } from 'react'
 
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <div className="w-full h-24 mx-auto flex sticky top-0 px-5 border-b-[1px] border-gray-800 lg:px-20 z-50 bg-bodyColor   justify-between items-center">
        <div className="text-white">
          <h1 className="text-4xl font-bold text-white">Portfolio</h1>
        </div>
        <div className="md:flex hidden items-center gap-10">
            {
              navLinksdata.map( ({_id, title, link}) =>{
                return (
                  <ul  >
                    <li key={_id} className="text-base  font-bold uppercase text-gray-400 tracking-wide cursor-pointer
                    hover:text-designColor underline-offset-8 hover:underline duration-300" >
                    <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration ={500}>
                      {title}
                    </Link>
                    </li>
                  </ul>
                )
              })
            }
        </div>
    {/* 
        mobile navigation */}

        <div className={`bg-bodyColor h-screen w-full flex md:hidden flex-col  items-center gap-y-16 gap-10 fixed top-[95px] left-0 origin-top duration-300
          ${menuBar ? "scale-y-1" : "scale-y-0"}`}>
              {
                navLinksdata.map( ({_id, title, link}) =>{
                  return (
                    <ul  >
                      <li key={_id} className="text-base font-bold uppercase text-gray-400 tracking-wide cursor-pointer
                      hover:text-designColor duration-300" >
                      <Link onClick={()=>setMenuBar(!menuBar)}
                      activeClass="active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration ={500}>
                        {title}
                      </Link>
                      </li>
                    </ul>
                  )
                })
              }
        </div>
      <div className="md:hidden text-2xl cursor-pointer ">
        {
          menuBar ?<IoCloseSharp onClick={()=>{setMenuBar(!menuBar)}} /> : <RiMenu3Fill onClick={()=>{setMenuBar(!menuBar)}} />
        }
      
      
      </div>
    </div>
  )
}

export default Navbar