const defaultButtons = [
  ["Custom Order", "Existing Inventory"],
  ["Order Now", "Learn More"],
  ["Shop Now"],
];

const defaultSubheadings = [
  [`Order Online for <a href='/'>Touchless Delivery</a>`],
];

export const pages = [
  {
    id: 1,
    images: {
      desktop: "/images/desktop/model-3.jfif",
      mobile: "/images/mobile/model-3.jfif",
      alt: "tesla car model 3",
    },
    heading: "Model 3",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 2,
    images: {
      desktop: "/images/desktop/model-y.jfif",
      mobile: "/images/mobile/model-y.jfif",
      alt: "tesla car model y",
    },
    heading: "Model Y",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 3,
    images: {
      desktop: "/images/desktop/model-s.jfif",
      mobile: "/images/mobile/model-s.jfif",
      alt: "tesla car model s",
    },
    heading: "Model S",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 4,
    images: {
      desktop: "/images/desktop/model-x.jfif",
      mobile: "/images/mobile/model-x.jfif",
      alt: "tesla car model x",
    },
    heading: "Model X",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 5,
    images: {
      desktop: "/images/desktop/solar-panels.jfif",
      mobile: "/images/mobile/solar-panels.jfif",
      alt: "tesla solar panels",
    },
    heading: "Solar Panels",
    subheading: "Lowest Cost Solar Panels in America",
    buttons: defaultButtons[1],
  },
  {
    id: 6,
    images: {
      desktop: "/images/desktop/solar-roof.jfif",
      mobile: "/images/mobile/solar-roof.jfif",
      alt: "tesla solar roof",
    },
    heading: "Solar Roof",
    subheading: "Produce Clean Energy From Your Roof",
    buttons: defaultButtons[1],
  },
  {
    id: 7,
    images: {
      desktop: "/images/desktop/accessories.jfif",
      mobile: "/images/mobile/accessories.jfif",
      alt: "tesla accessories",
    },
    heading: "Accessories",
    buttons: defaultButtons[2],
  },
];
