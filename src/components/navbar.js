import React from 'react'
import CTA from './CTA';
import bootstrap from 'react-bootstrap'
import '../assets/styles/navbar.css';

const navbar = () => {
    return(
        <div className="navbar-wrapper secondary">
        <div className="nav-container">
          <div className="nav-row main">
            <div className="item">
            </div>
            <div className="item d-none d-sm-flex">
              <div className="ctabtn">
                <CTA
                  text="HELLO"
                  onClick={() => {}}
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