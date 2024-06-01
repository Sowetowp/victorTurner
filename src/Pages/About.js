import React, { useEffect, useState } from 'react'
import AboutMe from '../Components/AboutMe'
import Myservices from '../Components/Myservices'
import Reviews from '../Components/Reviews'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'

const About = () => {
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
  const navigate = useNavigate()
  useEffect(()=>{
    const parentWindow = window.parent;
    const parentURL = parentWindow.location.href;
    if(window.innerWidth > 576 && parentURL.includes('/about')){
      localStorage.setItem('myAppState', JSON.stringify("/about"));
      const savedState = JSON.parse(localStorage.getItem('myParam'));
      navigate(`/${savedState}`)
      console.log(parentURL)
    }
  },[])
  return (
    <>
        {window.innerWidth <= 576 &&<Nav colsetter={colsetter} radsetter={radsetter}/>}
        <AboutMe prop1={col1} prop2={col2} prop3={rad}/>
        <Myservices prop1={col1} prop2={col2} prop3={rad}/>
        <Reviews prop1={col1} prop2={col2} prop3={rad}/>
    </>
  )
}

export default About