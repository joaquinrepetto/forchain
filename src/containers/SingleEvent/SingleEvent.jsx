import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils/data/upcoming/events";
import { ComponentSeparator } from "../../components/Global/globalStyles";
import SingleEventHeader from "../../components/SingleEvent/SingleEventHeader";
import SingleEventInfo from "../../components/SingleEvent/SingleEventInfo";
import SingleEventAbout from "../../components/SingleEvent/SingleEventAbout";
import Agenda from "../../components/SingleEvent/Agenda";

const SingleEvent = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === Number(id));

  return (
    <>
      <SingleEventHeader backgroundUrl={event?.flyer} />
      <ComponentSeparator>
        <SingleEventInfo
          date={event?.date}
          assistance={event?.assistance}
          title={event?.name}
          subtitle={event?.subtitle}
          picture={event?.picture}
          organizer={event?.organizer}
        />
      </ComponentSeparator>
      <ComponentSeparator>
        <SingleEventAbout
          dateAndTime={event?.dateAndTime}
          location={event?.location}
          eventDescription={event?.eventDescription}
        />
      </ComponentSeparator>
      <ComponentSeparator>
        <Agenda
          agendaItemTime={event?.agendaItemTime}
          speakerAvatar={event?.picture}
          speakerName={event?.speakerName}
          speakerPosition={event?.speakerPosition}
          agendaItemDescription={event?.agendaItemDescription}
        />
      </ComponentSeparator>
    </>
  );
};

export default SingleEvent;
