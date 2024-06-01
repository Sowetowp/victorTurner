import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import toolhire from "../Assets/Images/toolhire.jpg"
import ecom from "../Assets/Images/ecom.jpg"
import ecom2 from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg"

const All = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const [isOpen2, setIsOpen2] = useState(false);

    const showModal2 = () => {
        setIsOpen2(true);
    };

    const hideModal2 = () => {
        setIsOpen2(false);
    };
    const [isOpen22, setIsOpen22] = useState(false);

    const showModal22 = () => {
        setIsOpen22(true);
    };

    const hideModal22 = () => {
        setIsOpen22(false);
    };

  return (
    <>
        <div className='container-fluid pt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://cosmic-tartufo-8dea38.netlify.app/'><img src={ecom2} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 3</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>A school management system and website</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal22}>DETAILS</button>
                                <a target="_blank" href='https://cosmic-tartufo-8dea38.netlify.app/'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen22} onHide={hideModal22}>
                            <Modal.Header>
                                <Modal.Title>school management system and website</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal22}></button>
                            </Modal.Header>
                            <Modal.Body>
                                Constructed with the robust MERN stack, my School Management System redefines educational administration. Leveraging MongoDB, Express.js, React.js, and Node.js, it seamlessly integrates a dynamic platform. Students access a dedicated portal for result checking and payments, while teachers effortlessly manage results. My comprehensive admin dashboard ensures seamless data oversight and management. The polished website showcases news, images, history, and contacts. Harnessing Cloudinary, I've embraced cutting-edge tools to elevate the educational experience.
                                <br/>
                                Thank you for taking the time to explore this work. Feel free to reach out to me if you have any questions or would like to know more about the development process.
                                <br></br>
                                Best regards,
                                <br/>
                                <span style={{fontWeight:"700"}}>MAL!K</span>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal22} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://swpe.netlify.app/home'><img src={ecom} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 2</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>An Ecommerce website</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal2}>DETAILS</button>
                                <a target="_blank" href='https://swpe.netlify.app/home'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen2} onHide={hideModal2}>
                            <Modal.Header>
                                <Modal.Title>An Ecommerce website</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal2}></button>
                            </Modal.Header>
                            <Modal.Body>
                                I am excited to showcase a recent project in my portfolio - an e-commerce website that I have developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This dynamic and feature-rich e-commerce platform is currently under construction and represents a significant milestone in my journey as a web developer.
                                <br></br>
                                <span style={{fontWeight:"700"}}>Project Details:</span>
                                <br/>
                                - Website Type: E-Commerce
                                <br/>
                                - Technology Stack: MERN (MongoDB, Express.js, React, Node.js)
                                <br/>
                                - Development Status: Under Construction
                                <br></br>
                                <span style={{fontWeight:"700"}}>Key Features (Work in Progress):</span>
                                <br/>
                                - User-friendly product browsing and searching
                                <br/>
                                - Seamless shopping cart and checkout experience
                                <br/>
                                - User authentication and account management
                                <br/>
                                - Interactive product pages with detailed information
                                <br></br>

                                While the website is still undergoing development and refinement, I wanted to share a glimpse of my technical skills and design capabilities through this project. The chosen MERN stack ensures a robust and efficient foundation for the website's functionalities, while my dedication to creating an intuitive user experience is evident in every aspect of the design.

                                Please note that as this project is still in progress, some features and sections may be placeholders or undergoing further enhancement. I am committed to bringing this e-commerce website to completion and delivering a polished and functional platform that users will enjoy using.
                                <br/>
                                Thank you for taking the time to explore this work in progress. Feel free to reach out to me if you have any questions or would like to know more about the development process.
                                <br></br>
                                Best regards,
                                <br/>
                                <span style={{fontWeight:"700"}}>MAL!K</span>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal2} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://toolhire.netlify.app/'><img src={toolhire} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 1</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>A tool hire site</p>
                            <div className='d-flex justify-content-between'>
                                <button type="button" className='workb btn btn-primar' onClick={showModal}>DETAILS</button>
                                <a target="_blank" href='https://toolhire.netlify.app/'><button className='workb btn btn-primar' type='button'>VIEW</button></a>
                            </div>
                        </div>
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Header>
                                <Modal.Title>Tool Hire Site</Modal.Title>
                                <button type="button" className="btn-close" onClick={hideModal}></button>
                            </Modal.Header>
                            <Modal.Body>
                                As part of my journey to becoming a proficient developer, I crafted a Tool Hire platform utilizing the MERN stack along with Redux. This project served as a valuable playground to hone my backend API skills. While it primarily focused on backend functionality, the MERN stack - MongoDB, Express.js, React.js, and Node.js - combined with Redux provided a comprehensive environment for me to deepen my understanding of server-side processes. This hands-on experience significantly contributed to my growth as a developer, laying the foundation for more complex and dynamic projects in the future.
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideModal} type="button" className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default All