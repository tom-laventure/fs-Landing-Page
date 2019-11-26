import React from 'react'
import CTA from './CTA';
import bootstrap from 'react-bootstrap'
import '../assets/styles/navbar.css';
import Logo from '../assets/imgs/flyer-story-logo.svg'
import { tsPropertySignature } from '@babel/types';

const navbar = (props) => {
    return(
        <div className="navbar-wrapper secondary">
        <div className="nav-container">
          <div className="nav-row main">
            <div className="item d-flex justify-content-center justify-content-sm-start px-5">
              <img src={Logo}/>
            </div>
            <div className="item d-none d-sm-flex justify-content-end px-5 ">
              <div className="ctabtn ">
                <CTA
                  text="REQUEST A DEMO"
                  onClick={props.btnClick}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default navbar