
import './App.css'
 
 
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Project from './components/projects/Project'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonials/Testimonial'
import "slick-carousel/slick/slick.css";
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
 

function App() {
 

  return (
    <>
        <div className=" relative w-full bg-bodyColor text-lightText">
        <Navbar/>
          <div className="max-w-sreen-2xl mx-auto px-6 md:px-16">
            
            <Banner/>
             <Features/>
             <Project/>
             <Resume/>
             <Testimonial/>
             <Contact/>
             
             
          </div>
          <Footer/>
        </div>
    </>
  )
}

export default App
