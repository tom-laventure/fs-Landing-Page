import React, { useContext, useState, useEffect } from "react";

function Schedule(props){
  return (
    <svg className="schedule" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
      <path className="a" d="M0,0H35V35H0Z"/>
      <path className="b" d="M27.382,5H25.858V2H22.81V5H10.619V2H7.572V5H6.048a3.008,3.008,0,0,0-3.033,3L3,28.958a3.021,3.021,0,0,0,3.048,3H27.382a3.031,3.031,0,0,0,3.048-3V7.991A3.031,3.031,0,0,0,27.382,5Zm0,23.962H6.048V13.981H27.382Zm0-17.972H6.048v-3H27.382ZM16.715,18.474h7.619v7.488H16.715Z" transform="translate(0.785 0.523)"/>
    </svg>
  )
}
export default Schedule;
