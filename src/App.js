import React, { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar.js"
import Hero from './Components/Hero/Hero.js'
import Programs from './Components/Programs/Programs.js'
import Title from './Components/Title/Title.js'
import About from './Components/About/About.js'
import Campus from './Components/Campus/Campus.js'
import Testimonial from './Components/Testimonnials/Testimonial.js'
import Contact from './Components/Contact/Contact.js'
import Footer from './Components/Footer/Footer.js'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.js'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' title='What Student Says' />
        <Testimonial />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
    </div>
  )
}

export default App
