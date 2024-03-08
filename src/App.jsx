import React, { useState } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Program from './Componets/Programs/Program'
import Title from './Componets/Title/Title'
import About from './Componets/About/About'
import Campus from './Componets/Campus/Campus'
import Testimonials from './Componets/Testimonials/Testimonials'
import Contact from './Componets/Contact/Contact'
import Footer from './Componets/Footer/Footer'
import VideoPlayer from './Componets/VideoPlayer/VideoPlayer'
const App = () => {

    const [playState, setPlayState] = useState(false)

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle="Our Program" title="What We Offer" />
                <Program />
                <About setPlayState={setPlayState} />
                <Title subTitle="Gallery" title="Campus Photos" />
                <Campus />
                <Title subTitle="Testimonials" title="What Students Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get In Touch" />
                <Contact />

            </div>
            <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </div>
    )
}

export default App