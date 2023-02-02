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
    breakpoint: { max: 1100, min: 836 },
    items: 5,
  },
  mobileLG: {
    breakpoint: { max: 836, min: 684 },
    items: 4,
  },
  mobileMD: {
    breakpoint: { max: 684, min: 544 },
    items: 3,
  },
  mobileSM: {
    breakpoint: { max: 544, min: 400 },
    items: 2,
  },
  mobileXS: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
  },
};

export { responsive };
