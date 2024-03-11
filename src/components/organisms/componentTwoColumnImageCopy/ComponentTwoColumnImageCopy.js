import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import classes from './ComponentTwoColumnImageCopy.module.scss';

export default function ComponentTwoColumnImageCopy({ contentModule }) {
  const refImage = useRef(null);
  const refTitle = useRef(null);
  const refCopy = useRef(null);
  const { title, copy, image } = contentModule;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: 'top bottom',
        end: 'bottom bottom',
      },
    });

    timeline
      .from(refImage.current, { opacity: '0' }, 0)
      .from(refTitle.current, { x: '-10%' }, 0)
      .from(refCopy.current, { x: '-5%', opacity: '0' }, 0);
  }, []);

  return (
    <section className={classes.oComponentTwoColumnImageCopy}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <figure
            className={`${classes.oColImage} col-12 col-md-6`}
            ref={refImage}
          >
            <Image
              className={`${classes.aImage}`}
              src={`https:${image?.fields.file.url}`}
              alt="mobile cover"
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              aria-hidden="true"
              priority="true"
            />
          </figure>
          <div className={`${classes.oColText} col-12 col-md-6`}>
            <h2 ref={refTitle}>{title}</h2>
            <div className={classes.aText} ref={refCopy}>
              {documentToReactComponents(copy)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
