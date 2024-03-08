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

  const { imageDesktop, imageTablet, imageMobile } =
    contentModule.componentListCollection.items[0];
  return (
    <section className={classes.oCoverImage}>
      {mobileView ? (
        <figure
          className={`${classes.oProjectCover}`}
          style={{
            backgroundImage: `url(${imageMobile?.url})`,
          }}
        ></figure>
      ) : (
        <>
          {imageDesktop && (
            <figure
              className={`${classes.oProjectCover}  ${
                isOn ? classes.on : classes.off
              }`}
              style={{
                backgroundImage: `url(${imageDesktop?.url})`,
              }}
            ></figure>
          )}
        </>
      )}
    </section>
  );
}
