import React from "react";
import {
  EventDetail,
  EventInfo,
  EventTitle,
  UpcomingEventContainer,
  FlyerContainer,
  Flyer,
  PictureContainer,
  Picture,
  IconContainer,
  Icon,
  EventDescriptionContainer,
  EventWrapper,
} from "../../containers/UpcomingEvents/upcomingEventsStyles";
import targetIcon from "../../assets/imgs/target-icon.png";
import checkIcon from "../../assets/imgs/check-icon.png";

const UpcomingEventsComponent = ({
  eventName,
  eventDescription,
  eventFlyerUrl,
  eventPictureUrl,
}) => {
  return (
    <UpcomingEventContainer>
      <EventWrapper>
        <PictureContainer>
          <Picture src={eventPictureUrl} />
        </PictureContainer>
        <EventDetail>
          <EventTitle>{eventName}</EventTitle>
          <EventDescriptionContainer>
            <IconContainer>
              <Icon src={targetIcon} />
            </IconContainer>
            <EventInfo>{eventDescription}</EventInfo>
            <IconContainer>
              <Icon src={checkIcon} />
            </IconContainer>
          </EventDescriptionContainer>
          <FlyerContainer>
            <Flyer src={eventFlyerUrl} />
          </FlyerContainer>
        </EventDetail>
      </EventWrapper>
    </UpcomingEventContainer>
  );
};

export default UpcomingEventsComponent;
