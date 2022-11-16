import Image from "next/image";
import Link from "next/link";
import React from "react";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import ComponentCarouselImage from "../../molecules/componentCarouselImage/ComponentCarouselImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import classes from "./ComponentProjectDetail.module.scss";

function ComponentProjectDetail({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const [isDetail, setDetail] = useState();
  const [showDesks, setDesks] = useState();
  const [showTablet, setTablet] = useState();
  const [showMobi, setMobi] = useState();
  const [isOn, setOn] = useState();

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  const handleDetail = (e) => {
    !isDetail ? setDetail(true) : setDetail();
    !isOn ? setOn(true) : setOn();
    setDesks();
    setMobi();
    setTablet();
  };
  const handleDesk = (e) => {
    !showDesks ? setDesks(true) : setDesks();
    setMobi();
    setTablet();
  };
  const handleTablet = (e) => {
    !showTablet ? setTablet(true) : setTablet();
    setMobi();
    setDesks();
  };
  const handleMobi = (e) => {
    !showMobi ? setMobi(true) : setMobi();
    setDesks();
    setTablet();
  };

  const data = contentModule;
  console.log("contentModule", contentModule);
  const carouselDeskScreens = contentModule.screenshotsDesktopCollection.items;
  const { title, coverImageDesk, coverImageTablet, coverImageMobile } =
    contentModule;

  const settingsDesk = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingsMobi = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const settingsTablet = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <nav className={classes.oNav}>
        <span
          onClick={handleDetail}
          className={`${classes.demoTab} ${classes.details} ${classes.show} ${
            isDetail ? classes.on : classes.off
          }`}
        >
          <figure className={classes.mIcon}>
            <svg
              className={`${classes.aIcon} ${classes.cog}`}
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
            >
              <g>
                <path
                  d="M97.1,39.9L89.6,39c-0.9-3.3-2.2-6.4-3.9-9.4l4.7-5.9c1-1.3,0.9-3.2-0.3-4.4l-9.6-9.5c-1.2-1.2-3.1-1.3-4.4-0.3l-5.9,4.7
              c-2.9-1.7-6.1-3-9.3-3.9l-0.9-7.5C59.9,1.2,58.4,0,56.8,0H43.2c-1.7,0-3.1,1.2-3.3,2.9L39,10.4c-3.3,0.9-6.4,2.2-9.4,3.9l-5.9-4.7
              c-1.3-1-3.2-0.9-4.4,0.3l-9.5,9.6c-1.2,1.2-1.3,3.1-0.3,4.4l4.7,5.9c-1.7,2.9-3,6.1-3.9,9.3l-7.5,0.9C1.2,40.1,0,41.6,0,43.2v13.6
              c0,1.7,1.2,3.1,2.9,3.3l7.5,0.8c0.9,3.3,2.2,6.4,3.9,9.4l-4.7,5.9c-1,1.3-0.9,3.2,0.3,4.4l9.6,9.6c1.2,1.2,3.1,1.3,4.4,0.3l5.9-4.7
              c2.9,1.7,6.1,3,9.3,3.9l0.9,7.5c0.2,1.7,1.6,2.9,3.3,2.9h13.6c1.7,0,3.1-1.2,3.3-2.9l0.9-7.5c3.3-0.9,6.4-2.2,9.4-3.9l5.9,4.7
              c1.3,1,3.2,0.9,4.4-0.3l9.6-9.6c1.2-1.2,1.3-3.1,0.3-4.4l-4.7-5.9c1.7-2.9,2.9-6.1,3.8-9.3l7.5-0.9c1.7-0.2,2.9-1.6,2.9-3.3V43.2
              C100,41.5,98.7,40.1,97.1,39.9z M63.2,63.2c-7.2,7.3-18.9,7.4-26.2,0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-7.3-7.2-7.4-18.9-0.3-26.2
              c0.1-0.1,0.2-0.2,0.3-0.3c7.2-7.3,18.9-7.4,26.2-0.3c0.1,0.1,0.2,0.2,0.3,0.3c7.3,7.2,7.4,18.9,0.3,26.2
              C63.4,63,63.3,63.1,63.2,63.2z"
                />
              </g>
            </svg>
          </figure>
          <p className={classes.aIconText}>Project Details</p>
        </span>

        {coverImageDesk ? (
          <span
            onClick={handleDesk}
            className={`${classes.demoTab} ${classes.demoDesk} ${
              classes.show
            } ${showDesks ? classes.on : classes.off}`}
          >
            <figure className={classes.mIcon}>
              <svg
                className={`${classes.aIcon} ${classes.laptop}`}
                x="0px"
                y="0px"
                viewBox="0 0 148.2 100"
              >
                <g>
                  <path d="M148.2,5.9c0-3.4-2.7-5.9-5.9-5.9H5.9C2.5,0,0,2.7,0,5.9v83h148.2V5.9z M140.7,77H7.5V8.4h133.4L140.7,77L140.7,77z" />
                  <path
                    d="M5,100h138.2c2.7,0,5-3,5-6.6v-3.9h-58v1.4c0,2-1.8,3.9-4.1,3.9H62c-2.3,0-4.1-1.8-4.1-3.9v-1.4H0v3.9C0,97,2.3,100,5,100z
              "
                  />
                </g>
              </svg>
            </figure>
            <p className={classes.aIconText}>Desktop Screens</p>
          </span>
        ) : null}
        {coverImageTablet ? (
          <span
            onClick={handleTablet}
            className={`${classes.demoTab} ${classes.demoTab}  ${
              classes.show
            } ${showTablet ? classes.on : classes.off}`}
          >
            <figure className={classes.mIcon}>
              <svg
                className={`${classes.aIcon} ${classes.tablet}`}
                x="0px"
                y="0px"
                viewBox="0 0 69.1 100"
              >
                <g>
                  <path
                    d="M63.4,0H5.8C2.6,0,0,2.6,0,5.8v88.5c0,3.2,2.6,5.8,5.8,5.8h57.6c3.2,0,5.8-2.6,5.8-5.8V5.8C69.2,2.6,66.5,0,63.4,0z
               M34.6,97.4c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8C39.3,95.2,37.3,97.4,34.6,97.4z M63.5,83.8H5.6V6
              h57.8V83.8z"
                  />
                  <circle cx="34.6" cy="92.6" r="2.9" />
                </g>
              </svg>
            </figure>
            <p className={classes.aIconText}>Tablet Screens</p>
          </span>
        ) : null}
        {coverImageMobile ? (
          <span
            onClick={handleMobi}
            className={`${classes.demoTab} ${classes.demoMob} ${classes.show} ${
              showMobi ? classes.on : classes.off
            }`}
          >
            <figure className={classes.mIcon}>
              <svg
                className={`${classes.aIcon} ${classes.mobile}`}
                x="0px"
                y="0px"
                viewBox="0 0 51.6 100"
              >
                <g>
                  <path
                    d="M46.1,0H5.5C2.5,0,0,2.5,0,5.5v88.9c0,3.1,2.5,5.5,5.5,5.5h40.5c3.1,0,5.5-2.5,5.5-5.5V5.7C51.6,2.6,49.1,0,46.1,0z
               M25.8,97.5c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6c2.6,0,4.6,2.1,4.6,4.6S28.4,97.5,25.8,97.5z M46.2,84.6H5.4V9.8h40.8V84.6z"
                  />
                  <circle cx="25.8" cy="92.9" r="2.8" />
                </g>
              </svg>
            </figure>
            <p className={classes.aIconText}>Mobile Screens</p>
          </span>
        ) : null}

        <Link href={`/home`}>
          <a className={`${classes.demoTab} ${classes.home} ${classes.show}`}>
            <figure className={classes.mIcon}>
              <svg
                className={`${classes.aIcon} ${classes.caret}`}
                viewBox="0 0 100 100"
              >
                <path
                  className={classes.aIconElement}
                  d="M97,70.19,52.2,25.41a3.1,3.1,0,0,0-4.4,0L3,70.19a3.11,3.11,0,0,0,4.41,4.4L50,32,92.58,74.59A3.11,3.11,0,1,0,97,70.19Z"
                />
              </svg>
            </figure>
            <p className={classes.aIconText}>Home</p>
          </a>
        </Link>

        <span className={`${classes.demoTab} ${classes.back} ${classes.show}`}>
          <figure className={classes.mIcon}>
            <svg
              className={`${classes.aIcon} ${classes.prev}`}
              viewBox="0 0 100 100"
            >
              <path
                className={`${classes.aIconElement}`}
                d="M70.19,3,25.41,47.8a3.1,3.1,0,0,0,0,4.4L70.19,97a3.11,3.11,0,0,0,4.4-4.41L32,50,74.59,7.42A3.11,3.11,0,0,0,70.19,3Z"
              />
            </svg>
          </figure>
          <p className={classes.aIconText}>BACK</p>
        </span>
      </nav>

      <main className={classes.oProjects}>
        <section className={classes.oProjectContent}>
          {mobileView ? (
            <figure className={`${classes.oProjectCover}`}>
              <Image
                className={`${classes.aImage} ${classes.aCoverMob} a-responsive-image`}
                src={coverImageMobile?.url}
                alt="mobile cover"
                width={coverImageMobile.width}
                height={coverImageMobile.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
          ) : (
            <figure
              className={`${classes.oProjectCover} ${
                !isOn ? classes.on : classes.off
              }`}
            >
              <Image
                className={`${classes.aImage} ${classes.aCoverDesk} a-responsive-image`}
                src={coverImageDesk?.url}
                alt="desktop cover"
                width={coverImageDesk.width}
                height={coverImageDesk.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </figure>
          )}
        </section>

        <div
          className={`${classes.oTab} ${classes.slideContent} ${
            classes.details
          } ${!isDetail ? classes.on : classes.off}`}
        >
          <div
            className={`${classes.mDetail} ${classes.date} ${classes.dateStart}`}
            // style="background-color:<?php the_field('color_1') ?>;"
          >
            <h4 className={`${classes.aTitle} fnt16`}>Start date</h4>
            <p className={`${classes.aDetail}`}>START DATE</p>
          </div>
          <div className={`${classes.mDetail} ${classes.projectInfo}`}>
            <h3 className={`${classes.aTitle}`}>{title}</h3>
            CONTENT
            <h4 className={`${classes.aTitle}`}>Nuts &amp; Bolts</h4>
            <p className={`${classes.aDetail}`}>TECH</p>
            <h4 className={`${classes.aTitle}`}>The stuff I did ...</h4>
            <p className={`${classes.aDetail}`}>MY ROLE</p>
          </div>
          <div
            className={`${classes.mDetail} ${classes.date} ${classes.dateEnd}`}
            // style="background-color:<?php the_field('color_1') ?>;"
          >
            <h4 className={`${classes.aTitle} fnt16`}>End date</h4>
            <p className={`${classes.aDetail}`}>END DATE</p>
          </div>
        </div>

        <div
          className={`${classes.oTab} ${classes.slideContent} ${
            classes.demoDesk
          } ${showDesks ? classes.on : classes.off}`}
        >
          <div className={classes.oWrapper}>
            <Slider {...settingsDesk}>
              {carouselDeskScreens.map((item, index) => (
                <ComponentCarouselImage item={item} key={index} />
              ))}
            </Slider>
          </div>
        </div>
        <div
          className={`${classes.oTab} ${classes.slideContent} ${
            classes.demoMobile
          } ${showMobi ? classes.on : classes.off}`}
        >
          <div className={classes.oWrapper}>
            <Slider {...settingsMobi}>
              {carouselDeskScreens.map((item, index) => (
                <ComponentCarouselImage item={item} key={index} />
              ))}
            </Slider>
          </div>
        </div>
        <div
          className={`${classes.oTab} ${classes.slideContent} ${
            classes.demoTablet
          } ${showTablet ? classes.on : classes.off}`}
        >
          <div className={classes.oWrapper}>
            <Slider {...settingsTablet}>
              {carouselDeskScreens.map((item, index) => (
                <ComponentCarouselImage item={item} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      </main>
    </>
  );
}

export default ComponentProjectDetail;
