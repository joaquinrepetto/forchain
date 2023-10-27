import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils/data/upcoming/events";
import { ComponentSeparator } from "../../components/Global/globalStyles";
import SingleEventHeader from "../../components/SingleEvent/SingleEventHeader";
import SingleEventInfo from "../../components/SingleEvent/SingleEventInfo";
import SingleEventAbout from "../../components/SingleEvent/SingleEventAbout";
import Agenda from "../../components/SingleEvent/Agenda";
import Speakers from "../../components/SingleEvent/Speakers";
import Sponsors from "../../components/SingleEvent/Sponsors";
import Tags from "../../components/SingleEvent/Tags";
import TicketSelectionModal from "../../components/SingleEvent/TicketSelectionModal";

const SingleEvent = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === Number(id));
  const [ticketsCount, setTicketsCount] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTicketConfirmationOpen, setIsTicketConfirmationOpen] =
    useState(false);

  const handleGetTickets = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleTicketConfirmation = () => {
    setIsTicketConfirmationOpen(true);
  };

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFormOpen]);

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
      <ComponentSeparator>
        <Speakers speakers={event?.speakers} />
      </ComponentSeparator>
      <ComponentSeparator>
        <Sponsors sponsors={event?.sponsors} />
      </ComponentSeparator>
      <ComponentSeparator>
        <Tags tags={event?.tags} />
      </ComponentSeparator>
      <TicketSelectionModal
        handleGetTickets={handleGetTickets}
        ticketsCount={ticketsCount}
        setTicketsCount={setTicketsCount}
        isFormOpen={isFormOpen}
        handleCloseForm={handleCloseForm}
        isTicketConfirmationOpen={isTicketConfirmationOpen}
        handleTicketConfirmation={handleTicketConfirmation}
        event={event}
      />
    </>
  );
};

export default SingleEvent;
