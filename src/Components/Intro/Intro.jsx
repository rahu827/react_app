/* eslint-disable */
import React from 'react';
import Divider from '../Divider/Divider';
import './Intro.css';
import { motion } from 'framer-motion';
function Intro() {
  const transition = {duration : 2, type : 'spring'}
  return (
    <div>
      <div className='container'>
        <div className='row row_custm'>
          <div className='col-lg-6'>
            <div className='inner_div'>
              <span>hey! I Am</span><br />
              <span> Rahul Banger</span><br />
              <span>I am front end designer. i knew html, css, jquary, javascript, reactjs. i know all of this language</span><br />
              <button className='btn_custom mt-4'>know More</button>
            </div>
            
            <div className='social_icon'>
              <ul>
                <li>
                  <img src='img\Instagram_icon.png' alt='instagram' />
                  <img src='img\facebook.png' alt='instagram' />
                  <img src='img\github.png' alt='instagram' />
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 relative'> 
          <div className='blur'></div>
          <div className='content'>
            <motion.img
            initial={{right: '10%'}}
            whileInView={{right: '0%'}}
            transition={transition}
             src='https://th.bing.com/th/id/R.72488b0b544217c2d9dbc80551e5e53e?rik=iNQdCQtOas2Itg&riu=http%3a%2f%2ffreepngclipart.com%2fdownload%2femoticon%2f44867-emoticon-smiley-sunglasses-faces-emoji-free-photo-png.png&ehk=xBsMgd9mSfU1HPdTPe9J%2b0%2bCcyUJk9aByCo%2fDSEuVPA%3d&risl=&pid=ImgRaw&r=0' alt='emoji'/>
          </div>
          <center>  <img src='img\img1.png' /></center>
            <div className='blur_1'></div>
          </div>
        </div>
      </div>
      <div className='d-flex'>
        <Divider img="img/contact.png" name="Contact Info" tel="9812468147" email="info@rahulbanger.com" />
        <Divider img="img/contact.png" name="Contact Info" tel="9812468147" email="info@rahulbanger.com" />
        {/* <Divider img="img/contact.png" name="Contact Info" tel="9812468147" email="info@rahulbanger.com" /> */}
      </div>
    </div>
  );
}

export default Intro;