import React from "react";
import { StyledInput, InputWrapper, StyledLabel } from "./inputFormStyles";

const InputForm = ({
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <InputWrapper>
      <StyledLabel htmlFor={id}>{placeholder}*</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </InputWrapper>
  );
};

export default InputForm;
