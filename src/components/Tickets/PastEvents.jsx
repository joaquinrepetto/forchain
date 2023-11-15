import React from "react";
import {
  PastEventImgContainer,
  PastEventImg,
  PastEventsContainer,
  PastEventTitle,
  SinglePastEventContainer,
  TitleContainerEvents,
  TitleWeekEvents,
  EventAttendedContainer,
  ImageContainer,
  ContentContainer,
  EventTitle,
  ClaimButton,
  Content,
  PastEventsStyled,
} from "../../containers/Tickets/ticketsStyles";
import useTickets from "../../containers/Tickets/useTickets";

const PastEvents = ({ nfts, isLoading, onNewNFTCreated }) => {
  const { createNFT, isCreatingNft } = useTickets();

  const handleClaimNft = async (eventName) => {
    createNFT(eventName).finally(() => {
      onNewNFTCreated();
    });
  };

  return (
    <PastEventsStyled>
      <TitleContainerEvents>
        <TitleWeekEvents>Proof of Attendance</TitleWeekEvents>
      </TitleContainerEvents>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
          {nfts?.length > 0 ? (
            <>
              <PastEventsContainer>
                {nfts.map((nft, index) => (
                  <SinglePastEventContainer key={index}>
                    <PastEventImgContainer>
                      <PastEventImg
                        src={nft.assetDetails.params.url}
                        alt={nft.assetDetails.params.name}
                      />
                    </PastEventImgContainer>
                    <PastEventTitle>
                      {nft.assetDetails.params.name}
                    </PastEventTitle>
                  </SinglePastEventContainer>
                ))}
              </PastEventsContainer>
            </>
          ) : (
            <div>No asististe a ningún evento</div>
          )}
        </>
      )}
      <TitleContainerEvents>
        <TitleWeekEvents>Eventos que asististe</TitleWeekEvents>
      </TitleContainerEvents>
      <EventAttendedContainer>
        <ImageContainer imageurl="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/mIEf8zjtQWSyrpPJ1lgn" />
        <ContentContainer>
          <Content>
            <EventTitle>GrowthHackers Conferencia 2023</EventTitle>
            <ClaimButton onClick={() => handleClaimNft("Evento")}>
              {isCreatingNft ? "Claiming..." : "Claim Proof of Attendance"}
            </ClaimButton>
          </Content>
        </ContentContainer>
      </EventAttendedContainer>
    </PastEventsStyled>
  );
};

export default PastEvents;
