import React, { useRef } from 'react'
import './testimonials.css'
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import test1 from '../../assets/services/01.jpg'
import test2 from '../../assets/services/02.jpg'
import test3 from '../../assets/services/03.jpg'
import test4 from '../../assets/services/04.jpg'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideforward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translate(${tx}%)`
    }
    const slidebackward = () => {
        if (tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translate(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <FaLongArrowAltRight className='next-btn' onClick={slideforward} />
            <FaLongArrowAltLeft className='back-btn' onClick={slidebackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={test1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={test2} alt="" />
                                <div>
                                    <h3>William Jackson2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={test3} alt="" />
                                <div>
                                    <h3>William Jackson3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className='user-info'>
                                <img src={test4} alt="" />
                                <div>
                                    <h3>William Jackson4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Testimonials
