import React from 'react'
import classes from './footer.module.css'
import Glacier from '../../assets/imgs/media_brands_logos/media23.png'

const Footer = () => {
    return (
        <footer className={`page-footer font-small cyan darken-3 ${classes.main}`}>
            <div className="container">
                <div className={`row ${classes.row}`} >
                    <div className="col-md-6 py-3 d-flex justify-content-center align-items-center">
                        <div className="pr-5">
                            Powered by:
                        </div>
                        <div className=" flex-center">
                            <a href="https://www.glaciermediadigital.ca/">
                            <img src={Glacier} className={classes.img} height="50px" width="150px"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 py-3 py-md-5 d-flex justify-content-center align-items-center">
                        <div className="pr-5">
                            Follow us
                        </div>
                        <div className={`flex-center ${classes.link}`}>
                            <a className="fb-ic" href="https://www.facebook.com/pg/glaciermediadigital/posts/">
                                <i className="fab fa-facebook-f fa-md white-text mr-3 fa-2x"> </i>
                            </a>
                            <a className="tw-ic" href="https://www.instagram.com/glaciermediadigital/">
                                <i className="fab fa-twitter fa-lg white-text mr-3 fa-2x"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.pinterest.ca/glaciermedialmp/">
                                <i className="fab fa-instagram fa-lg white-text mr-3 fa-2x"> </i>
                            </a>
                            <a className="pin-ic" href="https://www.instagram.com/glaciermediadigital/">
                                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer