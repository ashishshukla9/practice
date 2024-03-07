import React from 'react'
import './campus.css'
import gallery from '../../assets/gallery/01.jpg'
import gallery2 from '../../assets/gallery/02.jpg'
import gallery3 from '../../assets/gallery/03.jpg'
import gallery4 from '../../assets/gallery/04.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
const Campus = () => {
    return (
        <div className='campus'>
            <div className='gallery'>
                <img src={gallery} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                {/* <img src={gallery5} alt="" />
                <img src={gallery6} alt="" /> */}
            </div>
            <button className='btn dark-btn'>See More Here <FaArrowRightLong className='arrow' /></button>

        </div>
    )
}

export default Campus
