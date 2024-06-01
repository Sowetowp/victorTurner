import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Home.css"
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/mail.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import threads from "../Assets/Images/threads-seeklogo.com-2.svg"
import image from "../Assets/Images/WhatsApp Image 2024-05-30 at 15.17.43_1dcc5702.jpg"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
const StyledDiv = styled.div`
  
  &::after {
    
    background: ${(props) => props.afterColor};
    
  }
`;

const Home = () => {
  const [text] = useTypewriter({
    words: ['Victor Turner', 'a Software Engineer', 'a Full-stack Developer', 'a Quick Learner', 'a Problem Solver', 'a Continuous Learner'],
    loop: 0
  })
  useEffect(() => {
    AOS.init();
  }, [])
  const [color, setColor] = useState("rgb(212, 212, 243 )")
  const sub = ()=> {
    setColor("rgb(11, 18, 35)")
  }
  const add = ()=> {
    setColor("rgb(212, 212, 243 )")
  }
  const [color3, setColor3] = useState("rgb(212, 212, 243 )")
  const sub3 = ()=> {
    setColor3("rgb(11, 18, 35)")
  }
  const add3 = ()=> {
    setColor3("rgb(212, 212, 243 )")
  }
  const [color2, setColor2] = useState("rgb(212, 212, 243 )")
  const sub2 = ()=> {
    setColor2("rgb(11, 18, 35)")
  }
  const add2 = ()=> {
    setColor2("rgb(212, 212, 243 )")
  }
  const [color1, setColor1] = useState("rgb(212, 212, 243 )")
  const sub1 = ()=> {
    setColor1("rgb(11, 18, 35)")
  }
  const add1 = ()=> {
    setColor1("rgb(212, 212, 243 )")
  }
  
  const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
  const [hcolor, hsetColor] = useState("")
  const [hcolor2, hsetColor2] = useState("")
  const [hrad, hsetRad] = useState("")
  
  useEffect(() => {
    const handleStorageChange = () => {
      const savedState = JSON.parse(localStorage.getItem('myColorState'));
      const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
      const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
      if(typeof savedState === "string"){
          hsetColor(savedState)
      }
      if(typeof savedState2 === "string"){
          hsetColor2(savedState2)
      }
        if(typeof savedState3 === "number"){
            hsetRad(savedState3)
        }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  useEffect(()=>{
    const savedState = JSON.parse(localStorage.getItem('myColorState'));
    const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
    const savedState3 = JSON.parse(localStorage.getItem('myRadiusState'));
    if(typeof savedState3 === "number"){
        hsetRad(savedState3)
    }
    if(typeof savedState === "string"){
        hsetColor(savedState)
    }
    if(typeof savedState2 === "string"){
        hsetColor2(savedState2)
    }
  },[])
  const possibleClickers = [
    {
      code:"hcx",
      name:"X user", 
      from: "making the journey all the way from my X profile.", 
      hope: "I hope you enjoy navigating through my portfolio and find it both entertaining and engaging.", 
      look:" I'm eagerly anticipating your comments and feedback!"
    },
    {
      code:"qrp", 
      name: "Amazon hiring team", 
      from: "especially after reviewing the Upwork proposal I submitted for the web developer role in your organization.", 
      hope:"I hope you find my skills and experience align well with what you're looking for.", 
      look:"Looking forward to the possibility of working together! 🚀"
    },
    {
      code:"hjk",
      name:"there", 
      from: "making the journey all the way from my resume.", 
      hope: "I hope you enjoy navigating through my portfolio and find it both entertaining and engaging.", 
      look:" I'm eagerly anticipating your comments and feedback!"
    },
    {
      code:"dca",
      name:"Jeff", 
      from: "making the journey all the way from Digication questionnaire.", 
      hope: "I hope you enjoy navigating through my portfolio and find it both entertaining and engaging.", 
      look:" I'm eagerly anticipating your comments and feedback!"
    },
  ]
  const [clicker, setClicker] = useState({})
  useEffect(()=>{
    const savedState = JSON.parse(localStorage.getItem('myParam'));
    
    if(savedState !== "default"){
      const findClicker = possibleClickers.filter((e)=>e.code === savedState)
      if(findClicker.length > 0){
        setClicker(findClicker[0])
        const form = {subject:findClicker[0].name  + " used your link"}
        emailjs.send('service_paphksk', 'template_hg9pf8t', form, 'pfOhM6ujfpEqO1rOt')
      }
    }
  },[])
  const navigate = useNavigate()
  useEffect(()=>{
    const parentWindow = window.parent;
    const parentURL = parentWindow.location.href;
    if(window.innerWidth > 576 && parentURL.includes('/home')){
      localStorage.setItem('myAppState', JSON.stringify("/home"));
      const savedState = JSON.parse(localStorage.getItem('myParam'));
      navigate(`/${savedState}`)
      console.log(parentURL)
    }
  },[])
  const [col1, setCol1] = useState("")
  const [col2, setCol2] = useState("")
  const [rad, setRad] = useState("")
  const colsetter = (e, f)=>{
    setCol1(e)
    setCol2(f)
  }
  const radsetter = (e)=>{
    setRad(e)
  }
  return (
    <>
      {window.innerWidth <= 576 &&<Nav colsetter={colsetter} radsetter={radsetter}/>}
      <div className='container-fluid home' style={{overflow:"hidden"}}>
        <div className='blur'></div>
        <div className='inde'>
          <div data-aos="fade-up" data-aos-duration="1000" className='dphome'>
            <img src={image} className="homedp"/>
            <div style={{background: `linear-gradient(transparent, 10%, ${col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"})`}} className='spin'></div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className='type text-center'>
            <p>Hi, I am <span style={{color:col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"}}>{text}</span></p>
          </div>
          <p data-aos="fade-up" data-aos-duration="2000" className='info'>{clicker.name ? `Hi ${clicker.name}! It's exciting to see you here on my portfolio, ${clicker.from} Thank you for taking the time to explore my work.${clicker.hope} Should you have any questions or wish to discuss further, please feel free to reach out via the contact page. ${clicker.look}` : "Welcome to my digital playground where creativity and technology merge! My portfolio is where I showcase my skills and passion for crafting visually stunning and user-friendly web and mobile applications. Dive in and take a look at some of my past projects, and you'll see why I'm passionate about what I do. Thank you for visiting and I hope you enjoy exploring my work!"}</p>
          <div className='small-icons mt-3' data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2500">
            <a href="https://github.com/Sowetowp"  target="_blank">
            <StyledDiv afterColor={col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"} onMouseEnter={sub} onMouseLeave={add} className='bdre' style={{borderRadius: typeof rad === "number" ? rad + "px" : typeof hrad === "number" ? hrad + "px" : "4px"}}>
              <svg fill={color} xmlns="http://www.w3.org/2000/svg" width="24" color="white" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </StyledDiv>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/abdulmalik-amzat-a0647321b/"><StyledDiv afterColor={col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"} onMouseEnter={sub1} onMouseLeave={add1} className='bdre' style={{borderRadius: typeof rad === "number" ? rad + "px" : typeof hrad === "number" ? hrad + "px" : "4px"}}>
              <svg fill={color1} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"/></svg>
            </StyledDiv></a>
            <a target="_blank" href='https://www.threads.net/@amzat_abdulmalik'><StyledDiv afterColor={col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"} onMouseEnter={sub2} onMouseLeave={add2} className='bdre' style={{borderRadius: typeof rad === "number" ? rad + "px" : typeof hrad === "number" ? hrad + "px" : "4px"}}>
              <svg fill={color2} aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path className="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
            </StyledDiv></a>
            <a target="_blank" href='https://twitter.com/amzat_abdmalik?s=11&t=5RvOaHdVfPfpYh2LQdQnIw'><StyledDiv afterColor={col1 && col1.length > 0 ? col1 : hcolor ? hcolor : "rgb(20, 223, 166)"} onMouseEnter={sub3} onMouseLeave={add3} className='bdre' style={{borderRadius: typeof rad === "number" ? rad + "px" : typeof hrad === "number" ? hrad + "px" : "4px"}}>
              <svg fill={color3} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"/></svg>
            </StyledDiv></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home