import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import todo from "../../assets/video/weather.mp4"
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react"

 
 
import {projectOne,projectTwo,projectThree} from '../../assets/index'

const Project = () => {
  const [moreProject, setMoreProject] = useState(null);

  const handleMoreProject = () =>{
      setMoreProject((e) =>!e);
  }

  return (
    <div id="projects" className="w-full py-10 flex border-b-[1px] flex-col border-b-black">
        <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des = "My Projects"
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         
          <ProjectCard
            id={"01"}
            image={todo}
            title="CURD Operation"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectOne}
          />
          <ProjectCard
            id={"02"}
            image={todo}
            title="Weather App"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectThree}
          />
          <ProjectCard
            id={"03"}
            image={todo}
            title="To-do List"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectTwo}
          />
          <ProjectCard
            id={"04"}
            image={todo}
            title="Tic-Toe Game"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectThree}
          />
          <ProjectCard
            id={"05"}
            image={todo}
            title="Password Generator"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectTwo}
          />
          <ProjectCard
            id={"06"}
            image={todo}
            title="Landing Page"
            des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
            src = {projectOne}
          />
        
            <div>
              {
                moreProject ? (
                  <ProjectCard
                  id={"06"}
                  image={todo}
                  title="NiuNotes"
                  des = " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic atque nulla minus quibusdam illum qui!"
                  src = {projectTwo}
                  />
                ): (<div></div>)
              }
            </div>
        
              
            
           

        </div>
       <div className="mt-10 mx-auto">
       
        <button
          onClick={() =>handleMoreProject()}
          class="px-10 py-3.5 text-base font-medium text-white border-[1px] border-designColor hover:scale-125 duration-200 focus:ring-4 outline-none focus:outline-none focus:opacity-80 rounded-lg text-center hover:bg-designColor flex gap-2 items-end">
              {
                moreProject ? "Show Less" : "Show More"
              }
            
            <FaChevronDown/></button> 
       
       </div>
      

    </div>
  )
}

export default Project