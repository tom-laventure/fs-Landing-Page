import React, { useContext, useState, useEffect } from "react";

function IconLeft(props){
  return(
    <button className="reg-btn" onClick={()=>props.onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <circle className="a" cx="25" cy="25" r="25"/>
        <path className="b" d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z" transform="translate(4.749 6.806)"/>
      </svg>
    </button>
  )
}
export default IconLeft;
