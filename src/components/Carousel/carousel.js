import React, { useEffect, useState } from 'react';
import MediaImage from '../MediaImage/mediaImage';
import LeftArrow from '../../assets/imgs/arrow-left.svg'
import RightArrow from '../../assets/imgs/arrow-right.svg'
import classes from './carousel.module.css';
import { Carousel } from 'react-bootstrap'

const TheCarousel = () => {
    const [gallery, setGallery] = useState([]);
    const [index, setIndex] = useState(0)
    const [carousel, setCarousel] = useState()

    useEffect(() => {
        let theGallery = loadImages();
        setGallery(theGallery);
        console.log("useEffect 1")
    }, []);

    useEffect(() => {
        showCarousel(index);
        console.log("useEffect 2")
    }, [gallery])

    const loadImages = () => {
        let tempGallery = [];
        for (let i = 1; i < 25; i++) {
            if (i != 21 && i != 1) {
                let mediaImage = require("../../assets/imgs/media_brands_logos/media" + i + ".png")
                tempGallery.push(mediaImage)
            }
        }
        return tempGallery
    }

    const getGallery = (theIndex, sliceGap) => {
        let sliceNumbers;
        let data = [...gallery];
        let x;
        let y;
        switch (theIndex) {
            case 0:
                sliceNumbers = [0, sliceGap]
                break;
            case 1:
                y = sliceGap * 2;
                sliceNumbers = [sliceGap, y]
                break;
            case 2:
                x = sliceGap * 2;
                y = sliceGap * 3;
                sliceNumbers = [x, y]
                break;
            case 3:
                x = sliceGap * 3;
                y = sliceGap * 4;
                sliceNumbers = [x, y]
                break;
            case 4:
                x = sliceGap * 4;
                y = sliceGap * 5;
                sliceNumbers = [x, y]
                break;
            case 5:
                x = sliceGap * 5;
                y = sliceGap * 6;
                sliceNumbers = [x, y]
                break;
            case 6:
                x = sliceGap * 6;
                y = sliceGap * 7;
                sliceNumbers = [x, y]
                break;
        }
        let result = data.slice(sliceNumbers[0], sliceNumbers[1]).map(((item, index) => {
            return <MediaImage key={index} image={item} />
        }))
        return result
    }

    const showCarousel = (theIndex, action) => {
        let theGallery;
        let theGap = 4;
        if (!action) {
            theGallery = getGallery(index, theGap)
        }
        else if (action === "right") {
            let newIndex;
            if (theIndex !== 5) {
                newIndex = theIndex + 1;
            }
            else {
                newIndex = 0;
            }
            setIndex(newIndex)
            theGallery = getGallery(index, theGap)
        }
        else if (action === "left") {
            let newIndex;
            if (theIndex !== 0) {
                newIndex = theIndex - 1;
            }
            else {
                newIndex = 5;
            }
            setIndex(newIndex)
            theGallery = getGallery(index, theGap)
        }
        setCarousel(theGallery);
    }

    const generateMobileCarousel = () => {
        let mobileCarouselItems = [];
        let mobileCarousel = [];
        for (let x = 0; x < 6; x++) {
            let temp = getGallery(x, 4);
            mobileCarouselItems.push(temp)
        }

        mobileCarousel = mobileCarouselItems.map((item, index) => {
            return (<Carousel.Item key={index}>
                <div className={classes.mobileCarouselItem}>
                    {item}
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>)
        });
        return mobileCarousel
    }

    return (
        <div className={classes.content}>
            <h3>Our Media Brands</h3>
            <div className={`${classes.carousel} d-none d-sm-flex`}>
                <div className={classes.arrow}>
                    <img src={LeftArrow} onClick={() => showCarousel(index, "left")} />
                </div>
                <div className={classes.media}>
                    {carousel}
                </div>
                <div className={classes.arrow}>
                    <img src={RightArrow} onClick={() => showCarousel(index, "right")} />
                </div>
            </div>
            <div className={`d-flex d-sm-none justify-content-around ${classes.carouselMobileMedia}`}>
                <Carousel interval={null} controls={false}>
                    {generateMobileCarousel()}
                </Carousel>
            </div>

        </div>
    )
}

export default TheCarousel;