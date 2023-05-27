import React from "react";

import { createRoutesFromChildren, Link,Outlet } from "react-router-dom";
export default function Products() {
    return (
      <>
      <div>

        <h1> This is About Our Application</h1>
        <img src={require('./Image/Image2.jpg')}  height={700} width={1100}/>
        <p>This website is revealed to provide the best traveling assistance to customers and travel
agencies. We have developed travel and tour management systems to render a found stage
where tourist can find their tour places according to their likes. This system also helps to
promote liable and pleasant tourism so that people can enjoy their vacations at their favorite
places. This way also benefits develop tourism with different cultures so that they enrich the
tourism experience and build variety. We develop this system to create and improve forms of
tourism that provide better cooperation opportunities for tourists and locals and increase a
better opinion of different cultures, customs, lifestyles, traditional knowledge, and beliefs.</p>
      

      </div>
     
      <Outlet></Outlet>
      </>
    )
  }
  
  