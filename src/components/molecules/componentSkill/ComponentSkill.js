import React from "react";
import classes from "./ComponentSkill.module.scss";

function ComponentSkill({ skill }) {
  const { title, rating } = skill.fields;
  return (
    <figure className={classes.mSkill}>
      <span className={`${classes.aBall} aBall ${classes[`ball_${rating}`]}`}>
        {rating}
      </span>
      <p>{title}</p>
    </figure>
  );
}

export default ComponentSkill;
