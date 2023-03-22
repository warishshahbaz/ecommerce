import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { sliderItems } from "../Data";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  ${"" /* background-color: grey; */}
  position:relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  bottom: 0px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  position: absolute;
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  width: 50%;
  flex: 1;
  object-fit: cover;

  @media only screen and (max-width: 450px) {
    height: 50vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.img`
  height: 100%;
  object.fit: cover;
  background-position: cover;

  @media only screen and (max-width: 450px) {
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const InfoContainer = styled.div`
  width: 50%;
  flex: 1;
  padding: 50px;
  @media only screen and (max-width: 450px) {
    width: 100%;
    height: 20vh;
    margin-top: 32px;
    padding: 50px;
  }
`;
const Title = styled.h1`
  font-size: 70px;
  @media only screen and (max-width: 450px) {
    font-size: 30px;
  }
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  @media only screen and (max-width: 450px) {
    font-size: 15px;
    letter-spacing: 1px;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    padding: 6px;
    font-size: 17px;
  }
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} alt="logo" />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
