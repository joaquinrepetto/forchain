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
} from "./singleEventStyles";
import LogoSrc from "../../assets/imgs/forchain-blanco-.png";
import InputForm from "../../components/InputForm/InputForm";

const CompleteOrderForm = ({
  handleCloseForm,
  setTicketsCount,
  ticketsCount,
}) => {
  return (
    <ModalFormContainer>
      <Content>
        <ContainerLogoAndClose>
          <ContainerLogo>
            <Logo src={LogoSrc} />
          </ContainerLogo>
          <div
            onClick={() => {
              handleCloseForm();
            }}
          >
            X
          </div>
        </ContainerLogoAndClose>
        <TitleContainer>
          <TitleForm>Completar pedido</TitleForm>
          <SubtitleForm>Tiempo restante 20:00</SubtitleForm>
        </TitleContainer>
        <ContainerForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputForm placeholder="Nombre" type="text" name="name" id="name" />
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
                <PlusButton onClick={() => setTicketsCount((prev) => prev + 1)}>
                  +
                </PlusButton>
              </ButtonsContainer>
            </TicketButtonsContainer>
          </TicketCounter>
          <Button>Obtener tickets</Button>
        </ContainerForm>
      </Content>
    </ModalFormContainer>
  );
};

export default CompleteOrderForm;