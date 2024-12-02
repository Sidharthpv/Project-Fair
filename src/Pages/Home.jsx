import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import titleimage from '../assets/images/dev.gif'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <>
      <div style={{height:'90vh',width:'100%'}} className="container-fluid rounded bg-primary">
        <Row className='align-items-center p-4'>
            <Col sm={12} md={6}>
                <h1 style={{fontSize:'80px'}} className='fw-bolder text-light mt-5'><i className='fa-solid fa-list-check me-2'></i> Project-Fair</h1>
                <p className='text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium quos quae inventore tempore atque consectetur cumque officia 
                    nulla, porro aperiam unde, ipsum, facere accusamus aspernatur adipisci reprehenderit delectus fugit dolor.</p>

                <Link to={'/login'} className='btn btn-warning'> Start to Explore</Link>
            </Col>
            <Col sm={12} md={6}>
                <img src={titleimage} width={"500px"} alt="" />
            </Col>
        </Row>
      </div>

      {/* all projects */}

      <div className="allProject mt-5">
        <h1 className="text-center text-primary fw-bolder">Explore Your Projects</h1>
        <marquee scrollAmount={25}>
        <Row>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
            </Col>
            <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
            </Col>
        </Row>
        </marquee>
        
      </div>
    </>
  )
}

export default Home
