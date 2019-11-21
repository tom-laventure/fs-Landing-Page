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

  return (
    <div id="d-flex flex-column h-100">
      <Navbar />
      <div className={classes.main}>
        <div className={classes.banner}>
          <div className={classes.blurb}>
            <h1>Bring your Flyers to life</h1>
            <p>Flyer Story turns conventional flyers in an engaging digital experience for real customers.</p>
            <CTA text="REQUEST A DEMO" />
          </div>
          <Banner version="Hero" />
        </div>
        <div className={classes.feature}>
          <div>
            <Banner version="Feature" />
          </div>
          <div className={classes.blurb}>
            <h2>Key Features</h2>
            <ul>
              <li>Optimized digital experience for flyers</li>
              <li>Flyers centric editorial content</li>
              <li>Targets hard-to-reach-geography</li>
              <li>Reaches French/Chinese audience</li>
              <li>Cohesive media delivery</li>
            </ul>
          </div>
        </div>
        <div className={classes.stats}>
          <div className={classes.statsContent}>
            <div className={classes.blurb}>
              <h2>Get more eyes on your Digital Flyers</h2>
              <p>Our unmatched hyper-local content and distribution channels enable us to connect national advertisers to high quality audiences daily.</p>
            </div>
            <Banner version="Audience" />
            <div className={classes.blurb}>
              <h1>123 +</h1>
              <h1>Million</h1>
              <h2>monthly online pageviews</h2>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <Carousel />
          </div>
        </div>
        <div className={classes.form}>
          <Banner version="Form" />
          <TheForm />
          <div>
            <Banner version="Circles" />
            <Banner version="Squares" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default LandingPage;
