import styled from "styled-components";
import theme from "../../theme";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledLabel = styled(
  ({ labelColor, placeHolderColor, ...rest }) => <label {...rest} />
)`
  position: absolute;
  top: -12px;
  left: 15px;
  padding: 5px 5px;
  font-size: 10px;
  color: ${(props) =>
    props.placeHolderColor
      ? `${props.placeHolderColor}`
      : `${theme.colors.white}`};
  background-color: ${(props) =>
    props.labelColor ? `${props.labelColor}` : `${theme.colors.darkBlue}`};
  font-family: "Poppins", sans-serif;
`;

export const StyledInput = styled(({ placeHolderColor, ...rest }) => (
  <input {...rest} />
))`
  font-size: 16px;
  border: 1px solid ${theme.colors.border};
  color: ${(props) =>
    props.placeHolderColor
      ? `${props.placeHolderColor}`
      : `${theme.colors.white}`};
  border-radius: 4px;
  outline: none;
  background: none;
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: ${theme.colors.purpleBorder};
  }
`;

export const EditIconStyled = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export const EditIconImg = styled.img`
  width: 15px;
  height: 15px;
`;
