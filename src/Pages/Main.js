import React, { useCallback, useEffect, useState } from 'react'
import menu from "../Assets/Images/menu.svg"
import "../Styles/Menu.css"
import close from "../Assets/Images/close.svg"
import dp from "../Assets/Images/WhatsApp Image 2024-05-30 at 15.17.43_50d486ad.jpg"
import arro from "../Assets/Images/arro.svg"
import "../Styles/Main.css"
import "../Styles/Demo.css"
import { useNavigate, useParams } from 'react-router-dom'
import closer from "../Assets/Images/close-square-svgrepo-com.svg"



const Main = () => {
    const { param } = useParams();
    useEffect(()=>{
        if(param){
            localStorage.setItem('myParam', JSON.stringify(param));
        }else{
            localStorage.setItem('myParam', JSON.stringify("default"));
        }
    }, [])
    const [route, setRoute] = useState("/home")
    const routesetter = useCallback((e)=>{
        setRoute(e)
        localStorage.setItem('myAppState', JSON.stringify(e));
    },[])
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myAppState'));
        setRoute(savedState)
    },[])
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState([
        menu, close
    ])
    const add = ()=> {
        setCounter(e=> e + 1)
    }
    const [change, setChange] = useState(false)
    const switc = () => {
        setChange(!change)
    }
    const malik = (e) => {
        add()
        switc()
        if(typeof e === "string"){
            routesetter(e)
        }
    }
    
    const [color, setColor] = useState("")
    const [color2, setColor2] = useState("")
    const [radius, setRadius] = useState("")
    const colorStorer = (e, f)=>{
        localStorage.setItem('myColorState', JSON.stringify(e));
        localStorage.setItem('myColorState2', JSON.stringify(f));
        setColor(e)
        setColor2(f)
    }
    const radiusStorer = (e)=>{
        localStorage.setItem('myRadiusState', JSON.stringify(e));
        setRadius(e)
    }
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myRadiusState'));
        if(typeof savedState === "number"){
            setRadius(savedState)
        }
    },[])
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myColorState'));
        const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
        if(typeof savedState === "string"){
            setColor(savedState)
        }
        if(typeof savedState2 === "string"){
            setColor2(savedState2)
        }
    },[])


    const navigate = useNavigate()
    useEffect(()=>{
        if(window.innerWidth <= 576){
            const savedState = JSON.parse(localStorage.getItem('myAppState'));
            navigate(typeof savedState === "string" ? savedState : "/home")
        }
    },[])
    const Menu = () => {
    return (
        <>
            <div className='mmd'>
                <div className='container-fluid sa'>
                    <div className='row text-center mrow p-0'>
                        <a  href='/home' target="frame" onClick={()=>malik("/home")} className='col-2 borde'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.1 </i>HOME</p></a>
                        <a href='/about' target="frame" onClick={()=>malik("/about")} className='col-2'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.2 </i>ABOUT</p></a>
                        <a href='/resume' target="frame" onClick={()=>malik("/resume")} className='col-2 borde'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.3 </i>RESUME</p></a>
                        <a href='/work' target="frame" onClick={()=>malik("/work")} className='col-2'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.4 </i>WORKS</p></a>
                        <a href='/blog' target="frame" onClick={()=>malik("/blog")} className='col-2 borde'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.5 </i>BLOGS</p></a>
                        <a href='/contact' target="frame" onClick={()=>malik("/contact")} className='col-2'><p className='menu'><i style={{color:color ? color : "rgb(20, 223, 166)"}}>0.6 </i>CONTACT</p></a>
                    </div>
                </div>
            </div>
        </>
    )
    }
    const reset = ()=>{
        colorStorer("rgba(20, 223, 166)", "rgba(20, 223, 166, 0.171)")
        radiusStorer(5)
    }

  return (
    <>  
        <div className='d-flex container-fluid mmain p-0'>
            <div className='sidebar text-center'>
                <a href='/home' target="frame" data-bs-toggle="modal" data-bs-target="#myModal"><img src={dp} className="sidedp" style={{borderColor:`${color ? color : "rgb(20, 223, 166)"}`}}/></a>
                
                <br></br>
                <button className='toggle' onClick={malik}><img src={image[counter % image.length]}/></button>
                {/* <p className='brand'>~201035~</p> */}
                
                <div className="dropdown dropend">
                    <a className="palette2-button" type="button"  data-bs-toggle="dropdown">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 47 47"
                            className="palette2"
                        >
                            <path
                            strokeWidth="2"
                            stroke="black"
                            fill={`${color2 ? color2 : "rgba(20, 223, 166, 0.171)"}`}
                            d="M23.5 46C11.0736 46 1 35.9264 1 23.5C1 11.0736 11.0736 1 23.5 1C35.9264 1 46 11.0736 46 23.5C46 24.2461 45.7117 24.7823 45.1652 25.2415C44.5763 25.7365 43.6859 26.1372 42.5263 26.4835C41.3771 26.8267 40.0662 27.0884 38.6848 27.3617L38.6142 27.3757C37.275 27.6407 35.8737 27.9179 34.5961 28.2889C32.0955 29.015 29.5022 30.2591 29.1333 33.106C28.9574 34.463 29.3233 36.0257 30.2167 37.8342C31.0026 39.425 32.2278 41.2689 33.9671 43.4224C30.8413 45.0683 27.2807 46 23.5 46Z"
                            ></path>
                            <circle
                            fill="none"
                            className="color-drop drop1"
                            strokeWidth="2"
                            stroke="black"
                            r="3.5"
                            cy="13.5"
                            cx="33.5"
                            ></circle>
                            <circle
                            fill="none"
                            className="color-drop drop2"
                            strokeWidth="2"
                            stroke="black"
                            r="3.5"
                            cy="10.5"
                            cx="20.5"
                            ></circle>
                            <circle
                            fill="none"
                            className="color-drop drop3"
                            strokeWidth="2"
                            stroke="black"
                            r="3.5"
                            cy="18.5"
                            cx="10.5"
                            ></circle>
                            <circle
                            fill="none"
                            className="color-drop drop4"
                            strokeWidth="2"
                            stroke="black"
                            r="3.5"
                            cy="31.5"
                            cx="11.5"
                            ></circle>
                        </svg>
                    </a>
                    <div className="dropdown-menu dropDownBg p-3">
                        <div className='flexundo'>
                            <div>
                                <h5 style={{color:"white"}} className='small'>Customize</h5>
                                <h6 style={{color:"grey", fontSize:"12px"}} className='small'>Modify the theme as per your preference.</h6>
                            </div>
                            <a className='undocursor' onClick={()=>reset()}>
                                <svg className="undo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#fafafa"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke="#ffffff" strokeWidth="2.016" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </a>
                        </div>
                        <div className=''>
                            <h6 className='small text-white mt-3'>Colors</h6>
                            <div className='flexcolordiv'>
                            <a style={{border: color === "rgba(20, 223, 166)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(20, 223, 166)", "rgba(20, 223, 166, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(20, 223, 166)"}}></div>
                                    <p className=''>Turquoise</p>
                                </a>
                                <a style={{border: color === "rgba(255, 0, 204)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 0, 204)", "rgba(255, 0, 204, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 0, 204)"}}></div>
                                    <p className=''>Magenta</p>
                                </a>
                                <a style={{border: color === "rgba(255, 106, 0)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 106, 0)", "rgba(255, 106, 0, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 106, 0)"}}></div>
                                    <p className=''>Orange</p>
                                </a>
                                <a style={{border: color === "rgba(220, 20, 60)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(220, 20, 60)", "rgba(220, 20, 60, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(220, 20, 60)"}}></div>
                                    <p className=''>Red</p>
                                </a>
                                <a style={{border: color === "rgba(120, 81, 169)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(120, 81, 169)", "rgba(120, 81, 169, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(120, 81, 169)"}}></div>
                                    <p className=''>Purple</p>
                                </a>
                                <a style={{border: color === "rgba(255, 179, 71)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 179, 71)", "rgba(255, 179, 71, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 179, 71)"}}></div>
                                    <p className=''>Mango</p>
                                </a>
                                <a style={{border: color === "rgba(0, 191, 255)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(0, 191, 255)", "rgba(0, 191, 255, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(0, 191, 255)"}}></div>
                                    <p className=''>Blue</p>
                                </a>
                                <a style={{border: color === "rgba(255, 64, 64)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 64, 64)", "rgba(255, 64, 64, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 64, 64)"}}></div>
                                    <p className=''>Coral</p>
                                </a>
                                <a style={{border: color === "rgba(255, 247, 0)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 247, 0)", "rgba(255, 247, 0, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 247, 0)"}}></div>
                                    <p className=''>Yellow</p>
                                </a>
                                <a style={{border: color === "rgba(0, 201, 87)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(0, 201, 87)", "rgba(0, 201, 87, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(0, 201, 87)"}}></div>
                                    <p className=''>Green</p>
                                </a>
                                <a style={{border: color === "rgba(255, 182, 193, 1)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(255, 182, 193, 1)", "rgba(255, 182, 193, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(255, 182, 193, 1)"}}></div>
                                    <p className=''>Pink</p>
                                </a>
                                <a style={{border: color === "rgba(0, 255, 255)" ? "solid 1px white" : null}} onClick={()=>colorStorer("rgba(0, 255, 255)", "rgba(0, 255, 255, 0.171)")} className='flexcolor my-2'>
                                    <div className='colorcolor' style={{backgroundColor:"rgba(0, 255, 255)"}}></div>
                                    <p className=''>Aqua</p>
                                </a>
                            </div>
                        </div>
                        <div className=''>
                            <h6 className='small text-white mt-3'>Radius</h6>
                            <div className='flexcolordiv'>
                                <a style={{border: radius === 0 ? "solid 1px white" : null}} onClick={()=> radiusStorer(0)} className='flexcolor2 my-2'>
                                    <p className=''>0</p>
                                </a>
                                <a style={{border: radius === 3 ? "solid 1px white" : null}} onClick={()=> radiusStorer(3)} className='flexcolor2 my-2'>
                                    <p className=''>0.3</p>
                                </a>
                                <a style={{border: radius === 5 ? "solid 1px white" : null}} onClick={()=> radiusStorer(5)} className='flexcolor2 my-2'>
                                    <p className=''>0.5</p>
                                </a>
                                <a style={{border: radius === 7.5 ? "solid 1px white" : null}} onClick={()=> radiusStorer(7.5)} className='flexcolor2 my-2'>
                                    <p className=''>0.75</p>
                                </a>
                                <a style={{border: radius === 10 ? "solid 1px white" : null}} onClick={()=> radiusStorer(10)} className='flexcolor2 my-2'>
                                    <p className=''>1.0</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ifram'> 
                <button className='mbut' onClick={switc} style={{backgroundColor:color2 ? color2 : "rgba(20, 223, 166, 0.171)", borderColor:color2 ? color2 : "rgba(20, 223, 166, 0.171)"}}>
                <svg fill={color ? color : "rgba(20, 223, 166)"} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fillRule="nonzero"/></svg>
                </button>
                {change && <Menu/>}
                <iframe src={typeof route === "string" ? route : "/home"} name='frame' title='myiframe' className='frame'></iframe>
            </div>
        </div>
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header border-0">
                    <h4 className="modal-title" style={{display:"flex", alignItems:"center"}}>
                        
                    </h4>
                    <button type="button" className='modalClsBtn' data-bs-dismiss="modal"><img src={closer}/></button>
                </div>
                <div className="modal-body">
                   <img style={{width:"100%", borderRadius:"8px"}} src={dp}/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main