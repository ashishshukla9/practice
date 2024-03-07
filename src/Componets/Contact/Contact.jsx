import React from 'react'
import './contact.css';
import message from '../../assets/message.png'
import { MdOutlinePhoneInTalk, MdMarkEmailRead, MdLocationOn } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c6c74cdf-0923-4cd5-afa4-74f603c0835b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={message} alt="" /></h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul>
                    <li><MdMarkEmailRead /> contact@gmail.com</li>
                    <li><MdOutlinePhoneInTalk /> +1 123-456-7890</li>
                    <li><MdLocationOn /> 77, Lorem Ipsum is simply, dummy text of the printing and typesetting industry. </li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Names</label>
                    <input type="text" name="name" placeholder="Enter Your Name" required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required />

                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' ></textarea>
                    <button type="submit" className='btn dark-btn'>Submit Now <FaArrowRightLong className='arrow' /></button>
                </form>
                <span>{result}</span>

            </div>
        </div>
    )
}

export default Contact
