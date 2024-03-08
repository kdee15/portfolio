import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./Component2ColumnImageText.module.scss";

function Component2ColumnImageText({ contentModule }) {
  const { title, copy, image, imagePosition } = contentModule;
  return (
    <section
      className={`${classes.oTextImageBlock} ${classes[`${imagePosition}`]}`}
    >
      <div className={`${classes.oBlockBody}`}>
        <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
        <div>{documentToReactComponents(copy)}</div>
      </div>
      <figure
        className={`${classes.oBlockImage}`}
        style={{
          backgroundImage: `url(http:${image.fields.file.url})`,
        }}
      ></figure>
    </section>
  );
}

export default Component2ColumnImageText;
