import React from "react";
import {
  EventInfoContainer,
  EventDateTime,
  EventInfoDescription,
  AboutTitle,
  SectionTitle,
} from "../../containers/SingleEvent/singleEventStyles";

const SingleEventAbout = ({ dateAndTime, location, eventDescription }) => {
  return (
    <EventInfoContainer>
      <AboutTitle>Sobre el evento</AboutTitle>
      <SectionTitle>Fecha y hora</SectionTitle>
      <EventDateTime>{dateAndTime}</EventDateTime>
      <SectionTitle>Ubicación</SectionTitle>
      <EventInfoDescription>{location}</EventInfoDescription>
      <SectionTitle>Descripción</SectionTitle>
      <EventInfoDescription>{eventDescription}</EventInfoDescription>
    </EventInfoContainer>
  );
};

export default SingleEventAbout;
