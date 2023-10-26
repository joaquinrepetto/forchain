import React from "react";
import {
  MainContainer,
  DateText,
  EventTitle,
  EventSubtitle,
  OrganizerContainer,
  OrganizerIcon,
  OrganizerText,
  AssistanceContainer,
  AssistanceIcon,
  DateIconContainer,
  ShareIconContainer,
  ShareIcon,
} from "../../containers/SingleEvent/singleEventStyles";
import FireIcon from "../../assets/imgs/fire-icon.png";
import ShareIconUrl from "../../assets/imgs/share-icon.png";

const SingleEventInfo = ({
  date,
  assistance,
  title,
  subtitle,
  picture,
  organizer,
}) => {
  return (
    <MainContainer>
      <DateIconContainer>
        <DateText>{date}</DateText>
        <ShareIconContainer>
          <ShareIcon src={ShareIconUrl} />
        </ShareIconContainer>
      </DateIconContainer>
      <AssistanceContainer>
        <AssistanceIcon src={FireIcon} alt="Icono de asistencias" />
        Asistencias: {assistance}
      </AssistanceContainer>
      <EventTitle>{title}</EventTitle>
      <EventSubtitle>{subtitle}</EventSubtitle>
      <OrganizerContainer>
        <OrganizerIcon src={picture} alt="Organizer" />
        <OrganizerText>Por {organizer}</OrganizerText>
      </OrganizerContainer>
    </MainContainer>
  );
};

export default SingleEventInfo;
