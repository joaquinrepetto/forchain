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
  GeneralTicketContainer,
} from "../../containers/SingleEvent/singleEventStyles";
import CompleteOrderForm from "../../containers/SingleEvent/CompleteOrderForm";

const TicketSelectionModal = ({
  handleGetTickets,
  handleCloseForm,
  ticketsCount,
  setTicketsCount,
  isFormOpen,
  isTicketConfirmationOpen,
  handleTicketConfirmation,
  loadingCreateEvent,
  event,
  handleNavigate,
  txID,
  IPFSHash,
}) => {
  return (
    <>
      {isFormOpen && (
        <CompleteOrderForm
          handleCloseForm={handleCloseForm}
          setTicketsCount={setTicketsCount}
          ticketsCount={ticketsCount}
          isTicketConfirmationOpen={isTicketConfirmationOpen}
          handleTicketConfirmation={handleTicketConfirmation}
          loadingCreateEvent={loadingCreateEvent}
          event={event}
          handleNavigate={handleNavigate}
          txID={txID}
          IPFSHash={IPFSHash}
        />
      )}
      <ModalWrapper>
        <TicketCounter>
          <TicketButtonsContainer>
            <GeneralTicketContainer>
              <GeneralTicket>Entrada general</GeneralTicket>
              <GeneralTicket>Gratis</GeneralTicket>
            </GeneralTicketContainer>
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

        <Button onClick={() => handleGetTickets()}>Obtener tickets</Button>
      </ModalWrapper>
    </>
  );
};

export default TicketSelectionModal;
