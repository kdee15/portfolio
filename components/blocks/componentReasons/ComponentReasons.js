import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { isMobile } from "react-device-detect";
import classes from "./ComponentReasons.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

function ComponentReasons({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const {
    pretitle,
    title,
    subtitle,
    image1,
    image2,
    reasonTitle1,
    reasonCopy1,
    reasonTitle2,
    reasonCopy2,
    reasonTitle3,
    reasonCopy3,
  } = contentModule;

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <section className={classes.oReasonsBlock}>
      <div className={`container-fluid`}>
        <div className={`row`}>
          <div className={`${classes.oLeft} col-12 col-md-6`}>
            <div className={classes.titleWrapper}>
              <p className={`${classes.aPreTitle} fnt72f`}>{pretitle}</p>
              <p className={`${classes.aTitle} fnt72f`}>{title}</p>
              <p className={`${classes.aSubTitle} fnt72f`}>{subtitle}</p>
            </div>
            <div className={classes.bodyWrapper}>
              <figure className={`${classes.mImage} ${classes.floatRight}`}>
                <Image
                  className={`${classes.aImage} a-responsive-image`}
                  src={image1.fields.file.url}
                  alt={`title`}
                  width={image1.fields.file.details.image.width}
                  height={image1.fields.file.details.image.height}
                  aria-hidden="true"
                  layout="responsive"
                  priority="true"
                />
              </figure>
              <h3 className={`${classes.aHeader} fnt30f`}>{reasonTitle1}</h3>
              <div className={`${classes.mBodyText} fnt18f`}>
                {documentToReactComponents(reasonCopy1)}
              </div>
              <h3 className={`${classes.aHeader} fnt30f`}>{reasonTitle2}</h3>
              <div className={`${classes.mBodyText} fnt18f`}>
                {documentToReactComponents(reasonCopy2)}
              </div>
            </div>
          </div>
          <div className={`${classes.oRight} col-12 col-md-6`}>
            <figure
              className={`${classes.mImage} ${classes.bgImage}`}
              style={{ backgroundImage: `url(${image2.fields.file.url})` }}
            ></figure>
            <div className={`${classes.bodyWrapper} ${classes.rightBlock}`}>
              <h3 className={`${classes.aHeader} fnt30f`}>{reasonTitle3}</h3>
              <div className={`${classes.mBodyText} fnt18f`}>
                {documentToReactComponents(reasonCopy3)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentReasons;
