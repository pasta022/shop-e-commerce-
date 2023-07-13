import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  color: white;
  background-color: darkmagenta;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
`;

const Announcement = () => {
  return <Container>Free Shipping on Items over $50</Container>;
};

export default Announcement;
