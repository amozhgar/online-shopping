import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonBackContainer = styled.div`
  cursor: pointer;
  margin-right: 30px;
  width: 25px;
  font-size: 25px;
`;

const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <ButtonBackContainer>
      <span onClick={() => navigate(-1)}>&#8592;</span>
    </ButtonBackContainer>
  );
};

export default ButtonBack;
