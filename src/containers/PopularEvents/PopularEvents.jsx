import React from "react";
import {
  PopularEventsContainer,
  EventImageContainer,
  EventImage,
  EventName,
  EventContainer,
} from "./popularEventsStyles";
import {
  TitleH2,
  ComponentSeparator,
} from "../../components/Global/globalStyles";
import { events } from "../../utils/data/events/events";

const PopularEvents = () => {
  return (
    <ComponentSeparator>
      <TitleH2>Eventos populares</TitleH2>
      <PopularEventsContainer>
        {events?.map((event, index) => (
          <EventContainer key={index}>
            <EventImageContainer>
              <EventImage src={event.image} />
            </EventImageContainer>
            <EventName>{event.name}</EventName>
          </EventContainer>
        ))}
      </PopularEventsContainer>
    </ComponentSeparator>
  );
};

export default PopularEvents;
