import { useState } from "react";
import {
  TicketsContainer,
  TitleTicketsContainer,
  TitleTickets,
  TicketsBodyLogged,
  TicketTypesContainer,
  TicketTypes,
  ButtonTicketTypes,
  TicketsBodyUnlogged,
  SubtitleContainer,
  SubTitle,
  ButtonLoginContainer,
  ButtonLogin,
} from "./ticketsStyles";
import {
  thisWeekEvents,
  nextWeekEvents,
  pastEvents
} from "../../utils/data/tickets/tickets";
import Events from "../../components/Tickets/Events";
import PastEvents from "../../components/Tickets/PastEvents";

const Tickets = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Próximos");

  return (
    <TicketsContainer>
      <TitleTicketsContainer>
        <TitleTickets>Mis tickets</TitleTickets>
      </TitleTicketsContainer>
      {user ? (
        <TicketsBodyLogged>
          <TicketTypesContainer>
            <TicketTypes>
              <ButtonTicketTypes
                isActive={activeTab === "Próximos"}
                onClick={() => setActiveTab("Próximos")}
              >
                Próximos
              </ButtonTicketTypes>
              <ButtonTicketTypes
                isActive={activeTab === "Pasados"}
                onClick={() => setActiveTab("Pasados")}
              >
                Pasados
              </ButtonTicketTypes>
            </TicketTypes>
          </TicketTypesContainer>
          {activeTab === "Próximos" ? (
            <Events
              thisWeekEvents={thisWeekEvents}
              nextWeekEvents={nextWeekEvents}
            />
          ) : (
            <PastEvents 
              pastEvents={pastEvents}
            />
          )}
        </TicketsBodyLogged>
      ) : (
        <TicketsBodyUnlogged>
          <SubtitleContainer>
            <SubTitle>Necesitas inciar sesión para ver tus tickets</SubTitle>
          </SubtitleContainer>
          <ButtonLoginContainer>
            <ButtonLogin>Iniciar sesión</ButtonLogin>
          </ButtonLoginContainer>
        </TicketsBodyUnlogged>
      )}
    </TicketsContainer>
  );
};

export default Tickets;
