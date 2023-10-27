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
        </SuccessButton>
        <ContainerAcknowledgments>
          <AcknowledgmentsText>{acknowledgments}</AcknowledgmentsText>
        </ContainerAcknowledgments>
      </ContainerBottomText>
    </SuccessContainer>
  );
};

export default SuccessMessage;
