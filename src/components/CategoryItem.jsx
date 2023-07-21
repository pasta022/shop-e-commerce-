import { styled } from "styled-components";
import { mobile } from "../responsive";

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

  ${mobile({ height: "20vh" })}
`;

const Container = styled.div`
  margin: 3px;
  height: 50vh;
  position: relative;

  &:hover ${Info} {
    background-color: #27363687;
    visibility: visible;
    opacity: 1;
    transition: background-color 0.3s ease-out, visibility 0.3s ease-out,
      opacity 0.3s ease-out;
  }

  ${mobile({ height: "20vh" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: "20vh",
  })}
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "20px",
  })}
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

  return (
    <Container>
      <Image src={`${PF + c.img}`} />
      <Info>
        <Title>{c.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
