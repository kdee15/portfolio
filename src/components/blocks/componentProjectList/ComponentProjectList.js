"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import classes from "./ComponentProjectList.module.scss";

function ComponentProjectList({ contentModule }) {
  const { title, projectList } = contentModule;

  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ref.current.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          left: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            scrub: true,
            stagger: 0.2,
          },
        }
      );
    });
  }, []);

  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };

  return (
    <section className={`${classes.oProjectBlock}`}>
      <div className={`${classes.oContainer} container-fluid`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={`${classes.aBlockTitle} fntH2 col`}>{title}</h2>
        </div>
        <div className={`${classes.oRow} row`}>
          {projectList.map((project, index) => (
            <Link
              href={`/projects/${project.fields.slug}`}
              key={index}
              className={`${classes.oCard} col-12 col-md-6`}
            >
              <article className={`${classes.oProjectCard}`} ref={addtoRefs}>
                <figure
                  className={`${classes.mImage}`}
                  style={{
                    backgroundImage: `url(${project.fields.previewImageDesktop.fields.file.url})`,
                  }}
                ></figure>
                <div className={`${classes.mBody}`}>
                  <h4 className={`${classes.mCardTitle} fontH4`}>
                    {project.fields.title}
                  </h4>
                </div>
              </article>
            </Link>
          ))}
          <div className={classes.mCtaBlock}>
            <Link href={`/projects/`} className={`${classes.aBtn} aBtn`}>
              See the rest ...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentProjectList;
