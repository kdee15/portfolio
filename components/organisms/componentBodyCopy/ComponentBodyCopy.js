import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentBodyCopy.module.scss";

export default function ComponentBodyCopy({ contentModule }) {
  const { title, copy } = contentModule;
  return (
    <section className={classes.introBlock}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oBody} col-12`}>
            <div className={classes.aText}>
              {documentToReactComponents(copy)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
