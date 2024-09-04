import React, { useState } from 'react'
import Title from '../layouts/Title'
import { contactImg } from '../../assets'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Contact = () => {
    const [username, setUsername] = useState(" ");
    const [phoneNumber, setPhoneNumber] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [subject, setSubject] = useState(" ");
    const [message, setMessage] = useState(" ");
    const [errMsg, setErrMsg] = useState(" ");
    const [successMessage, setSuccessMessage] = useState(" ");

    // ============= Email Validation start here ================
    const emailValidation = () => {
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }
    // ============ Email Validation end here =================

    const handleSend = (e) =>{
        e.preventDefault();

        if(username ===" "){
            setErrMsg("Username is required");
            console.log(errMsg);
        } else if(phoneNumber === " ") {
            setErrMsg("Phone number is required");
        } else if(email === " ") {
            setErrMsg("Please give your Email");
        } else if(!emailValidation(email)) {
            setErrMsg(" Enter a valid Email");
        } else if(subject === " ") {
            setErrMsg("Please give your Subject");
        } else if(message === " ") {
            setErrMsg("Message is required");
        }
        else{
             setSuccessMessage(`Thank you dear ${username}. Your Message sent Successfully!`);
             setErrMsg(" ");
             setUsername(" ");
             setPhoneNumber(" ");
             setEmail(" ");
             setSubject(" ");
             setMessage(" ");
             console.log(username,phoneNumber,email,message,subject);
        }
    }


  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
        <div>
            <Title
            title="CONTACT" des="Contact with me"/>
        </div>
        <div className="w-full">
            <div className="w-full h-auto flex md:flex-row flex-col gap-y-10 justify-between">
                <div className="md:w-[35%] w-full h-full gradient-to-r from-[#1e2024] to-[#23272b]
                p-8 rounded-lg shadow-shadowOne flex flex-col gap-4">
                    <img src={contactImg} alt="" className="mb-2" />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl font-bold text-white">Rahul Kumar</h3>
                        <p className="text-lg ont-normal text-gray-400">Mern Stack Developer</p>
                        <p className="text-base text-gray-400 tracking-wide">I am familier with latest technology in web management and experience in web flow.This makes my confidence level up.</p>
                        <a href="callto:9199607457" className="text-base text-gray-400 flex items-center gap-2 ">Phone:
                             <span className="text-lightText">+919199607457</span></a>
                        <a href="mailto:kumarrahul977@gmail.com" className="text-base text-gray-400 flex items-center gap-2">
                            Email: {""}
                            <span className="text-lightText">kumarrahul977@gmail.com</span>
                        </a>
                    </div>

                    <div className="flex flex-col justify-start">
                        <div>
                            <h2 className="text-base uppercase font-titleFont mb-4">Find Me in</h2>
                        </div>
                        <div className="flex gap-4">
                            <span className='bannerIcon'>
                                <FaFacebook/>
                            </span>
                            <span className="bannerIcon">
                                <FaLinkedin/>
                            </span>
                            <span className="bannerIcon">
                                <FaTwitter/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="md:w-[60%] w-full h-full gradient-to-r from-[#1e2024] to-[#23272b]
                p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 ">
                    <form action="" className="flex flex-col gap-4">


                        <div className="w-full flex md:flex-row flex-col md:gap-10 gap-5">
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">YOUR NAME</p>
                                <input
                                onChange={ (e) => setUsername(e.target.value)}
                                //value={username}
                                type="text"
                                placeholder="Name.."
                                className={`${errMsg === "Username is required" &&
                                    "outline-designColor" } contactInput px-4`} />
                            </div>
                            <div className="md:w-1/2 flex flex-col gap-4">
                                <p className="text-sm text-gray-400 uppercase tracking-wide">PHONE NUMBER</p>
                                <input
                                onChange={(e)=> setPhoneNumber(e.target.value)}
                               // value={phoneNumber}
                                type="number"
                                className={`${errMsg === "Phone number is required" &&
                                    "outline-designColor" } contactInput px-4`} />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">EMAIL</p>
                            <input
                            onChange={(e) => setEmail(e.target.value)}
                           // value={email}
                            type="email"
                            className={`${errMsg === "Please give your Email" &&
                                "outline-designColor" } contactInput px-4`} />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">SUBJECT</p>
                            <input
                            onChange={(e) => setSubject(e.target.value)}
                          //  value={subject} type="text"
                          className={`${errMsg === "Please give your Subject" &&
                            "outline-designColor" } contactInput px-4`} />
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <p className="text-sm text-gray-400 uppercase tracking-wide">YOUR MESSAGE</p>
                            <textarea
                            onChange={(e) => setMessage(e.target.value)}
                            //value={message}
                            name="" id="" cols="30" rows="10"
                            className={`${errMsg === "Message is required" &&
                                "outline-designColor" } contactInput px-4 h-40`} ></textarea>
                        </div>
                        <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base
                        text-gray-400 tracking-wider uppercase hover:text-white duration-300
                        hover:border-[1px] hover:border-x-designColor mt-6 border-transparent"
                        >Send Message</button>
                        {

                            errMsg && <p className=" mt-4 bg-gradient-to-r from-[#23272b] text-center
                            text-orange-500 text-base tracking-wide animate-bounce">{errMsg}</p>

                        }
                        {
                            successMessage && <p className=" bg-gradient-to-r from-[#23272b] text-center
                            text-green-500 text-base tracking-wide animate-bounce">{successMessage}</p>
                        }
                    </form>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Contact
