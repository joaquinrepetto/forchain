import React from "react";
import {
  Button,
  TicketCounter,
  ModalWrapper,
  TicketButtonsContainer,
  GeneralTicket,
  MinusButton,
  PlusButton,
  ButtonsContainer,
  CountSpan,
} from "../../containers/SingleEvent/singleEventStyles";

const TicketSelectionModal = ({
  onGetTickets,
  ticketsCount,
  setTicketsCount,
}) => {
  return (
    <ModalWrapper>
      <TicketCounter>
        <TicketButtonsContainer>
          <div>
            <GeneralTicket>Entrada general</GeneralTicket>
            <GeneralTicket>Gratis</GeneralTicket>
          </div>
          <ButtonsContainer>
            <MinusButton
              onClick={() => setTicketsCount((prev) => Math.max(1, prev - 1))}
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

      <Button onClick={onGetTickets}>Obtener tickets</Button>
    </ModalWrapper>
  );
};

export default TicketSelectionModal;
