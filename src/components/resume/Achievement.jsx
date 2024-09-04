import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'
const Achievement = () => {
  return (
    <motion.div initial ={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} class="w-full flex lg:flex-row flex-col gap-20">
        <div className="w-full">
                <div className="py-12 font-titleFont">  
                    <p className="text-sm text-designColor tracking-[4px]">2010 - 2020</p>
                    <h2 className="text-4xl font-bold">
                        Achievement data
                    </h2>
                </div>
                <div className="">
                 
                <div className="w-full mt-14  lg:h-[1000px] border-l-[6px] border-black border-opacity-30
                    flex flex-col gap-10">
                    
                        <ResumeCard
                            title="Btech in Computer Science & Engineering"
                            subTitle="Noida International University (2023 - 2026)"
                            result ="8.7CPGA"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                        <ResumeCard
                            title="Diploma in Computer Science & Engineering"
                            subTitle="Government Polyechnic Adityapur (2020 - 2023)"
                            result ="8.2CPGA"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                        <ResumeCard
                            title="Secondary Education"
                            subTitle="High School (2010 - 2020)"
                            result ="9 CPGA"
                            des = "Higher education is tertiary education leading to award of an acedmic college."
                        />
                </div>
            </div>
            </div>

    </motion.div>
  )
}

export default Achievement