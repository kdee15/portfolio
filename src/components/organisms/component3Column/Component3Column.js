import React from "react";
import Slider from "react-slick";
import classes from "./Component3Column.module.scss";
import ComponentTitleImageTextCard from "../componentTitleImageTextCard/ComponentTitleImageTextCard";

function Component3Column({ contentModule }) {
  const { title, cardList } = contentModule;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className={`${classes.o3ColumnBlock}`}>
      <h2 className={`${classes.aBlockTitle} fntH2`}>{title}</h2>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <Slider {...settings}>
            {cardList.map((item, index) => (
              <ComponentTitleImageTextCard item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Component3Column;
