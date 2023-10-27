import styled from "styled-components";
import theme from "../../theme";

export const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleTicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleTickets = styled.body`
  color: ${theme.colors.nameText};
  font-size: 20px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-top: 17.5px;
`;

export const TicketsBodyLogged = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const TicketTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const TicketTypes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const TitleContainerEvents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const Event = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;
export const NextWeekEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: calc(100vw - 40px);
`;

export const TicketsBodyUnlogged = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid 3px ${theme.colors.purpleBorder};
  justify-content: center;
  align-items: center;
  height: 46px;
  padding: 0px 13.5px;
  padding-bottom: 3.5px;
`;
export const SubTitle = styled.body`
  color: ${theme.colors.nameText};
  font-size: 22px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  width: 252px;
`;
export const ButtonLoginContainer = styled.div`
  display: flex;
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
export const ThisWeekEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  background-color:
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;

  width: calc(100vw - 40px);
`;

export const TitleWeekEvents = styled.body`
  color: ${theme.colors.nameText};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;

export const ButtonTicketTypes = styled.button`
  color: ${theme.colors.nameText};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;
