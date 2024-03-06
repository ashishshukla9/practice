import React from 'react'
import './hero.css'
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We Ensure better edications for a better world</h1>
                <p> Our cutting-edge curriculam is designed to empower students with the knowledge, skills, and experiances needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore More <FaArrowRightLong className='arrow' /></button>
            </div>
        </div>
    )
}

export default Hero