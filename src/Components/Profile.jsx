import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{marginTop:'50px'}}>
        <div className="card shadow mt-5 p-5 me-2">
          <div className="d-flex justify-content-between">
            <h1>Profile</h1>
            <button className='btn btn-outline-info' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
          </div>
          <Collapse in={open}>
          <div className="row justify-content-center p-5">
            <label>
              <input type="file" style={{display:'none'}}/>
              <img width={"70%"} height={"200px"} className='ms-4' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="profile avatar" />
            </label>
            <div className="mt-5">
              <input type="text" placeholder='Github Link' className='form-control'/><br />
              <input type="text" placeholder='LinkedIn Link' className='form-control'/>
              <div className="d-grid mt-5">
                <button className="btn btn-warning">Update</button>
              </div>
            </div>
          </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Profile
