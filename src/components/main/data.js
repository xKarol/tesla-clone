const defaultButtons = [
  ["Custom Order", "Existing Inventory"],
  ["Order Now", "Learn More"],
  ["Shop Now"],
];

const defaultSubheadings = [["Order Online for Touchless Delivery"]];

export const pages = [
  {
    id: 1,
    image: { src: "/images/model-3.jfif", alt: "tesla car model 3" },
    heading: "Model 3",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 2,
    image: { src: "/images/model-y.jfif", alt: "tesla car model y" },
    heading: "Model Y",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 3,
    image: { src: "/images/model-s.jfif", alt: "tesla car model s" },
    heading: "Model S",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 4,
    image: { src: "/images/model-x.jfif", alt: "tesla car model x" },
    heading: "Model X",
    subheading: defaultSubheadings[0],
    buttons: defaultButtons[0],
  },
  {
    id: 5,
    image: { src: "/images/solar-panels.jfif", alt: "tesla solar panels" },
    heading: "Solar Panels",
    subheading: "Lowest Cost Solar Panels in America",
    buttons: defaultButtons[1],
  },
  {
    id: 6,
    image: { src: "/images/solar-roof.jfif", alt: "tesla solar roof" },
    heading: "Solar Roof",
    subheading: "Produce Clean Energy From Your Roof",
    buttons: defaultButtons[1],
  },
  {
    id: 7,
    image: { src: "/images/accessories.jfif", alt: "tesla accessories" },
    heading: "Accessories",
    buttons: defaultButtons[2],
  },
];
