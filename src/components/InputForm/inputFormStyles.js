import styled from "styled-components";
import theme from "../../theme";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: -12px;
  left: 15px;
  padding: 5px 5px;
  font-size: 10px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.white};
  border-radius: 4px;
  outline: none;
  background: none;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;

export const EditIconStyled = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
