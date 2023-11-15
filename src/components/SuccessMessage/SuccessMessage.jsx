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
  ExternalURL,
} from "./successMessageStyles";
import { ArrowIcon } from "./successMessageStyles";
import ArrowIconImg from "../../assets/imgs/arrow.svg";
import { openExternalUrl } from "../../utils/navigate/openExternalUrl";

const SuccessMessage = ({
  title,
  subtitle,
  indication,
  buttonText,
  acknowledgments,
  onClick,
  txID,
  urlIPFS,
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
        {txID && (
          <ExternalURL onClick={() => openExternalUrl("txID", txID)}>
            Check Transaction Hash
          </ExternalURL>
        )}
        {urlIPFS && (
          <ExternalURL onClick={() => openExternalUrl("metadata", urlIPFS)}>
            Check Metadata Url
          </ExternalURL>
        )}
        {/* asd */}
        <ContainerAcknowledgments>
          <AcknowledgmentsText>{acknowledgments}</AcknowledgmentsText>
        </ContainerAcknowledgments>
      </ContainerBottomText>
    </SuccessContainer>
  );
};

export default SuccessMessage;
