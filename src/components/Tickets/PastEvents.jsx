import React from "react";
import {
  PastEventImgContainer,
  PastEventImg,
  PastEventsContainer,
  PastEventTitle,
  SinglePastEventContainer,
  TitleContainerEvents,
  TitleWeekEvents,
} from "../../containers/Tickets/ticketsStyles";

const PastEvents = ({ pastEvents }) => {
  return (
    <>
      <TitleContainerEvents>
        <TitleWeekEvents>Proof of Attendance</TitleWeekEvents>
      </TitleContainerEvents>
      <PastEventsContainer>
        {pastEvents?.map((event, index) => {
          return (
            <SinglePastEventContainer key={index}>
              <PastEventImgContainer>
                <PastEventImg src={event.picture} alt={event.title} />
              </PastEventImgContainer>
              <PastEventTitle>{event.title}</PastEventTitle>
            </SinglePastEventContainer>
          );
        })}
      </PastEventsContainer>
    </>
  );
};

export default PastEvents;
