// import Link from "next/link";
import ComponentTextItem from "../../molecules/componentTextItem/ComponentTextItem";
import classes from "./ComponentTextList.module.scss";

export default function ComponentTextList({ contentModule }) {
  const { title, copy, itemList } = contentModule;
  return (
    <section className={classes.oTextListBlock}>
      <h2>{title}</h2>
      {itemList.map((item) => (
        <div key={item.sys.id} className={classes.oSkill}>
          <ComponentTextItem item={item} />
        </div>
      ))}
    </section>
  );
}
