import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { css, styled } from "styled-components";
import { sliderItems } from "../data";
import { useEffect, useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({
    display: "none",
  })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8e8e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${(props) =>
    props.leftDisabled &&
    css`
      display: none;
    `};
  ${(props) =>
    props.rightDisabled &&
    css`
      display: none;
    `};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const PF = process.env.PUBLIC_URL;
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  useEffect(() => {
    slideIndex === 3 && setIsRightDisabled(true);
    slideIndex === 0 && setIsLeftDisabled(true);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      if (slideIndex > 0) {
        setIsLeftDisabled(false);
        setSlideIndex((currentState) => currentState - 1);
        setIsRightDisabled(false);
      } else {
        setIsLeftDisabled(true);
      }
    } else {
      if (slideIndex < 3) {
        setIsLeftDisabled(false);
        setSlideIndex((currentState) => currentState + 1);
      } else {
        setIsRightDisabled(true);
      }
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
        leftDisabled={isLeftDisabled}
      >
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slider) => (
          <Slide bg={slider.bg} key={slider.id}>
            <ImgContainer>
              <Img src={`${PF + slider.img}`} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slider.title}</Title>
              <Description>{slider.desc}</Description>
              <Button>GET NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
        rightDisabled={isRightDisabled}
      >
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
