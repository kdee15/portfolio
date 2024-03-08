"use client";
import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ComponentSkill from "../../molecules/componentSkill/ComponentSkill";
import classes from "./ComponentSkillsMatrix.module.scss";

function ComponentSkillsMatrix({ contentModule }) {
  const { title, skillList } = contentModule;

  return (
    <section className={`${classes.oSkillsBlock} container`}>
      <div className="row">
        <div className="col">
          <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
        </div>
      </div>
      <div className={`${classes.oSkillsRow} row`}>
        {skillList.map((item) => (
          <div key={item.sys.id} className={classes.oSkill}>
            <ComponentSkill skill={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComponentSkillsMatrix;
