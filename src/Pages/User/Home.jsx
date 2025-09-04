import React from 'react'
import Layout from "./Layout/Layout.jsx";
import Banner from '../../Components/User/Home/Banner.jsx';
import About from '../../Components/User/Home/About.jsx'
import CoinageSection from '../../Components/User/Home/CoinageSection.jsx'
import Directors from '../../Components/User/Home/Directors.jsx';
import Contact from '../../Components/User/Home/Contact.jsx';
import Patron from '../../Components/User/Home/Patron.jsx';
import CourseSection from '../../Components/User/Home/CourseSection.jsx';
import VisionSection from '../../Components/User/Home/VisionSection.jsx';
import ProductSection from '../../Components/User/Home/ProductSection.jsx';


function Home() {
  return (
    <Layout>
         <Banner/>
       <About />
      <CoinageSection/>  
          <VisionSection />
        <ProductSection />
         <CourseSection />
      <Patron /> 
       <Directors/>
           <Contact />
    </Layout>
  )
}

export default Home
