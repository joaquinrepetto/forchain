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
  pastEvents,
} from "../../utils/data/tickets/tickets";
import Events from "../../components/Tickets/Events";
import PastEvents from "../../components/Tickets/PastEvents";
import { handleRedirect } from "../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";

const Tickets = ({ user }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Próximos");

  const handleClickEventNavigate = (event) => {
    handleRedirect(navigate, `/tickets/${event.id}`);
  };

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
              handleClickEventNavigate={handleClickEventNavigate}
            />
          ) : (
            <PastEvents pastEvents={pastEvents} />
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
