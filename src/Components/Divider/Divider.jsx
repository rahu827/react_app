import React from 'react'
import './Divider.css'
function Divider(props) {
    return (
        <div className='divider_custom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 bg'>
                    <div className='contact_csutm'>
                    <img src={props.img} alt='contact'/>
                        <h2>{props.name}</h2>
                        <p>{props.tel}</p>
                        <p>{props.email}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Divider