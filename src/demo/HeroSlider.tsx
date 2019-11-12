import HeroSlider from "src/components/HeroSlider";
import styled from "@emotion/styled";
import { space, position, layout } from "styled-system";

const images = [
  "https://wallpapercave.com/wp/wp2570965.jpg",
  "https://www.freegreatpicture.com/files/147/18429-hd-color-background-wallpaper.jpg",
  "https://wallpapercave.com/wp/wp2634897.jpg"
];

const HeroSliderDemo = ({ children, ...props }: any) => {
  return (
    <StyledHeroSliderDemo
      position={"relative"}
      height={"60vh"}
      maxHeight={500}
      {...props}
    >
      <HeroSlider images={images} interval={7000}>
        {children}
      </HeroSlider>
    </StyledHeroSliderDemo>
  );
};

const StyledHeroSliderDemo = styled("div")(position, space, layout);

export default HeroSliderDemo;
