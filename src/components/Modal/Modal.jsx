import React from "react";
import {
  ModalFormContainer,
  Content,
  ContainerLogoAndClose,
  ContainerLogo,
  Logo,
  CloseIconContainer,
  CloseIcon,
} from "../../containers/SingleEvent/singleEventStyles";
import CloseIconSrc from "../../assets/imgs/close-icon.svg";
import LogoSrc from "../../assets/imgs/forchain-blanco-.png";

const Modal = ({ handleCloseForm, children }) => {
  return (
    <ModalFormContainer>
      <Content>
        <ContainerLogoAndClose>
          <ContainerLogo>
            <Logo src={LogoSrc} />
          </ContainerLogo>
          <CloseIconContainer
            onClick={() => {
              handleCloseForm();
            }}
          >
            <CloseIcon src={CloseIconSrc} />
          </CloseIconContainer>
        </ContainerLogoAndClose>
        {children}
      </Content>
    </ModalFormContainer>
  );
};

export default Modal;
