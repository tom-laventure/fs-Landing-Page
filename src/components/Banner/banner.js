import React from 'react'
import '../../assets/styles/global.css'
import classes from './banner.module.css'
import Hero from '../../assets/imgs/hero-illustration.png'
import Feature from '../../assets/imgs/feature-illustration.png'
import Audience from '../../assets/imgs/illustration-audience.svg'
import Form from '../../assets/imgs/illustration-form.svg'
import Squares from '../../assets/imgs/squares.svg'
import Circles from '../../assets/imgs/circles.svg'
import TheForm from '../Form/form'

const Banner = (props) => {
    let theSrc;
    let theClass = '';

    switch(props.version){
        case "Hero":
            theSrc = Hero;
            theClass = classes.Hero
            break;
        case "Feature":
            theSrc = Feature;
            theClass = classes.Feature
            break;
        case "Audience":
            theSrc = Audience
            theClass = classes.Stats
            break;
        case "Form":
            theSrc = Form;
            theClass = classes.Form
            break;
        case "Circles":
            theSrc = Circles;
            theClass = classes.Circles
            break;
        case "Squares":
            theSrc = Squares;
            theClass = classes.Squares
            break;
    }

    return (
        <div className={`${classes.banner} ${props.desktopOnly? 'd-none d-md-flex': ''} ${theClass}`}>
            <img src={theSrc} width={props.width} />
        </div>
    )
}

export default Banner