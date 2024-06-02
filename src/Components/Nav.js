import React, { useCallback, useEffect, useState } from 'react'
import "../Styles/Nav.css"
import home from "../Assets/Images/home-17-svgrepo-com.svg"
import dp from "../Assets/Images/"
import closer from "../Assets/Images/close-square-svgrepo-com.svg"
import search from "../Assets/Images/search-svgrepo-com.svg"
import about from "../Assets/Images/profile-round-1345-svgrepo-com.svg"
import resume from "../Assets/Images/resume-4-svgrepo-com.svg"
import works from "../Assets/Images/work-on-computer-employee-software-engineer-programmer-svgrepo-com.svg"
import blog from "../Assets/Images/blog-svgrepo-com.svg"
import contact from "../Assets/Images/contact-letter-box-svgrepo-com.svg"

const Nav = (props) => {
    const { colsetter,  radsetter } = props;
    const [input, setInput] = useState("")
    const [color, setColor] = useState("")
    const [radius, setRadius] = useState("")
    const [color2, setColor2] = useState("")
    const colorStorer = (e, f)=>{
        setColor(e)
        setColor2(f)
        colsetter(e,f)
        localStorage.setItem('myColorState', JSON.stringify(e));
        localStorage.setItem('myColorState2', JSON.stringify(f));
    }
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myColorState'));
        const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
        if(typeof savedState === "string"){
            setColor(savedState)
            setColor2(savedState2)
            colsetter(savedState, savedState2)
        }
    },[])
    const radiusStorer = (e)=>{
        localStorage.setItem('myRadiusState', JSON.stringify(e));
        setRadius(e)
        radsetter(e)
    }
    useEffect(()=>{
        const savedState = JSON.parse(localStorage.getItem('myRadiusState'));
        if(typeof savedState === "number"){
            setRadius(savedState)
            radsetter(savedState)
        }
    },[])
    const reset = ()=>{
        colorStorer("rgba(20, 223, 166)", "rgba(20, 223, 166, 0.171)")
        radiusStorer(5)
    }
    const routesetter = useCallback((e)=>{
        localStorage.setItem('myAppState', JSON.stringify(e));
    },[])
  return (
    <>
        <nav className="navbar navbar-expand-sm navbackground fixed-top">
            <div className="container-fluid">
                <label className="hamburger" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <input type="checkbox"/>
                    <svg viewBox="0 0 32 32">
                        <path style={{stroke:color ? color : "rgb(20, 223, 166)"}} className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path style={{stroke:color ? color : "rgb(20, 223, 166)"}} className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
                <a style={{border:`solid 1px  ${color ? color : "rgb(20, 223, 166)"}`, borderRadius: typeof radius === "number" ? radius : "4px"}} className='searchButton' data-bs-toggle="modal" data-bs-target="#myModal" type='button'>
                    <span className='searchsp'>search portfolio...</span>
                    <span className='searchsp2' style={{border:`solid 1px  ${color ? color : "rgb(20, 223, 166)"}`, borderRadius: typeof radius === "number" ? radius : "4px"}}>
                        <div className="loader">
                            <svg style={{stroke:`${color ? color : "rgba(20, 223, 166)"}`}} className='logo' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5936 2.31883C11.483 1.89372 12.517 1.89372 13.4064 2.31883C13.7928 2.50351 14.1468 2.80551 14.6371 3.22367C14.6625 3.24538 14.6884 3.2674 14.7146 3.28973C14.9526 3.49262 15.0276 3.555 15.1035 3.60585C15.2965 3.73519 15.5132 3.82495 15.7411 3.86995C15.8307 3.88764 15.9278 3.89654 16.2396 3.92143C16.2739 3.92417 16.3078 3.92685 16.3411 3.92949C16.9834 3.98046 17.4473 4.01727 17.8511 4.15991C18.7807 4.48822 19.5118 5.21935 19.8401 6.14885C19.9827 6.55267 20.0195 7.01656 20.0705 7.6589C20.0732 7.69224 20.0758 7.72607 20.0786 7.76039C20.1035 8.0722 20.1124 8.16933 20.1301 8.25894C20.175 8.48684 20.2648 8.70355 20.3941 8.89652C20.445 8.97239 20.5074 9.04737 20.7103 9.28545C20.7326 9.31166 20.7546 9.33748 20.7763 9.36293C21.1945 9.85316 21.4965 10.2072 21.6812 10.5936C22.1063 11.483 22.1063 12.517 21.6812 13.4064C21.4965 13.7928 21.1945 14.1468 20.7763 14.6371C20.7546 14.6625 20.7326 14.6883 20.7103 14.7146C20.5074 14.9526 20.445 15.0276 20.3941 15.1035C20.2648 15.2965 20.175 15.5132 20.1301 15.7411C20.1124 15.8307 20.1035 15.9278 20.0786 16.2396C20.0758 16.2739 20.0732 16.3078 20.0705 16.3411C20.0195 16.9834 19.9827 17.4473 19.8401 17.8511C19.5118 18.7807 18.7807 19.5118 17.8511 19.8401C17.4473 19.9827 16.9834 20.0195 16.3411 20.0705C16.3078 20.0732 16.2739 20.0758 16.2396 20.0786C15.9278 20.1035 15.8307 20.1124 15.7411 20.1301C15.5132 20.175 15.2965 20.2648 15.1035 20.3941C15.0276 20.445 14.9526 20.5074 14.7146 20.7103C14.6883 20.7326 14.6625 20.7546 14.6371 20.7763C14.1468 21.1945 13.7928 21.4965 13.4064 21.6812C12.517 22.1063 11.483 22.1063 10.5936 21.6812C10.2072 21.4965 9.85315 21.1945 9.3629 20.7763C9.33746 20.7546 9.31165 20.7326 9.28545 20.7103C9.04736 20.5074 8.97239 20.445 8.89652 20.3941C8.70355 20.2648 8.48684 20.175 8.25894 20.1301C8.16933 20.1124 8.0722 20.1035 7.76039 20.0786C7.72607 20.0758 7.69225 20.0732 7.6589 20.0705C7.01656 20.0195 6.55267 19.9827 6.14885 19.8401C5.21935 19.5118 4.48822 18.7807 4.15991 17.8511C4.01727 17.4473 3.98046 16.9834 3.92949 16.3411C3.92685 16.3078 3.92417 16.2739 3.92143 16.2396C3.89654 15.9278 3.88764 15.8307 3.86995 15.7411C3.82495 15.5132 3.73519 15.2965 3.60585 15.1035C3.555 15.0276 3.49262 14.9526 3.28973 14.7146C3.2674 14.6884 3.24538 14.6625 3.22368 14.6371C2.80551 14.1469 2.50351 13.7928 2.31883 13.4064C1.89372 12.517 1.89372 11.483 2.31883 10.5936C2.50351 10.2072 2.80551 9.85315 3.22367 9.36291C3.24537 9.33747 3.26739 9.31165 3.28973 9.28545C3.49262 9.04736 3.555 8.97239 3.60585 8.89652C3.73519 8.70355 3.82495 8.48684 3.86995 8.25894C3.88764 8.16933 3.89654 8.0722 3.92143 7.76039C3.92417 7.72607 3.92685 7.69225 3.92949 7.6589C3.98046 7.01657 4.01727 6.55267 4.15991 6.14885C4.48822 5.21935 5.21935 4.48822 6.14885 4.15991C6.55267 4.01727 7.01657 3.98046 7.6589 3.92949C7.69225 3.92685 7.72607 3.92417 7.76039 3.92143C8.0722 3.89654 8.16933 3.88764 8.25894 3.86995C8.48684 3.82495 8.70355 3.73519 8.89652 3.60585C8.97239 3.555 9.04736 3.49262 9.28545 3.28973C9.31165 3.26739 9.33746 3.24538 9.36291 3.22367C9.85315 2.80551 10.2072 2.50351 10.5936 2.31883ZM12.7573 3.6769C12.2784 3.44799 11.7216 3.44799 11.2427 3.6769C11.0576 3.76539 10.8624 3.92352 10.2618 4.43537C10.2519 4.44378 10.2422 4.45207 10.2326 4.46026C10.0354 4.6283 9.89156 4.75097 9.73456 4.8562C9.37619 5.09639 8.97373 5.2631 8.55048 5.34666C8.36505 5.38327 8.17657 5.39827 7.91837 5.41883C7.90579 5.41983 7.89304 5.42084 7.88012 5.42187C7.09348 5.48465 6.84366 5.51084 6.65016 5.57919C6.14966 5.75597 5.75597 6.14966 5.57919 6.65016C5.51084 6.84366 5.48465 7.09348 5.42187 7.88012C5.42084 7.89304 5.41983 7.90579 5.41883 7.91837C5.39827 8.17657 5.38327 8.36505 5.34666 8.55048C5.2631 8.97373 5.09639 9.37619 4.8562 9.73456C4.75097 9.89156 4.6283 10.0354 4.46025 10.2326C4.45207 10.2422 4.44377 10.2519 4.43537 10.2618C3.92352 10.8624 3.76539 11.0576 3.6769 11.2427C3.44799 11.7216 3.44799 12.2784 3.6769 12.7573C3.76539 12.9424 3.92352 13.1376 4.43537 13.7382C4.44378 13.7481 4.45207 13.7578 4.46026 13.7674C4.6283 13.9646 4.75097 14.1084 4.8562 14.2654C5.09639 14.6238 5.2631 15.0263 5.34666 15.4495C5.38327 15.6349 5.39827 15.8234 5.41883 16.0816C5.41983 16.0942 5.42084 16.107 5.42187 16.1199C5.48465 16.9065 5.51084 17.1563 5.57919 17.3498C5.75597 17.8503 6.14966 18.244 6.65016 18.4208C6.84366 18.4892 7.09348 18.5154 7.88012 18.5781L7.91836 18.5812C8.17658 18.6017 8.36506 18.6167 8.55048 18.6533C8.97373 18.7369 9.37619 18.9036 9.73456 19.1438C9.89156 19.249 10.0354 19.3717 10.2326 19.5397L10.2618 19.5646C10.8624 20.0765 11.0576 20.2346 11.2427 20.3231C11.7216 20.552 12.2784 20.552 12.7573 20.3231C12.9424 20.2346 13.1376 20.0765 13.7382 19.5646L13.7675 19.5397C13.9646 19.3717 14.1084 19.249 14.2654 19.1438C14.6238 18.9036 15.0263 18.7369 15.4495 18.6533C15.6349 18.6167 15.8234 18.6017 16.0816 18.5812L16.1199 18.5781C16.9065 18.5154 17.1563 18.4892 17.3498 18.4208C17.8503 18.244 18.244 17.8503 18.4208 17.3498C18.4892 17.1563 18.5154 16.9065 18.5781 16.1199L18.5812 16.0816C18.6017 15.8234 18.6167 15.6349 18.6533 15.4495C18.7369 15.0263 18.9036 14.6238 19.1438 14.2654C19.249 14.1084 19.3717 13.9646 19.5397 13.7675L19.5646 13.7382C20.0765 13.1376 20.2346 12.9424 20.3231 12.7573C20.552 12.2784 20.552 11.7216 20.3231 11.2427C20.2346 11.0576 20.0765 10.8624 19.5646 10.2618L19.5397 10.2325C19.3717 10.0354 19.249 9.89155 19.1438 9.73456C18.9036 9.37619 18.7369 8.97373 18.6533 8.55048C18.6167 8.36505 18.6017 8.17658 18.5812 7.91836L18.5781 7.88012C18.5154 7.09348 18.4892 6.84366 18.4208 6.65016C18.244 6.14966 17.8503 5.75597 17.3498 5.57919C17.1563 5.51084 16.9065 5.48465 16.1199 5.42187C16.107 5.42084 16.0942 5.41983 16.0816 5.41883C15.8234 5.39827 15.6349 5.38327 15.4495 5.34666C15.0263 5.2631 14.6238 5.09639 14.2654 4.8562C14.1084 4.75097 13.9646 4.6283 13.7674 4.46025C13.7578 4.45207 13.7481 4.44377 13.7382 4.43537C13.1376 3.92352 12.9424 3.76539 12.7573 3.6769ZM16.0443 8.95913C16.3383 9.25304 16.3383 9.72957 16.0443 10.0235L11.027 15.0409C10.733 15.3348 10.2565 15.3348 9.96261 15.0409L7.95565 13.0339C7.66174 12.74 7.66174 12.2635 7.95565 11.9696C8.24957 11.6757 8.72609 11.6757 9.02 11.9696L10.4948 13.4443L14.98 8.95913C15.2739 8.66522 15.7504 8.66522 16.0443 8.95913Z" />
                            </svg>
                        </div>
                        <span className='spanfortext' style={{color:`${color ? color : "rgb(20, 223, 166)"}`}}>A</span>
                    </span>
                </a>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{backgroundColor:"rgb(236, 236, 244)"}}>
                        <div className="modal-header">
                            <h4 className="modal-title" style={{display:"flex", alignItems:"center"}}>
                                <img style={{width:"15px"}} src={search}/>
                                <input style={{backgroundColor:"rgb(236, 236, 244)"}} value={input} onChange={(e)=>setInput(e.target.value)} className='modalInp' placeholder='Type anything...'/>
                            </h4>
                            <button type="button" className='modalClsBtn' data-bs-dismiss="modal"><img src={closer}/></button>
                        </div>
                        <div className="modal-body">
                            <p style={{fontFamily: "'Lato', sans-serif", color:"grey"}} className='pb-2'>Links</p>
                            <div className="list-group list-group-flush">
                                {new String("homegithublinkedintwitterxthreads").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/home")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/home" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span>Home</span>
                                </a>}
                                {new String("aboutinfoservicesreviewprofile").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/about")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/about" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span>About</span>
                                </a>}
                                {new String("resumeexperiencesskills").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/resume")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/resume" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span>Resume</span>
                                </a>}
                                {new String("worksexperiencesprojectsportfolio").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/work")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/work" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span className=''>Works</span>
                                </a>}
                                {new String("blognewsupdate").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/blog")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/blog" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span>Blog</span>
                                </a>}
                                {new String("contactmaillocationfeedback").includes(input.toLowerCase()) &&
                                <a onClick={()=>routesetter("/contact")} style={{backgroundColor:"rgb(236, 236, 244)"}} href="/contact" className="open-file d-flex px-0 list-group-item list-group-item-action">
                                    <span className="file-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 71 67">
                                            <path
                                                strokeWidth="5"
                                                stroke="black"
                                                d="M41.7322 11.7678L42.4645 12.5H43.5H68.5V64.5H2.5V2.5H32.4645L41.7322 11.7678Z"
                                            ></path>
                                        </svg>
                                        <span className="file-front"></span>
                                    </span>
                                    <span>Contact</span>
                                </a>}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown ">
                    <a className="palette-button" type="button"  data-bs-toggle="dropdown">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 47 47"
                            className="palette"
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
                    <div style={{marginLeft:"-70vw"}} className="dropdown-menu dropDownBg p-3 ">
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
                <a className="navbar-brand" data-bs-toggle="modal" data-bs-target="#myModal2" type='button'>
                    <img className='navDp' src={dp} style={{border:`solid 1px  ${color ? color : "rgb(20, 223, 166)"}`}}/>
                </a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/home")} className="nav-link" href="/home">
                                {/* <img className='imagesInDrop' src={home}/> */}
                                <svg className='imagesInDrop'  viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.867 15.8321L18.873 10.0391L14.75 5.92908C13.5057 4.69031 11.4942 4.69031 10.25 5.92908L6.13599 10.0291V15.8291C6.1393 17.5833 7.56377 19.0028 9.31799 19.0001H15.685C17.438 19.0029 18.862 17.5851 18.867 15.8321Z" stroke={color ? color : "rgba(20, 223, 166)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 11.365C13.9846 12.1896 13.3064 12.8471 12.4817 12.8369C11.657 12.8267 10.9952 12.1526 11.0003 11.3279C11.0053 10.5031 11.6752 9.83718 12.5 9.83704C12.9015 9.84073 13.2852 10.0038 13.5665 10.2904C13.8478 10.5769 14.0037 10.9635 14 11.365V11.365Z" stroke={color ? color : "rgba(20, 223, 166)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.63 5.76314C19.6306 5.34892 19.2953 5.01267 18.8811 5.01209C18.4668 5.0115 18.1306 5.34682 18.13 5.76103L19.63 5.76314ZM18.874 10.0391L18.124 10.038C18.1237 10.2377 18.2031 10.4293 18.3445 10.5702L18.874 10.0391ZM19.9705 12.1912C20.2638 12.4837 20.7387 12.4829 21.0311 12.1896C21.3236 11.8963 21.3229 11.4214 21.0295 11.1289L19.9705 12.1912ZM6.66552 10.5602C6.95886 10.2678 6.95959 9.79291 6.66714 9.49957C6.3747 9.20623 5.89982 9.2055 5.60648 9.49794L6.66552 10.5602ZM3.97048 11.1289C3.67714 11.4214 3.67641 11.8963 3.96886 12.1896C4.2613 12.4829 4.73618 12.4837 5.02952 12.1912L3.97048 11.1289ZM10.5 15.1971C10.0858 15.1971 9.75 15.5329 9.75 15.9471C9.75 16.3613 10.0858 16.6971 10.5 16.6971V15.1971ZM14.5 16.6971C14.9142 16.6971 15.25 16.3613 15.25 15.9471C15.25 15.5329 14.9142 15.1971 14.5 15.1971V16.6971ZM18.13 5.76103L18.124 10.038L19.624 10.0401L19.63 5.76314L18.13 5.76103ZM18.3445 10.5702L19.9705 12.1912L21.0295 11.1289L19.4035 9.50794L18.3445 10.5702ZM5.60648 9.49794L3.97048 11.1289L5.02952 12.1912L6.66552 10.5602L5.60648 9.49794ZM10.5 16.6971H14.5V15.1971H10.5V16.6971Z" fill={color ? color : "rgba(20, 223, 166)"}/>
                                </svg>
                                <span className='dropdownSpan'>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/about")} className="nav-link" href="/about">
                                {/* <img className='imagesInDrop' src={about}/> */}
                                <svg className='imagesInDrop' fill={color ? color : "rgba(20, 223, 166)"} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z"></path></g></svg>
                                <span className='dropdownSpan'>About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/resume")} className="nav-link" href="/resume">
                                {/* <img className='imagesInDrop' src={resume}/> */}
                                <svg className='imagesInDrop' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill={color ? color : "rgba(20, 223, 166)"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill={color ? color : "rgba(20, 223, 166)"} d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"></path></g></svg>
                                <span className='dropdownSpan'>Resume</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/work")} className="nav-link" href="/work">
                                {/* <img className='imagesInDrop' src={works}/> */}
                                <svg className='imagesInDrop' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color ? color : "rgba(20, 223, 166)"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m26.5 36-13.1-.81a4 4 0 0 1-3.76-3.58L8.47 20.42a4 4 0 0 1 4-4.42h39.09a4 4 0 0 1 4 4.42l-1.2 11.19a4 4 0 0 1-3.76 3.58L37.5 36"></path><path d="M52 34.92V48a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V34.85"></path><path d="M27 16v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><rect x="26.5" y="33.25" width="11" height="5.5" rx="2.75"></rect></g></svg>
                                <span className='dropdownSpan'>Works</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/blog")} className="nav-link" href="/blog">
                                {/* <img className='imagesInDrop' src={blog}/> */}
                                <svg className='imagesInDrop' viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="newsIconTitle" stroke={color ? color : "rgba(20, 223, 166)"} strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color={color ? color : "rgba(20, 223, 166)"}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="newsIconTitle">News</title> <path d="M22 5L22 17C22 18.3333333 21.3333333 19 20 19 18.6666667 19 18 18.3333333 18 17L18 5 2 5 2 16C2 18 3 19 5 19 7 19 12 19 20 19M6 14L7 14M11 14L14 14M6 10L14 10"></path> </g></svg>
                                <span className='dropdownSpan'>Blog</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a onClick={()=>routesetter("/contact")} className="nav-link" href="/contact">
                                {/* <img className='imagesInDrop' src={contact}/> */}
                                <svg className='imagesInDrop' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7.00012V12.0001M12 12.0001L14 10.0001M12 12.0001L10 10.0001M3.02832 10.0001L10.2246 14.8167C10.8661 15.2444 11.1869 15.4582 11.5336 15.5413C11.8399 15.6147 12.1593 15.6147 12.4657 15.5413C12.8124 15.4582 13.1332 15.2444 13.7747 14.8167L20.971 10.0001M10.2981 4.06892L4.49814 7.71139C3.95121 8.05487 3.67775 8.2266 3.4794 8.45876C3.30385 8.66424 3.17176 8.90317 3.09111 9.16112C3 9.45256 3 9.77548 3 10.4213V16.8001C3 17.9202 3 18.4803 3.21799 18.9081C3.40973 19.2844 3.71569 19.5904 4.09202 19.7821C4.51984 20.0001 5.0799 20.0001 6.2 20.0001H17.8C18.9201 20.0001 19.4802 20.0001 19.908 19.7821C20.2843 19.5904 20.5903 19.2844 20.782 18.9081C21 18.4803 21 17.9202 21 16.8001V10.4213C21 9.77548 21 9.45256 20.9089 9.16112C20.8282 8.90317 20.6962 8.66424 20.5206 8.45876C20.3223 8.2266 20.0488 8.05487 19.5019 7.71139L13.7019 4.06891C13.0846 3.68129 12.776 3.48747 12.4449 3.41192C12.152 3.34512 11.848 3.34512 11.5551 3.41192C11.224 3.48747 10.9154 3.68129 10.2981 4.06892Z" stroke={color ? color : "rgba(20, 223, 166)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <span className='dropdownSpan'>Contact Me</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="modal fade mtmymodal2" id="myModal2">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor:"rgb(236, 236, 244)"}}>
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

export default Nav