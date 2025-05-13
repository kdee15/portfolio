import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classes from "./Nav.module.scss";
import { HomeSVG } from "../../../assets/html/icon--home";
import Link from "next/link";

export default function Nav() {
  gsap.registerPlugin(ScrollTrigger);
  const navbarRef = useRef(null);

  useEffect(() => {
    const showNav = gsap
      .fromTo(
        navbarRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
        }
      )
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });
  }, []);

  return (
    <nav className={classes.oNav} ref={navbarRef}>
      <Link className={classes.mLink} href={`/`}>
        <HomeSVG />
      </Link>
    </nav>
  );
}
