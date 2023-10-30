import styled from "styled-components";
import theme from "../../theme";

export const PurpleButtonStyled = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? theme.colors.inactive : theme.colors.purpleBorder};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 17px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  &:disabled {
    cursor: not-allowed;
  }
`;
