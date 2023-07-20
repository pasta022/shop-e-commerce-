import { Send } from "@mui/icons-material";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "24px",
  })}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({
    textAlign: "center",
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({
    width: "70%",
  })}
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  border: none;
  flex: 8;
  padding-left: 20px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #5c871b;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Description>Get updates on all your favorite products</Description>
      <InputContainer>
        <Input placeholder="name@email.com" type="email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
