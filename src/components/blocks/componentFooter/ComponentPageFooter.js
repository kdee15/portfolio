import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import classes from "./ComponentFooter.module.scss";
import Link from "next/link";

function PageFooter({ contentModule }) {
  const { copy, menusCollection, backgroundImage } = contentModule;
  const footerMenu = menusCollection.items[0].linkListCollection;
  console.log("footzz", footerMenu);
  return (
    <footer className={classes.oFooter}>
      <div
        className={classes.aBackgroundImage}
        style={{
          backgroundImage: `url(${backgroundImage?.url})`,
        }}
      ></div>
      <div className={`${classes.oContainerFluid} container-fluid`}>
        <div className={`row`}>
          <div className={`col-12`}>
            <figure className={`${classes.aFooterLogo}`}>
              <svg
                className={`${classes.aLogo}`}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 595.3 448"
              >
                <path
                  d="M365.1,0L301,0.2h11.7c38.5,0,51.5,20.9,51.5,56c0,15-2,30.6-4.6,46.3c-2.6,16.3-4.6,32-4.6,49.5
	c-0.7,41.7,17.6,62.6,46.9,70.4v1.3c-29.3,7.2-47.6,29.3-46.9,71.1c0,17.6,2,33.9,4.6,49.5c2.6,16.3,4.6,31.3,4.6,47
	c0,36.5-15,56.7-51.5,56.7h52.4v-0.5c123.4,0,223.5-99.9,223.8-223.3C589.1,100.7,489.2,0.3,365.6,0"
                ></path>
                <path
                  d="M0,432.8c0,8.4,6.8,15.2,15.2,15.2h214.8c-36.5,0-51.5-20.2-51.5-56.7c0-15.7,2-30.7,4.6-47c2.6-15.6,4.6-31.9,4.6-49.5
	c0.7-41.7-17.6-63.9-46.9-71.1v-1.3c29.3-7.9,47.6-28.7,46.9-70.4c0-17.6-2-33.2-4.6-49.5c-2.6-15.7-4.6-31.3-4.6-46.3
	c0-35.2,13-56,51.5-56h11.7L15.2,0C6.8,0,0,6.8,0,15.2"
                ></path>
              </svg>
            </figure>
            <div className={`${classes.mCopy}`}>
              {documentToReactComponents(copy.json)}
            </div>
          </div>
          <nav className={`col-12`}>
            <ul className={`${classes.oFooterList} oFooterMenu`}>
              {footerMenu.items.map((item, index) => (
                <li key={index} className={`${classes.mLink}`}>
                  <span className={`${classes.aText} fnt22`}>{item.label}</span>
                  <Link
                    href={item.url}
                    // target={isExternal ? "_blank" : "_parent"}
                  >
                    <Image
                      className={`${classes.aImage}`}
                      src={`${item.image.url}`}
                      alt={item.image.title}
                      width={item.image.width}
                      height={item.image.height}
                      aria-hidden="true"
                      priority="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default PageFooter;
