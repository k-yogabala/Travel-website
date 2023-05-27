import { useState } from 'react';
import './App.css';

function fun1 () {
  document.getElementById("inner_box").style.boxShadow = "15px 15px 20px white, -15px -15px 20px white, -15px 15px 20px white, 15px -15px 20px white";
  document.getElementById("inner_box").innerHTML = "<center>Change Contet</center>"
}

function fun2 () {
  document.getElementById("inner_box").style.boxShadow = "";
}

function App() {
var a = 5;

const [display, setDisplay] = useState("flex");

function fun3 () {
  if(display == "none") {
    setDisplay("flex")
    document.getElementById("inner_box").style.display = display;
  }
  else {
    setDisplay("none")
    document.getElementById("inner_box").style.display = display;
  }
}

return(
  <div>
    The a value is {a}
    <input type="text" placeholder="initial" onChange={(e)=>{alert(e.currentTarget.type)}}/>
    <div id="outer_box" onClick={fun3} style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor:"green", border:"1px solid red", width:"400px", height: "600px" }}>
      <div id="inner_box" onMouseLeave={fun2} onMouseOver={fun1} style={{ backgroundColor:"yellow", border:"1px solid red", width:"200px", height: "300px" }}>
        This is the content
      </div>
    </div>
  </div>
);
  
}

export default App;
