import React from 'react'
import { tsPropertySignature } from '@babel/types'
import classes from './mediaImage.module.css'

const MediaImage = (props) => {
    

    return (
        <div className={classes.image}>
            <img  src={props.image} />
        </div>
    )
}

export default MediaImage