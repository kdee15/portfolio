import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ServiceComponent.module.scss";

function ServiceComponent({ contentModule }) {
  const { title, copy, image, subtitle, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oServiceBlock} ${classes[`${imagePosition}`]}`}
    >
      <div
        className={`${classes.oBlockImage}`}
        style={{
          backgroundImage: `url(http:${image.fields.file.url})`,
        }}
      >
        <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
      </div>
      <div className={`${classes.oBlockBody} mBlockContent`}>
        {documentToReactComponents(copy)}
      </div>
    </section>
  );
}

export default ServiceComponent;
