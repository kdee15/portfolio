import React from "react";
import { isMobile } from "react-device-detect";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

function ComponentHeroBanner({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const { title, backgroundImage, backgroundImageMobile, logo } = contentModule;

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
      </div>
      <figure className={classes.introImage}>
        {mobileView ? (
          <Image
            className={classes.oImageBlockMobile}
            src={backgroundImageMobile.fields.file.url}
            alt={`title`}
            width={backgroundImageMobile.fields.file.details.image.width}
            height={backgroundImageMobile.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        ) : (
          <Image
            className={classes.oImageBlock}
            src={backgroundImage.fields.file.url}
            alt={`title`}
            width={backgroundImage.fields.file.details.image.width}
            height={backgroundImage.fields.file.details.image.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        )}
      </figure>
    </section>
  );
}

export default ComponentHeroBanner;
