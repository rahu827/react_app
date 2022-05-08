import React from 'react';
import "./Work.css";

function Work() {
  return (
    <div className='awesome_services'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='custom_col'>
                            <h1>Work for all<br/> <span>these services</span></h1>
                            
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a docu</p>
                            {/* <button>download cv</button> */}
                       <div className='blur'></div>
                       <div className='blur_custom1'></div>
                       <button className='btn_custom'>Hire Me</button>
                        </div>
                    </div>
                    <div className='col-lg-6 realtive'>
                        <div className='main_div'>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                            <div className='l_circle'>
                           <img src='' alt=''/>
                            </div>
                           <div className='backcircle bluecircle'></div>
                           <div className='backcircle yellowcircle'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Work