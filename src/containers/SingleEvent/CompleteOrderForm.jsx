import React from "react";
import {
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
import InputForm from "../../components/InputForm/InputForm";
import TicketConfirmation from "./TicketConfirmation";
import Modal from "../../components/Modal/Modal";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 60%;
  color: black;
  font-size: 30px;
  max-width: 400px;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #555;
`;

const CompleteOrderForm = ({
  handleCloseForm,
  setTicketsCount,
  ticketsCount,
  isTicketConfirmationOpen,
  handleTicketConfirmation,
  loadingCreateEvent,
  event,
  handleNavigate,
}) => {
  return (
    <>
      <Modal handleCloseForm={handleCloseForm}>
        {isTicketConfirmationOpen ? (
          <TicketConfirmation event={event} handleNavigate={handleNavigate} />
        ) : (
          <>
            {/* Modal con texto loading feo (hay que poner un spinner lindo) */}
            {loadingCreateEvent && (
              <Overlay>
                <Content onClick={(e) => e.stopPropagation()}>
                  <CloseButton>&times;</CloseButton>
                  Loading...
                </Content>
              </Overlay>
            )}

            {/* Fin del texto loading */}

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
      </Modal>
    </>
  );
};

export default CompleteOrderForm;
