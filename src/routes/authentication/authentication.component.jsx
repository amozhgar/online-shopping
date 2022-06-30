import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import styled from "styled-components";
import ButtonBack from "../../component/button-back/button-back";

const AuthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 350px;
    margin: 20px auto;
  }
`;

const Authentication = () => {
  return (
    <AuthContainer>
      <ButtonBack />
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
