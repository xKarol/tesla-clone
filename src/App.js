import Header from "./components/header";
import Main from "./components/main";
import Buttons from "./components/main/buttons";
import Heading from "./components/main/heading";
import MainPage from "./components/main/page";
import { StyledButton } from "./components/main/styles";

function App() {
  const pages = [
    { id: 1, image: { src: "/images/model-3.jfif", alt: "tesla car model 3" } },
    { id: 2, image: { src: "/images/model-y.jfif", alt: "tesla car model y" } },
    { id: 3, image: { src: "/images/model-s.jfif", alt: "tesla car model s" } },
    { id: 4, image: { src: "/images/model-x.jfif", alt: "tesla car model x" } },
    {
      id: 5,
      image: { src: "/images/solar-panels.jfif", alt: "tesla solar panels" },
    },
    {
      id: 6,
      image: { src: "/images/solar-roof.jfif", alt: "tesla solar roof" },
    },
    {
      id: 7,
      image: { src: "/images/accessories.jfif", alt: "tesla accessories" },
    },
  ];

  return (
    <>
      <Header />
      <Heading
        heading="Model Y"
        subheading="Order Online for Touchless Delivery"
      />
      <Buttons>
        <StyledButton>Custom Order</StyledButton>
        <StyledButton second>Existing Inventory</StyledButton>
      </Buttons>
      <Main>
        {pages.map(({ id, image }) => (
          <MainPage key={id} image={image} />
        ))}
      </Main>
    </>
  );
}

export default App;
