import React from "react";
import {
  PastEventImgContainer,
  PastEventImg,
  PastEventsContainer,
  PastEventTitle,
  SinglePastEventContainer,
  TitleContainerEvents,
  TitleWeekEvents,
} from "../../containers/Tickets/ticketsStyles";
import CreateNFT from "../../services/poap/CreateAsset";

const PastEvents = ({ pastEvents }) => {
  return (
    <>
      <TitleContainerEvents>
        <TitleWeekEvents>Proof of Attendance</TitleWeekEvents>
      </TitleContainerEvents>
      {/* <PastEventsContainer>
        {pastEvents?.map((event, index) => {
          return (
            <SinglePastEventContainer key={index}>
              <PastEventImgContainer>
                <PastEventImg src={event.picture} alt={event.title} />
              </PastEventImgContainer>
              <PastEventTitle>{event.title}</PastEventTitle>
            </SinglePastEventContainer>
          );
        })}
      </PastEventsContainer> */}
      <button onClick={CreateNFT}>Create NFT</button>
    </>
  );
};

export default PastEvents;
