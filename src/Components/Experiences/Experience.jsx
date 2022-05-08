import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className='awesome'>
    <div className='title mt-5'>
      <h2>Why Choose <span>Us</span></h2>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
    <div className='experience'>
        <div className='achivement'>
            <div className='circle' style={{color: darkMode? 'black': ''}}>3+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achivement'>
            <div className='circle' style={{color: darkMode? 'black': ''}}>20+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achivement'>
            <div className='circle' style={{color: darkMode? 'black': ''}}>5+</div>
            <span>years</span>
            <span className='exper'>Experience</span>
        </div>
    </div>
    </div>
  )
}

export default Experience