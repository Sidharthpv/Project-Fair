import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import prjctCard from '../assets/images/project.webp'


function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    

    <>
        <Card style={{ width: '18rem' }} className='shadow rounded mt-5 mb-3'>
        <Card.Img variant="top" src={prjctCard} width={"100%"} onClick={handleShow}/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
           
        </Card.Body>
        </Card>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <img src={prjctCard} width={"100%"} alt="" />
              </Col>
              <Col>
                <h2>Project Title</h2>
                <h5><span className='text-warning'>Languages used</span>:React</h5>
                <p><span className='text-success'>Overview</span>: Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sunt ea blanditiis quis rem harum corporis ratione vel 
                delectus ab, debitis itaque voluptates nisi odit voluptatum cumque quos illo 
                earum nam?</p>
              </Col>
            </Row>
            <div className="mt-2">
              <a href="" target='-blank' className='me-3 btn text-dark'><i class="fa-brands fa-github fa-2x"></i></a>
              <a href="" target='-blank' className='me-3 btn text-dark'><i class="fa-solid fa-link fa-2x"></i></a>
            </div>
          </Modal.Body>
        </Modal>
    </>
  )
}

export default ProjectCard
