import { useEffect, useState } from "react";
import { css, styled } from "styled-components";

const Container = styled.div`
  margin: 3px;
  height: 50vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.hover &&
    css`
      background-color: #321e3288;
      visibility: visible;
      opacity: 1;
      transition: background-color 0.3s ease-out, visibility 0.3s ease-out,
        opacity 0.3s ease-out;
    `}
  &:hover {
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ c }) => {
  const PF = process.env.PUBLIC_URL;
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Image src={`${PF + c.img}`} />
      <Info hover={isHover}>
        <Title>{c.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
