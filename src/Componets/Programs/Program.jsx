import React from 'react'
import './program.css'
import blog from '../../assets/blog/01.jpg'
import blog2 from '../../assets/blog/02.jpg'
import blog3 from '../../assets/blog/03.jpg'
import education from '../../assets/education.png'
import education2 from '../../assets/education.png'
import education3 from '../../assets/education.png'
const Program = () => {
    return (
        <div className='programs'>
            <div className='program'>
                <img src={blog} alt="" />
                <div className='caption'>
                    <img src={education} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={blog2} alt="" />
                <div className='caption'>
                    <img src={education2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className='program'>
                <img src={blog3} alt="" />
                <div className='caption'>
                    <img src={education3} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            https://www.youtube.com/watch?v=WbV3zRgpw_E
        </div>
        
    )
}

export default Program