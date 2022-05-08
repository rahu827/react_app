import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-lg-6'>
                <h2>Contact <span className='span'>Us</span></h2>
                    <div className='col_contact_custom'>
                        <h3>Address</h3>
                        <p><i class="fa-solid fa-location-pin"></i>Office:kurukshetra, sector-7, haryana plot No: 30938</p>
                        <h3>Mobile No:</h3>
                        <p>+9198212487676</p>
                        <h3>Email Address </h3>
                        <p>info@webdesign.com</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='form_custom'>
                    <h2> get in <span>Touch</span></h2>
                        <form action='' method='post'>
                            <div className='mb-4'>
                                <input type={'text'} className="form-control" placeholder='Name' required />
                            </div>
                            <div className='mb-4'>
                                <input type={'email'} className="form-control" placeholder='Email Address' required />
                            </div>
                            <div className='mb-4'>
                                <input type={'Digit'} className="form-control" placeholder='Mobile No:' required />
                            </div>
                            <center> <button type='sumbit' className='btn_custom'>Send</button></center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact