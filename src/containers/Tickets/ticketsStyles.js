import styled from "styled-components";
import theme from "../../theme";

export const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleTicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleTickets = styled.h1`
  color: ${theme.colors.nameText};
  font-size: 20px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-top: 17.5px;
`;

export const TicketsBodyLogged = styled.div``;
export const TicketTypesContainer = styled.div`
  margin-top: 20px;
`;
export const TicketTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;
export const EventsContainer = styled.div`
  margin-bottom: 150px;
`;
export const TitleContainerEvents = styled.div``;

export const NextWeekEventsContainer = styled.div``;

export const TicketsBodyUnlogged = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid 3px ${theme.colors.purpleBorder};
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 50px;
`;
export const SubTitle = styled.h2`
  color: ${theme.colors.nameText};
  font-size: 22px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin: 0;
`;
export const ButtonLoginContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ButtonLogin = styled.button`
  background-color: ${theme.colors.purpleBorder};
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;
export const ThisWeekEventsContainer = styled.div``;

export const TitleWeekEvents = styled.h1`
  color: ${theme.colors.nameText};
  font-size: 22px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ButtonTicketTypes = styled(({ isActive, ...rest }) => (
  <button {...rest} />
))`
  border: none;
  color: ${theme.colors.white};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  background-color: ${(props) =>
    props.isActive ? `${theme.colors.border}` : `transparent`};
  border-radius: 20px;
  padding: 10px 20px;
`;

export const Event = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 20px;
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
