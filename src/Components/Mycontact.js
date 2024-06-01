import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import "../Styles/Aboutme.css"
import "../Styles/Contact.css"
import email from "../Assets/Images/email.svg"
import phone from "../Assets/Images/phone.svg"
import location from "../Assets/Images/location.svg"
import Preloader from './Preloader';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledInput = styled.input`
    &:focus,
    &:hover {
    border: solid 1px ${(props) => props.afterColor};
    }
`;
const StyledTextArea = styled.textarea`
    &:focus,
    &:hover {
    border: solid 1px ${(props) => props.afterColor};
    }
`;

const Mycontact = (props) => {
    const { prop1, prop2, prop3 } = props;
    const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    const [hcolor, hsetColor] = useState("")
    const [hcolor2, hsetColor2] = useState("")
    const [hrad, hsetRad] = useState(0)
    useEffect(() => {
        const handleStorageChange = () => {
            const savedState = JSON.parse(localStorage.getItem('myColorState'));
            const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
            const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
            if (typeof savedState3 === "number") {
                hsetRad(savedState3)
            }
            if (typeof savedState === "string") {
                hsetColor(savedState)
            }
            if (typeof savedState2 === "string") {
                hsetColor2(savedState2)
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('myColorState'));
        const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
        const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
        if (typeof savedState3 === "number") {
            hsetRad(savedState3)
        }
        if (typeof savedState === "string") {
            hsetColor(savedState)
        }
        if (typeof savedState2 === "string") {
            hsetColor2(savedState2)
        }
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();
        emailjs.sendForm('service_paphksk', 'template_hg9pf8t', form.current, 'pfOhM6ujfpEqO1rOt')
            .then((result) => {
                setLoading(false)
                toast.success('Sent', {
                    position: 'top-right',
                })
            }, (error) => {
                setLoading(false)
                toast.error('Something went wrong', {
                    position: 'bottom-center',
                })
            });

    };

    return (
        <>
            {loading
                ?
                <Preloader />
                :
                <div className='container-fluid px-0 aboutme pb-5'>
                    <div className='about'><p>CONTACT</p></div>
                    <div className='container-fluid above'>
                        <p className='am'>CONTACT ME</p>
                        <div className='anime' style={{ backgroundColor: `${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }}>
                            <div className='move' style={{ backgroundColor: `${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%" }}></div >
                        </div>
                    </div>
                    <div className='container-fluid conmd my-5'>
                        <div className='row'>
                            <div className='cu1 col-md' data-aos="fade-up" data-aos-duration="1000">
                                <p className='cup1'>Contact Information</p>
                                <p className='cup2'>Reach out to me and let's drive results! I am always available to discuss potential opportunities and collaborations.</p>
                                <div className='cu3' style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }}>
                                    <div className='cuimg' style={{ backgroundColor: `${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}` }}>
                                        <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" /></svg>
                                    </div>
                                    <div className='cu4'>
                                        <p className='cup3'>Contact on phone</p>
                                        <a href='tel:07480070723' className='cua1'>074 80 0707 23</a>
                                        {/* <br></br>
                                        <a className='cua2' href='tel:+2348181451877'>08181451877</a> */}
                                    </div>
                                </div>
                                <div className='cu3' style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }}>
                                    <div className='cuimg' style={{ backgroundColor: `${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}` }}>
                                        <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" /></svg>
                                    </div>
                                    <div className='cu4'>
                                        <p className='cup3'>Contact on mail</p>
                                        <a href='mailto:victor.innovativesolutions@gmail.com' className='cua1'>victor.innovativesolutions@gmail.com</a>
                                        {/* <br></br>
                                        <a className='cua2' href='mailto:amzatabdulmalik4@gmail.com'>amzatabdulmalik4@gmail.com</a> */}
                                    </div>
                                </div>
                                <div className='cu3' style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }}>
                                    <div className='cuimg' style={{ backgroundColor: `${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}` }}>
                                        <svg fill={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgba(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" /></svg>
                                    </div>
                                    <div className='cu4'>
                                        <p className='cup3'>Contact address</p>
                                        <address className='cua1'>London</address>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md cfo' data-aos="fade-up" data-aos-duration="1000">
                                <form style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }} className='cu2' ref={form} onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <br></br>
                                    <StyledInput style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }} afterColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} placeholder='Enter Your Name' name="user_name" className='cu2input' />
                                    <br></br>
                                    <label>Email</label>
                                    <br></br>
                                    <StyledInput style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }} afterColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} placeholder='Enter Your Email...' name="user_email" />
                                    <br></br>
                                    <label>Subject</label>
                                    <br></br>
                                    <StyledInput style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }} afterColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} placeholder='Enter Subject...' name='subject' />
                                    <br></br>
                                    <label>Message</label>
                                    <br></br>
                                    <StyledTextArea style={{ borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }} afterColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} placeholder='Enter Your Message...' name="message" />
                                    <br></br>
                                    <button className='cdre' type="submit" value="Send" style={{ background: `${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px" }}><span>SEND MAIL</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Mycontact