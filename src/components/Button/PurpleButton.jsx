import React from "react";
import { PurpleButtonStyled } from "./buttonStyles";

const PurpleButton = ({ children, onClick, disabled }) => {
  return (
    <PurpleButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </PurpleButtonStyled>
  );
};

export default PurpleButton;
