import React from 'react'
import twitter from "../Assets/Images/twitter.svg"
import github from "../Assets/Images/github.svg"
import facebook from "../Assets/Images/mail.svg"
import Linkedin from "../Assets/Images/linkedin.svg"
import "../Styles/Blogf.css"

const Blogfooter = () => {
  return (
    <>
        <div className='bfoot d-flex justify-content-between border-top'>
            <nav className='fnav'>
            <a href='mailto:ayodejiamzat@gmail.com'><button><img src={facebook}/></button></a>
            <a target="_blank" href='https://twitter.com/amzat_abdmalik?s=11&t=5RvOaHdVfPfpYh2LQdQnIw'><button ><img src={twitter}/></button></a>
            <a target="_blank" href="https://github.com/Sowetowp"><button ><img src={github}/></button></a>
            <a target="_blank" href="https://www.linkedin.com/in/amzat-ayodeji-a0647321b/"><button><img src={Linkedin}/></button></a>
            </nav>
            <p>201035</p>
        </div>
    </>
  )
}

export default Blogfooter