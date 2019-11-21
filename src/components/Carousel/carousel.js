import React, { useEffect, useState } from 'react';
import MediaImage from '../MediaImage/mediaImage';
import LeftArrow from '../../assets/imgs/arrow-left.svg'
import RightArrow from '../../assets/imgs/arrow-right.svg'
import classes from './carousel.module.css';

const Carousel = () => {
    const [gallery, setGallery] = useState([]);
    const [index, setIndex] = useState(0)
    const [carousel, setCarousel] = useState()

    useEffect(() => {
        let theGallery = loadImages();
        setGallery(theGallery);
    }, []);

    useEffect(() => {
        showCarousel(index);
    }, [gallery, index])

    const loadImages = () => {
        let tempGallery = [];
        for (let i = 1; i < 25; i++) {
            let mediaImage = require("../../assets/imgs/media_brands_logos/media" + i + ".png")
            tempGallery.push(mediaImage)
        }
        return tempGallery
    }

    const getGallery = (index) => {
        let sliceNumbers;
        let data = [...gallery];

        switch (index) {
            case 0:
                sliceNumbers = [0, 5]
                break;
            case 1:
                sliceNumbers = [5, 10]
                break;
            case 2:
                sliceNumbers = [10, 15]
                break;
            case 3:
                sliceNumbers = [15, 20]
                break;
            case 4:
                sliceNumbers = [20, 24]
                break;
        }
        let result = data.slice(sliceNumbers[0], sliceNumbers[1]).map(((item, index) => {
            return <MediaImage key={index} image={item} />
        }))
        return result
    }

    const showCarousel = (theIndex, action) => {
        let theGallery;
        console.log(index)
        if (!action) {
            theGallery = getGallery(index)
        }
        else if (action === "right") {
            let newIndex;
            if(theIndex !== 4){
                newIndex = theIndex + 1;
            }
            else{
                newIndex = 0;
            }
            setIndex(newIndex)
            theGallery = getGallery(index)
        }
        else if (action === "left") {
            let newIndex;
            if(theIndex !== 0){
                newIndex = theIndex - 1;
            }
            else{
                newIndex = 4;
            }
            setIndex(newIndex)
            theGallery = getGallery(index)
        }
        setCarousel(theGallery);
    }


    return (
        <div className={classes.content}>
            <h3>Our Media Brands</h3>
            <div className={classes.carousel}>
                <div className={classes.arrow}>
                    <img src={LeftArrow} onClick={() => showCarousel(index, "left")}/>
                </div>
                <div className={classes.media}>
                    {carousel}
                </div>
                <div className={classes.arrow}>
                    <img src={RightArrow} onClick={() => showCarousel(index, "right")}/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;