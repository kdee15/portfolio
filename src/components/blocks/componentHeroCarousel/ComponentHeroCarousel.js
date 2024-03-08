import Slider from "react-slick";
import classes from "./ComponentHeroCarousel.module.scss";
import Image from "next/image";
import ComponentCarouselImage from "../../molecules/componentCarouselImage/ComponentCarouselImage";

function ComponentHeroCarousel({ contentModule }) {
  const { title, logo, carouselImages } = contentModule;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <section className={classes.oHeroCarousel}>
      <figure className={classes.mLogo}>
        <Image
          className={`${classes.aImage} a-responsive-image`}
          src={logo.fields.file.url}
          alt={`title`}
          width={logo.fields.file.details.image.width}
          height={logo.fields.file.details.image.height}
          aria-hidden="true"
          layout="responsive"
          priority="true"
        />
        {title}
      </figure>
      <div className={`${classes.oCarouselBlock} oCarouselBlock`}>
        <Slider {...settings}>
          {carouselImages.map((item) => (
            <ComponentCarouselImage item={item} key={item.sys.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ComponentHeroCarousel;
