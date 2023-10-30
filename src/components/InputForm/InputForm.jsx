import React from "react";
import {
  StyledInput,
  InputWrapper,
  StyledLabel,
  EditIconStyled,
} from "./inputFormStyles";

const InputForm = ({
  placeholder,
  type,
  name,
  id,
  value,
  onChange,
  onBlur,
  onFocus,
  isEditable,
}) => {
  const EditIcon = () => <EditIconStyled>✏️</EditIconStyled>;

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
      {isEditable && <EditIcon />}
    </InputWrapper>
  );
};

export default InputForm;
