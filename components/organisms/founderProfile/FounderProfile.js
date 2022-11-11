import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./FounderProfile.module.scss";

function FounderProfile({ contentModule }) {
  const { title, copy, image, subtitle, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oFounderProfileBlock} ${
        classes[`${imagePosition}`]
      }`}
    >
      <div className={`container`}>
        <div className={`row`}>
          <figure
            className={`${classes.oBlockImage} col-12 col-md-6`}
            style={{
              backgroundImage: `url(http:${image.fields.file.url})`,
            }}
          >
            <div className={classes.imageRatio}></div>
          </figure>
          <div className={`${classes.oBlockBody} col-12 col-md-6`}>
            <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
            <h3 className={`${classes.aBlockTitle} fntH3`}>{subtitle}</h3>
            <div>{documentToReactComponents(copy)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderProfile;
