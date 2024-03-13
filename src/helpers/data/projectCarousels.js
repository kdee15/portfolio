export const carouselSettings = {
  settingsDesk: {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  settingsMobi: {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  },
  settingsTablet: {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  },
};
