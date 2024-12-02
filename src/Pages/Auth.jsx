import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
    const isRegisterForm = register?true:false
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-75 container">
            <Link to={'/'} style={{textDecoration:'none',color:'blue',fontWeight:'bolder'}}>Back to Home</Link>
            <div className="card shadow p-5 bg-primary">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img width={"100%"} className='rounded-start' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?semt=ais_hybrid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className='fw-bolder text-light mt-2'><i className='fa-solid fa-list-check me-2'></i>Project-Fair</h1>
                            <h5 className='text-light fw-bolder text-center'>
                                {
                                    isRegisterForm?'Sign-Up to your Account':'Sign-In to your Account'
                                }
                            </h5>
                            <Form className='text-light w-100'>
                                {
                                    isRegisterForm&&
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInputemail">
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInputpswd">
                                    <Form.Control type="password" placeholder="Enter your password" />
                                </Form.Group>
                                {
                                    isRegisterForm?
                                    <div className='mt-3'>
                                        <button className='btn btn-warning text-light'>Register</button>
                                        <p className='mt-2 fw-bolder'>Already Have An Account? Click Here to <Link to={'/login'} style={{textDecoration:'none',color:'blue'}}>Login</Link></p>
                                    </div>:
                                    <div className='mt-3'>
                                        <button className='btn btn-success text-light'>Login</button>
                                        <p className='mt-2 fw-bolder'>New User? Click here to <Link to={'/register'} style={{textDecoration:'none',color:'red'}}>Register</Link></p>

                                    </div>
                                }
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Auth
