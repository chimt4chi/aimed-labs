import React from "react";
import styled from "styled-components";

const GlobalStyles = styled.div`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const Space = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(29, 141, 233);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(0, 104, 172);
  }
`;

const LowerForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  text-align: center;
`;

const LabelPassword = styled.label`
  margin-top: 10px;
  font-weight: 600;
`;

const LabelId = styled.label`
  font-weight: 600;
`;

const UnderlineLink = styled.a`
  color: rgb(160, 160, 67);
  text-decoration: underline;
  cursor: pointer;
`;

const RegisterLink = styled.a`
  text-decoration: none;
  color: rgb(211, 137, 26);
  text-decoration: underline;
  cursor: pointer;
`;

const ChangePasswordLink = styled.a`
  color: rgb(160, 160, 67);
  cursor: pointer;
`;

const App = () => {
  return (
    <GlobalStyles>
      <AppWrapper>
        <Wrapper>
          <h1>Login</h1>
          <FormWrapper>
            <LabelId htmlFor="email">Login Id</LabelId>
            <InputField id="email" placeholder="Login Id" type="email" />
            <LabelPassword htmlFor="password">Password</LabelPassword>
            <InputField id="password" placeholder="Password" type="password" />
            <Space>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <ChangePasswordLink>Change Password?</ChangePasswordLink>
            </Space>
            <p>
              <label>
                <input type="checkbox" />
                Agree to{" "}
                <UnderlineLink href="#">Terms & Conditions</UnderlineLink>
              </label>
            </p>
            <LowerForm>
              <Button>Login</Button>
              <span>
                Don't have an account?{" "}
                <RegisterLink href="#">Register Here</RegisterLink>
              </span>
            </LowerForm>
          </FormWrapper>
        </Wrapper>
      </AppWrapper>
    </GlobalStyles>
  );
};

export default App;
