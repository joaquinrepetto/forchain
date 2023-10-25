import React from "react";
import {
  ComponentSeparator,
  TitleH2,
} from "../../components/Global/globalStyles";
import UpcomingEventsComponent from "../../components/UpcomingEvents/UpcomingEventsComponent";
import { events } from "../../utils/data/upcoming/events";

const UpcomingEvents = () => {
  return (
    <ComponentSeparator>
      <TitleH2>Próximos eventos</TitleH2>
      {events.map((event, index) => (
        <UpcomingEventsComponent
          key={index}
          eventName={event.name}
          eventDescription={event.description}
          eventFlyerUrl={event.flyer}
          eventPictureUrl={event.picture}
        />
      ))}
    </ComponentSeparator>
  );
};

export default UpcomingEvents;
