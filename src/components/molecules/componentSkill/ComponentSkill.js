import React from "react";
import classes from "./ComponentSkill.module.scss";

function ComponentSkill({ skill }) {
  const { title, rating } = skill.fields;
  return (
    <div className={`${classes.mSkillItem} mSkillItem`}>
      <figure
        className={`${classes.mSkill} ${
          classes[`level_${rating}`]
        } mSkill level_${rating}`}
      >
        <svg
          className={`${classes.aSkillSvg} aSkillSvg`}
          data-name="skillSvg"
          viewBox="0 0 100 100"
        >
          <circle
            className={`${classes.skillCircle} skillCircle`}
            cx="50"
            cy="50"
            r="25"
          />
        </svg>
      </figure>
      <p className={`${classes.aSkillText} fnt30`}>{title}</p>
    </div>
  );
}

export default ComponentSkill;
