import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow} className='me-2 rounded'>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
                <input type="file" style={{display:'none'}}/>
                <img height={"350px"} width={"100%"} src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg" alt="" />
              </label>
            </div>
            <div className="col-6">
              <Form>
              <div className="mb-2">
                <FloatingLabel controlId="floatingtitle" label="Project-Title">
                  <Form.Control type="text" placeholder="Enter your project title" />
                </FloatingLabel>
              </div>
              <div className="mb-2">
                <FloatingLabel controlId="floatinglanguage" label="Languages-Used">
                  <Form.Control type="text" placeholder="Enter your project language" />
                </FloatingLabel>
              </div>
              <div className="mb-2">
                <FloatingLabel controlId="floatingOverview" label="Project-Overview">
                  <Form.Control type="text" placeholder="Overview" />
                </FloatingLabel>
              </div>
              <div className="mb-2">
                <FloatingLabel controlId="floatinggit" label="Github-Link">
                  <Form.Control type="text" placeholder="Github" />
                </FloatingLabel>
              </div>
              <div className="mb-2">
                <FloatingLabel controlId="floatingweb" label="Website-Link">
                  <Form.Control type="text" placeholder="Website Link" />
                </FloatingLabel>
              </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject
