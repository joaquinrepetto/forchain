import React, { useState } from "react";
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
  txID,
  IPFSHash,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <>
      <Modal handleCloseForm={handleCloseForm}>
        {isTicketConfirmationOpen ? (
          <TicketConfirmation
            event={event}
            handleNavigate={handleNavigate}
            txID={txID}
            IPFSHash={IPFSHash}
          />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputForm
                placeholder="Apellido"
                type="text"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <InputForm
                placeholder="Correo electrónico"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputForm
                placeholder="Confirmar correo electrónico"
                type="email"
                name="confirmEmail"
                id="confirmEmail"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
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
                disabled={
                  loadingCreateEvent ||
                  !name ||
                  !lastName ||
                  !email ||
                  !confirmEmail
                }
                onClick={() => {
                  handleTicketConfirmation();
                }}
              >
                {loadingCreateEvent
                  ? "Obteniendo tickets..."
                  : "Obtener tickets"}
              </Button>
            </ContainerForm>
          </>
        )}
      </Modal>
    </>
  );
};

export default CompleteOrderForm;
