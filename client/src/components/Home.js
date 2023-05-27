import React from "react";

import { createRoutesFromChildren, Link,Outlet } from "react-router-dom";
export default function Home() {
    return (
      <>
      <div>
        <h1></h1>
        <img align='right'src={require('./Image/Image2.jpg')}  height={300} width={300}/>
        
        <img align='left'src={require('./Image/Image3.jpg')}  height={300} width={300}/>
       
        <img align='middle'src={require('./Image/Image4.jpg')}  height={300} width={300}/>
        <br>
        </br>
        <br>
        </br>
        <img align='left'src={require('./Image/Image1.jpg')}  height={300} width={300}/>

        <img align='middle'src={require('./Image/Image6.jpg')}  height={300} width={300}/>

        <img align='right'src={require('./Image/Image7.jpg')}  height={300} width={300}/>
        
      </div>
     
      <Outlet></Outlet>
      </>
    )
  }
  
  