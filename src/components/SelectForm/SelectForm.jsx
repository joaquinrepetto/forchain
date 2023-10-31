import React from "react";
import {
  SelectWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./selectFormStyles";

const SelectForm = ({
  placeholder,
  options,
  placeHolderColor,
  labelColor,
  type,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <SelectWrapper>
      <StyledLabel
        labelColor={labelColor}
        placeHolderColor={placeHolderColor}
        htmlFor="select"
      >
        {placeholder}*
      </StyledLabel>
      <StyledSelect
        placeHolderColor={placeHolderColor}
        labelColor={labelColor}
        name="select"
        id="select"
      >
        {options?.map((option, index) => (
          <StyledOption key={index} value={option}>
            {option}
          </StyledOption>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default SelectForm;
