import React, { useContext, useState, useEffect } from "react";
import {Button} from 'react-bootstrap';
import '../assets/styles/btn.css';
import X from '../assets/components/close-x';
/*
* <Btn />
* @properties
* text: text on button
* icon: img on button
* onClick: callabck for the button
* cls: extra classes
* hasLink: boolean indicates if the button is a link
* url: url for hyper link, If the hasLink is true then it has to have something in here.
* variant: variant of button
* disabled: disable state
* Note: cannot place both icon and text at this time
*/

function CTA(props){
  const { text, hasLink, url, icon, width, height, cls } = props;

  const handleClickEvent = () => {
    if(hasLink && url){
      window.open(url, '_blank');
    }
    else if(props.hasOwnProperty('onClick')){
      props.onClick(props);
    }
  }

  return(
    <Button onClick={handleClickEvent} className={`cta ${props.isActive? 'active': ''} ${props.cls}`} variant={props.variant} disabled={props.hasOwnProperty('disabled')? true: false}>
      <div className="text">
        {text}
      </div>
    </Button>
  );
}



export default CTA;
