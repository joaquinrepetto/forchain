import styled from "styled-components";
import theme from "../../theme";

export const EventsContainer = styled.div`
  margin-bottom: 150px;
`;
export const TitleContainerEvents = styled.div``;

export const NextWeekEventsContainer = styled.div``;

export const ThisWeekEventsContainer = styled.div``;

export const TitleWeekEvents = styled.h1`
  color: ${theme.colors.nameText};
  font-size: 22px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Event = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 20px;
  border: solid 1px ${theme.colors.border};
`;

export const EventImgContainer = styled.div`
  flex: 0 0 30%;
  overflow: hidden;
  line-height: 0;
`;

export const EventImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.white};
  color: black;
`;

export const EventInfoTitle = styled.h3`
  font-size: 20px;
  color: ${theme.colors.darkBlue};
  margin: 0;
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
`;

export const EventInfo = styled.h3`
  font-size: 10px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  margin-top: 5px;
`;

export const EventInfoLocation = styled.h4`
  font-size: 10px;
  color: ${theme.colors.purpleBorder};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const PastEventImgContainer = styled.div`
  width: 105px;
  height: 105px;
`;

export const PastEventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const PastEventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 30px;
`;

export const PastEventTitle = styled.h3`
  font-size: 12px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const SinglePastEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Single Ticket

export const FlyerTicketContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
`;
export const FlyerTicket = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TicketContainer = styled.div`
  background-color: ${theme.colors.white};
  margin-right: -20px;
  margin-left: -20px;
`;

export const TicketQRCode = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 20px;
`;

export const YourTicketOnlineFor = styled.h3`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.purpleBorder};
`;

export const TicketInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding-bottom: 10px;
  border-bottom: solid 1px ${theme.colors.nameText};
`;

export const TicketInfoTitle = styled.h3`
  font-size: 29px;
  font-family: "Codec Pro", sans-serif;
  color: ${theme.colors.darkBlue};
  margin: 0;
  text-align: center;
  line-height: 1.2;
`;

export const TicketInfoLocation = styled.h4`
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.nameText};
  font-weight: 400;
  margin: 0;
  margin-top: 5px;
`;

export const ShowYourTicket = styled.h3`
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.darkBlue};
  margin: 0;
  font-weight: 400;
`;

export const QRContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
`;
