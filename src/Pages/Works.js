import React, { useEffect, useState } from 'react'
import Myworks from '../Components/Myworks'
import Nav from '../Components/Nav'
import { useNavigate } from 'react-router-dom'

const Works = () => {
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
    if(window.innerWidth > 576 && parentURL.includes('/work')){
      localStorage.setItem('myAppState', JSON.stringify("/work"));
      const savedState = JSON.parse(localStorage.getItem('myParam'));
      navigate(`/${savedState}`)
      console.log(parentURL)
    }
  },[])
  return (
    <>
        {window.innerWidth <= 576 &&<Nav colsetter={colsetter} radsetter={radsetter}/>}
        <Myworks prop1={col1} prop2={col2} prop3={rad}/>
    </>
  )
}

export default Works