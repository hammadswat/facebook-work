import React from "react";
import { useState } from "react";
function CustomBtns() {    
  const [likes ,setlikes] = useState(0)

function like(){
  setlikes(likes + 1)
}



  return (
    <div className="btns">
      <button className="likebtn">
        <img style={{ width: "18px" }} src={"https://cdn-icons-png.flaticon.com/128/126/126473.png"}></img>
        <p>{"like"}</p>
      </button>

      <button className="likebtn">
        <img style={{ width: "18px" }} src={"https://cdn-icons-png.flaticon.com/128/3031/3031126.png"}></img>
        <p>{"comment"}</p>
      </button>

      <button className="likebtn">
        <img style={{ width: "18px" }} src={"https://cdn-icons-png.flaticon.com/128/2958/2958783.png"}></img>
        <p>{"share"}</p>
      </button>
      
    </div>
    
  );
}

export default CustomBtns;
