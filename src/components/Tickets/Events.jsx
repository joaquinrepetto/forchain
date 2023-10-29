import React from "react";
import {
  EventsContainer,
  ThisWeekEventsContainer,
  TitleContainerEvents,
  TitleWeekEvents,
  Event,
  EventImgContainer,
  EventImg,
  NextWeekEventsContainer,
  EventInfoContainer,
  EventInfoTitle,
  EventInfo,
  EventInfoLocation,
} from "../../containers/Tickets/ticketsStyles";

const Events = ({
  thisWeekEvents,
  nextWeekEvents,
  handleClickEventNavigate,
}) => {
  return (
    <EventsContainer>
      <ThisWeekEventsContainer>
        <TitleContainerEvents>
          <TitleWeekEvents>Esta semana</TitleWeekEvents>
        </TitleContainerEvents>
        {thisWeekEvents?.map((event, index) => {
          return (
            <Event key={index} onClick={() => handleClickEventNavigate(event)}>
              <EventImgContainer>
                <EventImg src={event.picture} alt={event.title} />
              </EventImgContainer>
              <EventInfoContainer>
                <EventInfoTitle>{event.title}</EventInfoTitle>
                <EventInfo>{event.info}</EventInfo>
                <EventInfoLocation>{event.location}</EventInfoLocation>
              </EventInfoContainer>
            </Event>
          );
        })}
      </ThisWeekEventsContainer>
      <NextWeekEventsContainer>
        <TitleContainerEvents>
          <TitleWeekEvents>Proximas semana</TitleWeekEvents>
        </TitleContainerEvents>
        <EventsContainer>
          {nextWeekEvents?.map((event, index) => {
            return (
              <Event
                key={index}
                onClick={() => handleClickEventNavigate(event)}
              >
                <EventImgContainer>
                  <EventImg src={event.picture} alt={event.title} />
                </EventImgContainer>
                <EventInfoContainer>
                  <EventInfoTitle>{event.title}</EventInfoTitle>
                  <EventInfo>{event.info}</EventInfo>
                  <EventInfoLocation>{event.location}</EventInfoLocation>
                </EventInfoContainer>
              </Event>
            );
          })}
        </EventsContainer>
      </NextWeekEventsContainer>
    </EventsContainer>
  );
};

export default Events;
