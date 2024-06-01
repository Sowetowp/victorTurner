import React from 'react'
import "../Styles/Blogh.css"

const BlogHeader = () => {
  return (
    <>
        <div className='container-fluid bhome'>
            <div className='bblur'></div>
            <nav className="navbar navbar-expand-sm navbar-dark kkk">
                <div className="container-fluid">
                    <a className="navbar-brand bhaa" href="#">SOWETO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav bhul">
                        <li className="nav-item">
                        <a className="nav-link" href="" target=''><i>0.1 </i>HOME</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=""><i>0.2 </i>ABOUT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=""><i>0.3 </i>RESUME</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link" href=""><i>0.4 </i>WORKS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=""><i>0.5 </i>BLOGS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href=""><i>0.6 </i>CONTACT</a>
                        </li>  
                        <li className="nav-item">
                        <a className="nav-link" href="mailto:ayodejiamzat@gmail.com"><button>HIRE ME</button></a>
                        </li>  
                    </ul>
                    </div>
                </div>
            </nav>
            <div className='bhb'>
                <p>Blogs</p>
                <div className='bhbb'>
                    <li><a href=''><i>Home</i></a></li>
                    <li><a href=''><i>Blogs</i></a></li>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogHeader