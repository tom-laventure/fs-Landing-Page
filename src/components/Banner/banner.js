import React from 'react'
import '../../assets/styles/global.css'
import classes from './banner.module.css'
import Hero from '../../assets/imgs/hero-illustration.png'
import Feature from '../../assets/imgs/feature-illustration.png'
import Audience from '../../assets/imgs/illustration-audience.svg'
import Form from '../../assets/imgs/illustration-form.svg'

const Banner = (props) => {
    let theSrc;

    switch(props.version){
        case "Hero":
            theSrc = Hero;
            break;
        case "Feature":
            theSrc = Feature;
            break;
        case "Audience":
            theSrc = Audience
            break;
        case "Form":
            theSrc = Form;
            break;
    }

    return (
        <div className={`${classes.banner} ${props.version}`}>
            <img src={theSrc} width={props.width}/>
        </div>
    )
}

export default Banner