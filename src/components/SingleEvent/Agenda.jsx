import React from "react";
import {
  AgendaContainer,
  SectionTitle,
  AgendaItemContainer,
  AgendaItemTime,
  SpeakerInfoContainer,
  SpeakerAvatar,
  SpeakerName,
  SpeakerPosition,
  AgendaItemDescription,
  SeeMoreLink,
  AgendaBorderContainer,
  ButtonAgenda,
} from "../../containers/SingleEvent/singleEventStyles";
import { ComponentSeparator } from "../Global/globalStyles";

const Agenda = ({
  agendaItemTime,
  speakerAvatar,
  speakerName,
  speakerPosition,
  agendaItemDescription,
}) => {
  return (
    <AgendaContainer>
      <SectionTitle>Agenda</SectionTitle>
      <AgendaItemContainer>
        <AgendaBorderContainer>
          <AgendaItemTime>{agendaItemTime}</AgendaItemTime>
          <SpeakerInfoContainer>
            <SpeakerAvatar src={speakerAvatar} alt="Speaker Avatar" />
            <SpeakerName>{speakerName}</SpeakerName>
            <SpeakerName>-</SpeakerName>
            <SpeakerPosition>{speakerPosition}</SpeakerPosition>
          </SpeakerInfoContainer>
          <AgendaItemDescription>{agendaItemDescription}</AgendaItemDescription>
          <SeeMoreLink href="#">Ver más</SeeMoreLink>
        </AgendaBorderContainer>
      </AgendaItemContainer>

      <AgendaItemContainer isbreak="isbreak">
        <AgendaBorderContainer isbreak="isbreak">
          <AgendaItemTime>12.00 a 13.00 hs</AgendaItemTime>
          <AgendaItemDescription>Recreo para almorzar</AgendaItemDescription>
        </AgendaBorderContainer>
      </AgendaItemContainer>

      <ComponentSeparator>
        <ButtonAgenda>Ver agenda completa</ButtonAgenda>
      </ComponentSeparator>
    </AgendaContainer>
  );
};

export default Agenda;
