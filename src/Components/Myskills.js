import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Aboutme.css"
import "../Styles/Myskills.css"
import node from "../Assets/Images/node.fc4d4b87.svg"
import js from "../Assets/Images/javascript.b472cbc1.svg"
import ts from "../Assets/Images/typescript.97711300.svg"
import react from "../Assets/Images/vite.svg"
import reactn from "../Assets/Images/react.512a3a7e.svg"
import git from "../Assets/Images/git.21d80414.svg"
import md from "../Assets/Images/mongoDB.d8d2b67f.svg"
import redux from "../Assets/Images/redux.2fdafc8e.svg"
import postman from "../Assets/Images/icons8-postman-api.svg"
import py from "../Assets/Images/icons8-python.svg"
import html from "../Assets/Images/html.ed6aaa50.svg"
import css from "../Assets/Images/css.e5e99f36.svg"
import flask from "../Assets/Images/icons8-flask.svg"
import bs from "../Assets/Images/icons8-bootstrap.svg"
import express from "../Assets/Images/icons8-express-js.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Myskills = (props) => {
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
    
  useEffect(() => {
      AOS.init();
  }, [])

  const number1 = useRef();
  const number2 = useRef();
  const number3 = useRef();
  const number4 = useRef();
  
  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter === 95) {
        clearInterval(intervalId);
      } else {
        counter += 1;
        number1.current.innerHTML = counter + "%";
        number2.current.innerHTML = counter + "%";
        number3.current.innerHTML = counter + "%";
        number4.current.innerHTML = counter + "%";
      }
    }, 50);
    return () => clearInterval(intervalId);
  }, []);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(95);
  }, []);

  return (
    <>
        <div className='container-fluid p-0 aboutme'>
          <div className='about'><p>SKILLS</p></div>
          <div className='container-fluid above'>
              <p className='am'>MY SKILLS</p>
              <div className='anime' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                  <div className='move' style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
              </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1000">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number1}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}/>
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}/>
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Web Apps Development</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="1500">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number2}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Mobile Apps Development</p>
                </div>
              </div>
              <div className='col-md text-center' data-aos="fade-up" data-aos-duration="2000">
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number3}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Hosting And Maintenance</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2500" className='col-md text-center'>
                <div style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}} className='mscont py-4'>
                  <div className='msback'>
                    <div className='outer' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`}}>
                      <div className='inner'>
                        <div id='number' ref={number4}></div>
                      </div>
                    </div>
                    <svg className='mysvg' xmlns='http://www.w3.org/2000/svg' version='1.1' width="133px" height="133px">
                      <defs>
                        <linearGradient id='gradientcolor'>
                          <stop offset="0%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                          <stop offset="100%" stopColor={prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} />
                        </linearGradient>
                      </defs>
                      <circle cx="66" cy="66" r="60" strokeLinecap='round' />
                    </svg>
                  </div>
                  <p className='msbed'>Project Supervision</p>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid mt-5'>
            <div className='row'>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={js}/> Javascript - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={react}/> React Js - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={html}/> Html - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={css}/> CSS - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                {/* <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={ts}/> Typescript - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div> */}
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={express}/> Express - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={bs}/> Bootstrap - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={node}/> Node Js - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000">
                  <p><img style={{width:"15px",height:"15px"}} src={flask}/> Flask - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
              </div>
              <div className='col-md prog1'>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={reactn}/> React Native - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={py}/> Python - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={ts}/> Typescript - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={redux}/> Redux - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={md}/> Nosql(MongoDB) - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={git}/> Git & GitHub - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
                <div data-aos-offset="-200" data-aos="fade-up" data-aos-duration="2000">
                  <p><img style={{width:"15px",height:"15px"}} src={postman}/> Postman - <span style={{color:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`}}>(95%)</span></p>
                  <div className='ful' style={{backgroundColor:`${prop2 && prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`,borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='se'  style={{backgroundColor:`${prop1 && prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, width: `${width}%`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Myskills