import React, { useEffect, useState } from 'react'
import "../Styles/Services.css"
import "../Styles/Aboutme.css"
import front from "../Assets/Images/front.svg"
import back from "../Assets/Images/back.svg"
import full from "../Assets/Images/full.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Myservices = (props) => {
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
        <div className='container-fluid p-0 aboutme borderless'>
            <div className='about'><p>SERVICES</p></div>
            <div className='container-fluid above'>
                <p className='am'>MY SERVICES</p>
                <div className='anime' style={{backgroundColor:`${prop2.length > 0 ? prop2 : hcolor2 ? hcolor2 : "rgba(20, 223, 166, 0.171)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "10px"}}>
                    <div className='move' style={{backgroundColor:`${prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}`, borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "50%"}}></div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className='col-xl-4 fed p-3' data-aos="fade-up" data-aos-duration="1000">
                        <div className='fedd' style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "20px"}}>
                            <div className='d-flex justify-content-between'>
                                <div className='log'>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.1809 4.2755C14.581 4.3827 14.8185 4.79396 14.7113 5.19406L10.7377 20.0238C10.6304 20.4239 10.2192 20.6613 9.81909 20.5541C9.41899 20.4469 9.18156 20.0356 9.28876 19.6355L13.2624 4.80583C13.3696 4.40573 13.7808 4.16829 14.1809 4.2755Z" fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}></path> <path d="M16.4425 7.32781C16.7196 7.01993 17.1938 6.99497 17.5017 7.27206L19.2392 8.8358C19.9756 9.49847 20.5864 10.0482 21.0058 10.5467C21.4468 11.071 21.7603 11.6342 21.7603 12.3295C21.7603 13.0248 21.4468 13.5881 21.0058 14.1123C20.5864 14.6109 19.9756 15.1606 19.2392 15.8233L17.5017 17.387C17.1938 17.6641 16.7196 17.6391 16.4425 17.3313C16.1654 17.0234 16.1904 16.5492 16.4983 16.2721L18.1947 14.7452C18.9826 14.0362 19.5138 13.5558 19.8579 13.1467C20.1882 12.7541 20.2603 12.525 20.2603 12.3295C20.2603 12.1341 20.1882 11.9049 19.8579 11.5123C19.5138 11.1033 18.9826 10.6229 18.1947 9.91383L16.4983 8.387C16.1904 8.10991 16.1654 7.63569 16.4425 7.32781Z" fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}></path> <path d="M7.50178 8.387C7.80966 8.10991 7.83462 7.63569 7.55752 7.32781C7.28043 7.01993 6.80621 6.99497 6.49833 7.27206L4.76084 8.8358C4.0245 9.49847 3.41369 10.0482 2.99428 10.5467C2.55325 11.071 2.23975 11.6342 2.23975 12.3295C2.23975 13.0248 2.55325 13.5881 2.99428 14.1123C3.41369 14.6109 4.02449 15.1606 4.76082 15.8232L6.49833 17.387C6.80621 17.6641 7.28043 17.6391 7.55752 17.3313C7.83462 17.0234 7.80966 16.5492 7.50178 16.2721L5.80531 14.7452C5.01743 14.0362 4.48623 13.5558 4.14213 13.1467C3.81188 12.7541 3.73975 12.525 3.73975 12.3295C3.73975 12.1341 3.81188 11.9049 4.14213 11.5123C4.48623 11.1033 5.01743 10.6229 5.80531 9.91383L7.50178 8.387Z" fill={prop1.length > 0 ? prop1 : hcolor? hcolor : "rgb(20, 223, 166)"}></path> </g></svg>
                                </div>
                                <p className='logp'>01</p>
                            </div>
                            <p className='text-white fdev'>Web & Mobile Apps Development</p>
                            <p className='lip'>As an experienced web and mobile app developer, I specialize in creating bespoke digital solutions that prioritize seamless functionality and user experience. My expertise spans both front-end and back-end technologies, guaranteeing tailored and innovative applications for every client.</p>
                        </div>
                    </div>
                    <div className='col-xl-4 fed p-3' data-aos="fade-up" data-aos-duration="1500">
                        <div className='fedd' style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "20px"}}>
                            <div className='d-flex justify-content-between'>
                                <div className='log'>
                                {/* <svg fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 10.826v2.349c-1.562 0-3 1.312-3 2.857 0 2.181 1.281 5.968-6 5.968v-2.002c4.917 0 3.966-1.6 3.966-3.967 0-2.094 1.211-3.5 2.278-4.031-1.067-.531-2.278-1.438-2.278-3.312 0-2.372.94-4.692-3.966-4.686v-2.002c7.285 0 6 4.506 6 6.688 0 1.544 1.438 2.138 3 2.138zm-19-2.138c0-2.182-1.285-6.688 6-6.688v2.002c-4.906-.007-3.966 2.313-3.966 4.686 0 1.875-1.211 2.781-2.278 3.312 1.067.531 2.278 1.938 2.278 4.031 0 2.367-.951 3.967 3.966 3.967v2.002c-7.281 0-6-3.787-6-5.969 0-1.545-1.438-2.857-3-2.857v-2.349c1.562.001 3-.593 3-2.137z"/></svg> */}
                                <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>maintenance-info</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} transform="translate(42.666667, 58.666667)"> <path d="M117.333333,48 C182.134744,48 234.666667,100.531923 234.666667,165.333333 C234.666667,177.516512 232.809822,189.266001 229.363697,200.314237 L346.710217,317.661885 C367.98629,338.937958 367.98629,373.433288 346.710217,394.709361 C325.434144,415.985434 290.938814,415.985434 269.662741,394.709361 L152.315234,277.363386 C141.266709,280.80971 129.516879,282.666667 117.333333,282.666667 C52.5319227,282.666667 7.10542736e-15,230.134744 7.10542736e-15,165.333333 C7.10542736e-15,152.827953 1.95635722,140.779505 5.57971243,129.477348 L61.0818825,184.888889 L111.319797,168.156815 C112.394454,166.856793 113.540203,165.595781 114.757044,164.37894 L116.379797,162.756188 C117.593198,161.542787 118.85052,160.400077 120.146646,159.328057 L136.888889,109.149054 L81.3212183,53.6298873 C92.6685218,49.9744211 104.770352,48 117.333333,48 Z M384,90.6666667 L384,218.666667 L341.333333,218.666667 L341.333333,90.6666667 L384,90.6666667 Z M362.666667,1.42108547e-14 C377.39426,1.42108547e-14 389.333333,11.9390733 389.333333,26.6666667 C389.333333,41.39426 377.39426,53.3333333 362.666667,53.3333333 C347.939073,53.3333333 336,41.39426 336,26.6666667 C336,11.9390733 347.939073,1.42108547e-14 362.666667,1.42108547e-14 Z"> </path> </g> </g> </g></svg>                                </div>
                                <p className='logp'>02</p>
                            </div>
                            <p className='text-white fdev'>Maintenance and Support</p>
                            <p className='lip'>I specialize in comprehensive maintenance and support services for digital products. From addressing bugs and implementing updates to ensuring top-notch user support, I ensure the continual smooth operation and enhancement of software systems.</p>
                        </div>
                    </div>
                    <div className='col-xl-4 fed p-3' data-aos="fade-up" data-aos-duration="2000">
                        <div className='fedd' style={{borderRadius: typeof prop3 === "number" ? prop3 + "px" : typeof hrad === "number" ? hrad + "px" : "20px"}}>
                            <div className='d-flex justify-content-between'>
                                <div className='log'>
                                <svg fill={prop1.length > 0 ? prop1 : hcolor ? hcolor : "rgb(20, 223, 166)"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.229 16.77c0 .679-.549 1.23-1.229 1.23-.678 0-1.229-.551-1.229-1.23 0-.678.551-1.229 1.229-1.229.68 0 1.229.551 1.229 1.229zm1.369-9.831c-.598-.605-1.489-.939-2.507-.939-2.144 0-3.53 1.524-3.53 3.884h1.977c0-1.461.815-1.979 1.513-1.979.623 0 1.284.414 1.34 1.206.062.833-.382 1.255-.945 1.791-1.389 1.32-1.415 1.96-1.407 3.41h1.971c-.012-.653.03-1.183.918-2.142.666-.718 1.494-1.611 1.511-2.972.01-.909-.28-1.691-.841-2.259zm-7.598 7.351l-4.64-2.29 4.64-2.295v-2.225l-7 3.455v2.131l7 3.454v-2.23zm10-6.81v2.224l4.64 2.296-4.64 2.29v2.23l7-3.454v-2.131l-7-3.455z"/></svg>
                                </div>
                                <p className='logp'>03</p>
                            </div>
                            <p className='text-white fdev'>Tutoring and Mentoring</p>
                            <p className='lip'>As a dedicated web and mobile development tutor and mentor, I offer personalized guidance to individuals seeking to master the intricacies of web development. My approach combines hands-on coaching, tailored lesson plans, and real-world projects to empower learners with practical skills.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Myservices