/* eslint-disable */
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                    <h2 className='mt'> About Us</h2>
                        {/* <img src='img/logo.png' className='img-fluid' width={180} /> */}
                        <p>In Publishing And Graphic Design, Lorem Ipsum Is A Placeholder Text Commonly Used To Demonstrate The Visual Form Of A Docu if anybody want to desing your website in best way and  professionally. you cantact me </p>
                    </div>
                    <div className='col-lg-4'>
                   <h2 className='mt'> Links</h2>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Porject</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer