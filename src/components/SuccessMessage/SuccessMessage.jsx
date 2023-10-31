import React from "react";
import {
  SuccessButton,
  SuccessContainer,
  SuccessText,
  SuccessTitle,
  SuccessIndication,
  SuccessTextContainer,
  ContainerBottomText,
  ContainerAcknowledgments,
  AcknowledgmentsText,
} from "./successMessageStyles";
import { ArrowIcon } from "./successMessageStyles";
import ArrowIconImg from "../../assets/imgs/arrow.svg";

const SuccessMessage = ({
  title,
  subtitle,
  indication,
  buttonText,
  acknowledgments,
  onClick,
}) => {
  return (
    <SuccessContainer>
      <SuccessTextContainer>
        <SuccessTitle>{title}</SuccessTitle>
        <SuccessText>{subtitle}</SuccessText>
      </SuccessTextContainer>
      <ContainerBottomText>
        <SuccessIndication>{indication}</SuccessIndication>
        <SuccessButton
          onClick={() => {
            onClick();
          }}
        >
          {buttonText}
          <ArrowIcon src={ArrowIconImg} />
        </SuccessButton>
        <ContainerAcknowledgments>
          <AcknowledgmentsText>{acknowledgments}</AcknowledgmentsText>
        </ContainerAcknowledgments>
      </ContainerBottomText>
    </SuccessContainer>
  );
};

export default SuccessMessage;
