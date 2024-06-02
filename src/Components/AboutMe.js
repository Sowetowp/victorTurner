import React, { useEffect, useState } from 'react'
import image from "../Assets/Images/WhatsApp Image 2024-05-30 at 15.17.43_1dcc5702.jpg"
import "../Styles/Aboutme.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = (props) => {
    const { prop1, prop2, prop3 } = props;

    useEffect(() => {
        AOS.init();
      }, [])
      const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
      const [hcolor, hsetColor] = useState("")
      const [hcolor2, hsetColor2] = useState("")
      const [hrad, hsetRad] = useState("")
      
      useEffect(() => {
        const handleStorageChange = () => {
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
    
  return (
    <>
        <div className='container-fluid p-0 aboutme'>
            <div className='about'><p>ABOUT</p></div>
            <div className='container-fluid above'>
                <p className='am'>ABOUT ME</p>
                <div className='anime' style={{backgroundColor:`${prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='move' style={{backgroundColor:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
                </div>
            </div>
            <div className='row pt-5' style={{position:"relative", zIndex:"2"}}>
                <div className='col-md-6' data-aos="fade-up" data-aos-duration="1000">
                    <div className='heoghtcon' style={{position:"relative", height:"360px", margin:"20px"}}>
                        <div className='anb2' style={{background: `${hcolor ? `linear-gradient(90deg, transparent, 10%, ${prop1.length > 0 ? prop1 : hcolor})` : "90deg, linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`, borderBottomRightRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px", borderTopRightRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px"}}></div>
                        <div className='anc2' style={{background: `${hcolor ? `linear-gradient(270deg, transparent, 10%, ${prop1.length > 0 ? prop1 : hcolor})` : "270deg, linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`, borderBottomLeftRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px", borderTopLeftRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px"}}></div>
                        <div className='and2' style={{background: `${hcolor ? `linear-gradient(180deg, transparent, 10%, ${prop1.length > 0 ? prop1 : hcolor})` : "180deg, linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`, borderBottomLeftRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px", borderBottomRightRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px"}}></div>
                        <div className='ane2' style={{background: `${hcolor ? `linear-gradient(0deg, transparent, 10%, ${prop1.length > 0 ? prop1 : hcolor})` : "0deg, linear-gradient(transparent, 10%, rgb(20, 223, 166))"}`, borderTopRightRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px", borderTopLeftRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px"}}></div>
                        <img className='anaimg' style={{width:"100%", height:"100%", border:`${prop2.length > 0 ? "solid 10px " + prop2 : hcolor2 ? "solid 10px " + hcolor2 : "solid 10px rgba(20, 223, 166, 0.171)"}`, position:"relative", borderBottomRightRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px", borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "3px"}} src={image}/>
                    </div>
                </div>
                <div className='col-md-6' data-aos="fade-up" data-aos-duration="2000">
                    <div className='information'>
                        <h3>Hi, I am <span style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>Amzat Abdulmalik</span></h3>
                        <div className='infoholder11'>
                            <div className='infoholder111'>
                                <ul className=''>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>First Name</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Last Name</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Age</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Nationality</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Languages</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Address</span></li>
                                    <li style={{color:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}><span>Freelance</span></li>
                                </ul>
                            </div>
                            <div className='infoholder112'>
                                <ul>
                                    <li>: Victor</li>
                                    <li>: Turner</li>
                                    <li>: 23</li>
                                    <li>: Nigerian</li>
                                    <li>: English, Yoruba</li>
                                    <li>: UK London</li>
                                    <li>: Available</li>
                                </ul>
                            </div>
                        </div>
                        <a style={{textDecoration:"none"}} href="" download="cv.png">
                            <button className='dre' style={{background:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "6px"}}><span>DOWNLOAD RESUME</span></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe