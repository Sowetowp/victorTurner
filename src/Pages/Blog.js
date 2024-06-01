import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import ComingSoon from './ComingSoon'
import { useNavigate } from 'react-router-dom'


const Blog = () => {
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
    if(window.innerWidth > 576 && parentURL.includes('/blog')){
      localStorage.setItem('myAppState', JSON.stringify("/blog"));
      const savedState = JSON.parse(localStorage.getItem('myParam'));
      navigate(`/${savedState}`)
      console.log(parentURL)
    }
  },[])
  return (
    <>
        {window.innerWidth <= 576 &&<Nav colsetter={colsetter} radsetter={radsetter}/>}
      <ComingSoon/>
    </>
  )
}

export default Blog