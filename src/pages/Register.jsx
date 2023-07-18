import { styled } from "styled-components";

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
  background-image: url("/media/backgroundImg.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.6;
`;

const Wrapper = styled.div`
  z-index: 2;
  width: 40%;
  padding: 20px;
  background-color: whitesmoke;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const Terms = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Terms>
            By creating this account, I consent to the processing of my personal
            data with accordance to the <b>PRIVACY POLICY</b>
          </Terms>
          <ButtonContainer>
            <Button>CREATE ACCOUNT</Button>
          </ButtonContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
