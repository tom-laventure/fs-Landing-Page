import React, { useContext, useState, useEffect } from "react";
import '../../assets/styles/global.css'
import Navbar from '../../components/navbar';
import Banner from "../../components/Banner/banner";
import CTA from "../../components/CTA";
import classes from './landingPage.module.css';
import Footer from "../../components/Footer/footer";
import TheForm from "../../components/Form/form";
import Carousel from "../../components/Carousel/carousel";

const LandingPage = (props) => {
  const toForm = () => {
    window.location.href = '#form'
    window.scrollBy(0, -60);
  }

  return (
    <div id="d-flex flex-column h-100">
      <Navbar btnClick={() => toForm()}/>
      <div className={classes.main}>
        <div className={classes.banner}>
          <div className={` ${classes.blurb} align-items-xl-center`}>
            <div className="p-2">
              <h1>Bring Your Flyers To Life</h1>
              <p>Flyer Story turns conventional flyers into an engaging digital experience for real customers.</p>
            </div>
            <div className={`${classes.bannerButton} d-none d-md-block mb-4`}>
              <CTA desktopOnly="true" text="REQUEST A DEMO" padding="p-50" onClick={() => toForm()} />
            </div>
          </div>
          <div className="d-none d-md-flex">
            <Banner version="Hero" width="100%" />
          </div>
          <div className="d-block d-md-none my-2">
            <Banner version="Hero" width="100%" />
          </div>
          <div className="d-block d-md-none d-flex justify-content-center my-4 px-5">
            <CTA text="REQUEST A DEMO" block onClick={() => toForm()} />
          </div>
        </div>
        <div className={`d-md-flex d-none justify-content-center ${classes.icon}`}>
        <i className="fas fa-chevron-down fa-3x"> </i>
          </div>
        <div className={`${classes.feature} `}>
          <div className="d-none d-md-block">
            <Banner version="Feature" width="75%" />
          </div>
          <div className={`${classes.blurb} ${classes.mobileFeatureBlurb}`}>
            <div className={`d-flex flex-column align-items-center align-items-md-start align-items-xl-center justify-content-center`}>
              <h2>Key Features</h2>
              <ul>
                <li>Optimized digital experience for flyers</li>
                <li>Dynamic flyer editorial</li>
                <li>Finite targeting</li>
                <li>Reaches French/Chinese audience</li>
                <li>Multi-channel media delivery</li>
              </ul>
            </div>
            <div className="d-block d-md-none">
              <Banner version="Feature" width="100%" />
            </div>
            <div className={`d-none d-md-flex justify-content-xl-center ${classes.featureButton}`}>
              <CTA text="REQUEST A DEMO" padding="p-50" onClick={() => toForm()}/>
            </div>
            <div className="d-flex d-md-none py-3 justify-content-center px-5" onClick={() => toForm()}>
              <CTA text="REQUEST A DEMO" block/>
            </div>
          </div>
        </div>
        <div className={classes.stats}>
          <div className={classes.statsContent}>
            <div className={`${classes.blurb} ${classes.statsBlurbLeft}`}>
              <h2>Get more eyes on your Digital Flyers</h2>
              <p>Be found wherever your customers are online with the Integrated delivery across our extensive digital network.</p>
            </div>
            <Banner desktopOnly={true} version="Audience" width="100%" />
            <div className={`${classes.blurb} ${classes.statsBlurbRight}`}>
              <h1>123 +</h1>
              <h2>MILLION</h2>
              <h3>monthly online pageviews</h3>
            </div>
          </div>
          <div>
            <hr className="d-none d-md-block" />
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div className={classes.form} id="form">
          <Banner desktopOnly={true} version="Form" />
          <TheForm />
          <div className={classes.formImages}>
            <Banner desktopOnly={true} version="Circles" />
            <Banner desktopOnly={true} version="Squares" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default LandingPage;
