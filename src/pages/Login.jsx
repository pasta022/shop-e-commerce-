import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("/media/backgroundImg2.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.6;

  ${mobile({
    backgroundSize: "contain",
  })}
`;

const Wrapper = styled.div`
  z-index: 2;
  width: 25%;
  padding: 20px;
  background-color: whitesmoke;

  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #1d1d1d;
  }
`;

const Line = styled.hr`
  margin: 5px 0;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: teal;
  }
`;

const Login = () => {
  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <ButtonContainer>
            <Button>LOGIN</Button>
          </ButtonContainer>
          <Line />
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
