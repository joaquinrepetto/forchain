import React from "react";
import {
  PopularEventsContainer,
  Event,
  EventImage,
} from "./popularEventsStyles";
import { TitleH2 } from "../../components/Globals/globalsStyles";

const PopularEvents = () => {
  return (
    <>
      <TitleH2>Eventos populares</TitleH2>
      <PopularEventsContainer>
        <Event>
          <EventImage src="path_to_image.jpg" alt="Event" />
          <span>Event name</span>
        </Event>
      </PopularEventsContainer>
    </>
  );
};

export default PopularEvents;
