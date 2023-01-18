import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import classes from "./ComponentResponsiveImages.module.scss";

export default function ComponentResponsiveImages({ contentModule, isOn }) {
  const [mobileView, setMobileView] = useState();
  const [toggleOn, setToggleOn] = useState();

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  useEffect(() => {
    if (!isOn) {
      !toggleOn ? setToggleOn(true) : setToggleOn();
    }
  }, []);

  console.log("CoverImage", toggleOn);
  const { imageDesktop, imageTablet, imageMobile } =
    contentModule.componentListCollection.items[0];
  return (
    <section className={classes.oCoverImage}>
      {mobileView ? (
        <figure className={`${classes.oProjectCover}`}>
          <Image
            className={`${classes.aImage} ${classes.aCoverMob} a-responsive-image`}
            src={imageMobile?.url}
            alt="mobile cover"
            width={imageMobile.width}
            height={imageMobile.height}
            aria-hidden="true"
            layout="responsive"
            priority="true"
          />
        </figure>
      ) : (
        <figure
          className={`${classes.oProjectCover}  ${
            isOn ? classes.on : classes.off
          }`}
        >
          {imageDesktop && (
            <Image
              className={`${classes.aImage} ${classes.aCoverDesk} a-responsive-image`}
              src={imageDesktop?.url}
              alt="desktop cover"
              width={imageDesktop.width}
              height={imageDesktop.height}
              aria-hidden="true"
              layout="responsive"
              priority="true"
            />
          )}
        </figure>
      )}
    </section>
  );
}
