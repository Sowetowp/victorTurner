import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import toolhire from "../Assets/Images/toolhire.jpg"

const All2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
  return (
    <>
        <div className='container-fluid pt-3'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='fedd'>
                        <a target="_blank" href='https://toolhire.netlify.app/'><img src={toolhire} style={{width:"100%", height:"40vh"}}/></a>
                        <p className='workt mt-3'>PROJECT 1</p>
                        <div>
                            <p className='workbf mb-3 mt-1'>A full-stack tool hire site</p>
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
                                This project involved the design and development of a tool hire booking system that aimed to enable the public to view available tools and prices and for the hiring company to manage tool availability and collect payments. To achieve this objective, a software solution was developed using a combination of React, MongoDB, and Node.js technologies.

                                The tool hire booking system was designed to allow users to view and place orders online through a user-friendly interface created using React. The system also required a back-end server-side programming to manage data storage, retrieval, and processing. To meet this requirement, Node.js was used to create a robust back-end system that could handle the load of user requests.

                                The data management system for the tool hire booking system was developed using MongoDB. The database management system was used to store and retrieve data on available tools, customer details, and payment information. This allowed for easy access to information and efficient processing of data, making the tool hire booking system scalable, efficient, and secure.

                                The tool hire booking system was designed to meet the hiring company's requirements, allowing the company to manage tool availability and collect payments with ease. Admin access was provided for managing user details and tool availability, while customer access was provided for viewing and placing orders. The project aimed to provide a comprehensive solution that met the needs of the hiring company and its customers.
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

export default All2