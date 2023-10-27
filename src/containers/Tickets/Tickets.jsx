import {
  TicketsContainer,
  TitleTicketsContainer,
  TitleTickets,
  TicketsBodyLogged,
  TicketTypesContainer,
  TicketTypes,
  ButtonTicketTypes,
  EventsContainer,
  ThisWeekEventsContainer,
  TitleContainerEvents,
  TitleWeekEvents,
  Event,
  NextWeekEventsContainer,
  TicketsBodyUnlogged,
  SubtitleContainer,
  SubTitle,
  ButtonLoginContainer,
  ButtonLogin,
} from "./ticketsStyles";

const Tickets = ({ user }) => {
  const thisWeekEvents = [];
  const nextWeekEvents = [];
  return (
    <TicketsContainer>
      <TitleTicketsContainer>
        <TitleTickets>Mis tickets</TitleTickets>
      </TitleTicketsContainer>
      {user ? (
        <TicketsBodyLogged>
          <TicketTypesContainer>
            <TicketTypes>
              <ButtonTicketTypes>Próximos</ButtonTicketTypes>
              <ButtonTicketTypes>Pasados</ButtonTicketTypes>
            </TicketTypes>
          </TicketTypesContainer>
          <EventsContainer>
            <ThisWeekEventsContainer>
              <TitleContainerEvents>
                <TitleWeekEvents>Esta semana</TitleWeekEvents>
              </TitleContainerEvents>
              <EventsContainer>
                {thisWeekEvents.map((event) => {
                  return <Event></Event>;
                })}
              </EventsContainer>
            </ThisWeekEventsContainer>
            <NextWeekEventsContainer>
              <TitleContainerEvents>
                <TitleWeekEvents>Proximas semana</TitleWeekEvents>
              </TitleContainerEvents>
              <EventsContainer>
                {nextWeekEvents.map((event) => {
                  return <Event></Event>;
                })}
              </EventsContainer>
            </NextWeekEventsContainer>
          </EventsContainer>
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
