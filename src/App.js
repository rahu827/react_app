/*eslint-disable */
import React from 'react';
import './App.css'
import Blog from './Components/BLog/Blog';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experiences/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/servic/Services';
import Testimonial from './Components/Testimonials/Testimonial';
import Work from './Components/Work/Work';
 import { themeContext } from './Context';
 import { useContext } from 'react';
function App() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={
        {
          background : darkMode?  'black' : '',
          color :  darkMode? 'white' : '',
        }
      }
    >
    <Navbar/>
    <Intro/>
    <Services />
    <Experience/>
    <Work/>
    <Blog/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
