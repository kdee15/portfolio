"use client";
import React, { useEffect, useState, useRef } from "react";
import ComponentSkill from "../../molecules/componentSkill/ComponentSkill";
import classes from "./ComponentSkillsMatrix.module.scss";

function ComponentSkillsMatrix({ contentModule }) {
  const { title, skillList } = contentModule;

  useEffect(() => {
    // Create the observer like the examples above
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("inView");
          return;
        }

        entry.target.classList.remove("inView");
      });
    });

    // Get multiple elements instead of a single one using "querySelectorAll"
    const squares = document.querySelectorAll(".oSkillsList");

    // Loop over the elements and add each one to the observer
    squares.forEach((element) => observer.observe(element));
  }, []);

  return (
    <section className={`${classes.oSkillsBlock} container`}>
      <div className="row">
        <div className="col">
          <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
        </div>
      </div>
      <div className={`${classes.oSkillsList} oSkillsList row`}>
        {skillList.map((item) => (
          <ComponentSkill skill={item} key={item.sys.id} />
        ))}
      </div>
    </section>
  );
}

export default ComponentSkillsMatrix;
