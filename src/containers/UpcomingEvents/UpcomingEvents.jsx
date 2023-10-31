import React from "react";
import {
  ComponentSeparator,
  TitleH2,
  Clickable,
} from "../../components/Global/globalStyles";
import UpcomingEventsComponent from "../../components/UpcomingEvents/UpcomingEventsComponent";
import { events } from "../../utils/data/upcoming/events";
import { useNavigate } from "react-router-dom";
import { handleRedirect } from "../../utils/navigate/handleRedirect";

const UpcomingEvents = () => {
  const navigate = useNavigate();
  return (
    <ComponentSeparator>
      <TitleH2>Próximos eventos</TitleH2>
      {events.map((event, index) => (
        <Clickable
          key={index}
          onClick={() => {
            handleRedirect(navigate, `/events/${event.id}`);
          }}
        >
          <UpcomingEventsComponent
            eventName={event.name}
            eventDescription={event.description}
            eventFlyerUrl={event.flyer}
            eventPictureUrl={event.picture}
          />
        </Clickable>
      ))}
    </ComponentSeparator>
  );
};

export default UpcomingEvents;
