import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useState, useEffect } from "react";
import classes from "./ComponentResponsiveImages.module.scss";

export default function ComponentResponsiveImages({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  console.log("CoverImage", contentModule);
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
        <figure className={`${classes.oProjectCover}`}>
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
