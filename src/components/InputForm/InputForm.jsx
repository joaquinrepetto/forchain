import React from "react";
import {
  StyledInput,
  InputWrapper,
  StyledLabel,
  EditIconStyled,
  EditIconImg,
} from "./inputFormStyles";

import LapizIcon from "../../assets/imgs/lapiz.png";
import LocationIconImg from "../../assets/imgs/target-icon.png";

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
  isLocation,
  labelColor,
  placeHolderColor,
}) => {
  const EditIcon = () => (
    <EditIconStyled>
      <EditIconImg src={LapizIcon} />
    </EditIconStyled>
  );
  const LocationIcon = () => (
    <EditIconStyled>
      <EditIconImg src={LocationIconImg} />
    </EditIconStyled>
  );
  return (
    <InputWrapper>
      <StyledLabel
        labelColor={labelColor}
        placeHolderColor={placeHolderColor}
        htmlFor={id}
      >
        {placeholder}*
      </StyledLabel>
      <StyledInput
        className={type === "date" ? "custom-date-picker" : ""}
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeHolderColor={placeHolderColor}
      />
      {isEditable && <EditIcon />}
      {isLocation && <LocationIcon />}
    </InputWrapper>
  );
};

export default InputForm;
