import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import {ThemeProvider} from "./Context"

ReactDOM.render(
  
 <div>
    <ThemeProvider>
  <App />
  </ThemeProvider>
 </div>,
   document.getElementById("root")
);

