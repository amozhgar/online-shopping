import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSigninButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const Button_Type_Classes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_Type_Classes.base) =>
  ({
    [Button_Type_Classes.base]: BaseButton,
    [Button_Type_Classes.google]: GoogleSigninButton,
    [Button_Type_Classes.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttontype, ...otherProps }) => {
  const CustomButton = getButton(buttontype);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
