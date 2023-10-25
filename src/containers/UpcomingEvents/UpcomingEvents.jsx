import React from "react";
import { TitleH2 } from "../../components/Globals/globalsStyles";
import {
  UpcomingEventContainer,
  EventDetail,
  EventTitle,
  EventInfo,
} from "./upcomingEventsStyles";

const UpcomingEvents = () => {
  return (
    <>
      <TitleH2>Próximos eventos</TitleH2>
      <UpcomingEventContainer>
        <div>Event Icon</div>
        <EventDetail>
          <EventTitle>GrowthHackers Conference</EventTitle>
          <EventInfo>Online | Mié 08 Nov 2023 | 09 hs</EventInfo>
        </EventDetail>
      </UpcomingEventContainer>
    </>
  );
};

export default UpcomingEvents;
