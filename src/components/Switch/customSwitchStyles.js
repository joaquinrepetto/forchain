import styled from "styled-components";
import theme from "../../theme";

export const SwitchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SwitchLabel = styled(({ isActive, ...rest }) => (
  <label {...rest} />
))`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  border-radius: 10px;
  padding: 10px 45px;
  background-color: ${(props) =>
    props.isActive ? `${theme.colors.inactive}` : `transparent`};
`;
