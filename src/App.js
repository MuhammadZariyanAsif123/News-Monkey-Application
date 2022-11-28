import React, { Component } from 'react';
import './style.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component 
{
  render()
  {
   
    return(
      
     <div> 
       <Navbar/>
       <h2 class = "text-center"> News Monkey - Headlines</h2>
       <News/>
     </div>
    )
  }
}
 