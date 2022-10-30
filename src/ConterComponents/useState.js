import React, {useState} from "react";
import "./style.css";


const UseState = () => {
  
  const [mydata , setMydata]= useState(15)

  return (
    <>
      <div className="center_div">
        <p>{mydata}</p>
        <div class="button2" onClick={()=>setMydata(mydata+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={()=>(mydata>0 ? setMydata(mydata-1):setMydata(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
