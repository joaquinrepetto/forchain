import React from "react";
import PurpleButton from "../Button/PurpleButton";
import {
  MyEventsContainer,
  EventLine,
  EventLineContainer,
  ContainerActionButton,
  ContainerBtns,
} from "../../containers/Profile/profileStyles";
import { TitleH2 } from "../Global/globalStyles";
import {
  EventImgContainer,
  EventInfo,
  EventInfoContainer,
  EventInfoLocation,
  EventsContainer,
  Event,
  EventImg,
  EventInfoTitle,
} from "../../containers/Tickets/ticketsStyles";
import theme from "../../theme";

const MyEvents = () => {
  return (
    <MyEventsContainer>
      <PurpleButton>Crear evento</PurpleButton>
      <EventLineContainer>
        <EventLine />
      </EventLineContainer>
      <TitleH2>Mis eventos</TitleH2>
      <EventsContainer>
        <Event>
          <EventImgContainer>
            <EventImg src="https://framerusercontent.com/images/SG9mqUGOp1NtHIpIEpN7d5yGt2E.png" />
          </EventImgContainer>
          <EventInfoContainer>
            <EventInfoTitle>SDCONF</EventInfoTitle>
            <EventInfo>Sábado 11 de Noviembre | 18.00 hs</EventInfo>
            <EventInfoLocation>La Plata</EventInfoLocation>
          </EventInfoContainer>
          <ContainerBtns>
            <ContainerActionButton bgColor={theme.colors.purpleBorder}>
              ✏️
            </ContainerActionButton>
            <ContainerActionButton bgColor={theme.colors.inactive}>
              🗑️
            </ContainerActionButton>
          </ContainerBtns>
        </Event>
      </EventsContainer>
    </MyEventsContainer>
  );
};

export default MyEvents;
