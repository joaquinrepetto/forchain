import React from "react";
import {
  ModalFormContainer,
  ContainerLogoAndClose,
  ContainerLogo,
  Logo,
  Content,
  TitleForm,
  ContainerForm,
  TitleContainer,
  SubtitleForm,
  TicketCounter,
  TicketButtonsContainer,
  GeneralTicketContainer,
  GeneralTicket,
  ButtonsContainer,
  MinusButton,
  CountSpan,
  PlusButton,
  Button,
  CloseIconContainer,
  CloseIcon,
} from "./singleEventStyles";
import LogoSrc from "../../assets/imgs/forchain-blanco-.png";
import InputForm from "../../components/InputForm/InputForm";
import CloseIconSrc from "../../assets/imgs/close-icon.svg";
import TicketConfirmation from "./TicketConfirmation";

const CompleteOrderForm = ({
  handleCloseForm,
  setTicketsCount,
  ticketsCount,
  isTicketConfirmationOpen,
  handleTicketConfirmation,
  event,
}) => {
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
        {isTicketConfirmationOpen ? (
          <TicketConfirmation event={event} />
        ) : (
          <>
            <TitleContainer>
              <TitleForm>Completar pedido</TitleForm>
              <SubtitleForm>Tiempo restante 20:00</SubtitleForm>
            </TitleContainer>
            <ContainerForm
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <InputForm
                placeholder="Nombre"
                type="text"
                name="name"
                id="name"
              />
              <InputForm
                placeholder="Apellido"
                type="text"
                name="lastname"
                id="lastname"
              />
              <InputForm
                placeholder="Correo electrónico"
                type="email"
                name="email"
                id="email"
              />
              <InputForm
                placeholder="Confirmar correo electrónico"
                type="email"
                name="confirmEmail"
                id="confirmEmail"
              />
              <TicketCounter>
                <TicketButtonsContainer>
                  <GeneralTicketContainer>
                    <GeneralTicket>Entrada general</GeneralTicket>
                    <GeneralTicket>Gratis</GeneralTicket>
                  </GeneralTicketContainer>
                  <ButtonsContainer>
                    <MinusButton
                      onClick={() =>
                        setTicketsCount((prev) => Math.max(1, prev - 1))
                      }
                    >
                      -
                    </MinusButton>
                    <CountSpan>{ticketsCount}</CountSpan>
                    <PlusButton
                      onClick={() => setTicketsCount((prev) => prev + 1)}
                    >
                      +
                    </PlusButton>
                  </ButtonsContainer>
                </TicketButtonsContainer>
              </TicketCounter>
              <Button
                onClick={() => {
                  handleTicketConfirmation();
                }}
              >
                Obtener tickets
              </Button>
            </ContainerForm>
          </>
        )}
      </Content>
    </ModalFormContainer>
  );
};

export default CompleteOrderForm;
