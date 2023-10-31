import React from "react";
import { PurpleButtonStyled } from "./buttonStyles";

const PurpleButton = ({
  children,
  onClick,
  disabled,
  cancel,
  ...restProps
}) => {
  return (
    <PurpleButtonStyled
      onClick={onClick}
      disabled={disabled}
      cancel={cancel}
      {...restProps}
    >
      {children}
    </PurpleButtonStyled>
  );
};

export default PurpleButton;
