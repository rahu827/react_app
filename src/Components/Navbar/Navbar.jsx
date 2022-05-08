import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
        <div className='navbar'>
        <div className='n_left'>
            <div className='n_name'>Mr Rahul</div>
            <Toggle/>
        </div>
        <div className='n_right'>
            <div className='n_list'>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Services</li>
                    <li>Project</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <div className='button'>
                   <button typeof='button'> Get In Touch</button>
                </div>
                </ul>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar