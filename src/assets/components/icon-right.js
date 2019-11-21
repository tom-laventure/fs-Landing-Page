import React, { useContext, useState, useEffect } from "react";

function IconRight(props){
  /*
  <defs>
    <style>.a{fill:#fff;}.b{fill:#e20000;}</style>
  </defs>
  */

  return(
    <button className="reg-btn" onClick={()=>props.onClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
        <g transform="translate(-165 -991)">
          <circle className="a" cx="25" cy="25" r="25" transform="translate(165 991)"/>
          <path className="b" d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z" transform="translate(172.753 997.804)"/>
        </g>
      </svg>
    </button>
  )
}
export default IconRight;
