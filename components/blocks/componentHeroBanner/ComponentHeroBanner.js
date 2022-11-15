import React from "react";
import { isMobile } from "react-device-detect";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

function ComponentHeroBanner({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const { title, subtitle, backgroundImage, backgroundImageMobile, logo } =
    contentModule;

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <section className={classes.oHeroBlock}>
      <div className={`${classes.oContentBlock}`}>
        <figure className={classes.mLogo}>
          <Image
            className={`${classes.aImage} a-responsive-image`}
            src={logo.fields.file.url}
            alt={`title`}
            width={logo.fields.file.details.image.width}
            height={logo.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        </figure>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </div>

      {mobileView ? (
        <figure
          className={`${classes.introImage}`}
          style={{
            backgroundImage: `url(http:${backgroundImageMobile.fields.file.url})`,
          }}
        ></figure>
      ) : (
        <figure
          className={`${classes.introImage}`}
          style={{
            backgroundImage: `url(http:${backgroundImage.fields.file.url})`,
          }}
        ></figure>
      )}
    </section>
  );
}

export default ComponentHeroBanner;
