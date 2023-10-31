import styled from "styled-components";
import theme from "../../theme";
import closeIcon from "../../assets/imgs/close-search-footer-button.png";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  &:after {
    content: "";
    background-image: url(${closeIcon});
    background-size: contain;
    background-repeat: no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
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

export const StyledSelect = styled(
  ({ placeHolderColor, labelColor, ...rest }) => <select {...rest} />
)`
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
  appearance: none;
`;

export const StyledOption = styled.option`
  background-color: ${theme.colors.darkBlue};
  color: ${theme.colors.white};
  font-family: "Poppins", sans-serif;
  font-size: 10px;
`;

// ------------------------- Custom Select

export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomSelectHeader = styled.div`
  font-size: 16px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.white};
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;

  &:focus {
    border-color: ${theme.colors.purpleBorder};
  }
`;

export const CustomSelectList = styled.ul`
  width: 100%;
  border: 1px solid ${theme.colors.purpleBorder};
  background-color: ${theme.colors.darkBlue};
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  border-radius: 12px;
  margin-top: 10px;
`;

export const CustomSelectOption = styled.li`
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.purpleBorder};
  }
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  padding: 10px 15px;
`;
