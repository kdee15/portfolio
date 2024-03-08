import React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentTextItem.module.scss";

function ComponentTextItem({ item }) {
  const { title, copy, date } = item.fields;
  return (
    <div className={classes.mTextItem}>
      <h5>\\{title}\</h5>
      <div
        className={`${classes.aSubTitle} fnt16`}
        dangerouslySetInnerHTML={{ __html: copy }}
      ></div>
      <p className={`${classes.aText} fnt18`}>{date}</p>
    </div>
  );
}

export default ComponentTextItem;
