const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktopXL: {
    breakpoint: { max: 3000, min: 1532 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1532, min: 1100 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1100, min: 650 },
    items: 5,
  },
  mobileMD: {
    breakpoint: { max: 650, min: 440 },
    items: 4,
  },
  mobileSM: {
    breakpoint: { max: 440, min: 364 },
    items: 3,
  },
  mobileXS: {
    breakpoint: { max: 364, min: 0 },
    items: 2,
  },
};

export { responsive };
