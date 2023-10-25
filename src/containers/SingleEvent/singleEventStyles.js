import styled from "styled-components";
import theme from "../../theme";

export const HeaderContainer = styled.div`
  position: relative;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-right: -20px;
  height: 250px;
  overflow: hidden;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BackArrowContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  padding: 10px;
`;

export const BackArrow = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  padding: 0 5px;
`;

export const DateText = styled.p`
  font-size: 16px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const DateIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EventTitle = styled.h1`
  font-size: 37px;
  margin-bottom: 10px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
`;

export const EventSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const OrganizerContainer = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkBlue};
  padding: 10px 20px;
  border-radius: 28px;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.border};
`;

export const OrganizerIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid ${theme.colors.purpleBorder};
`;

export const OrganizerText = styled.span`
  font-size: 18px;
  color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
`;

export const AssistanceContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.orange};
  padding: 3px 10px;
  border-radius: 10px;
  width: fit-content;
  font-family: "Poppins", sans-serif;
`;

export const AssistanceIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ShareIconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const ShareIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const EventInfoContainer = styled.div`
  padding: 0 5px;
  margin-top: 15px;
`;

export const EventDateTime = styled.p`
  font-size: 16px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const EventInfoDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const AboutTitle = styled.h2`
  font-size: 30px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AgendaContainer = styled.div`
  margin-top: 15px;
`;

export const AgendaItemContainer = styled.div`
  background-color: ${(props) =>
    props.isBreak ? `${theme.colors.white}` : `${theme.colors.softLilac}`};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const AgendaBorderContainer = styled.div`
  border-left: ${(props) =>
    props.isBreak
      ? `1px solid ${theme.colors.darkBlue}`
      : `1px solid ${theme.colors.purpleBorder}`};
  padding-left: 10px;
`;

export const AgendaItemTime = styled.p`
  font-size: 12px;
  color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const SpeakerInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: solid ${theme.colors.white};
  border-width: 1px;
  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const SpeakerAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.purpleBorder};
`;

export const SpeakerName = styled.p`
  font-size: 10px;
  color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
`;

export const SpeakerPosition = styled.p`
  font-size: 10px;
  color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
`;

export const AgendaItemDescription = styled.p`
  font-size: 10px;
  color: ${theme.colors.darkBlue};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin: 0;
`;

export const SeeMoreLink = styled.a`
  color: ${theme.colors.white};
  margin-top: 5px;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  font-family: "Poppins", sans-serif;
  font-size: 10px;
`;

export const ButtonAgenda = styled.button`
  background: none;
  border: 1px solid ${theme.colors.purpleBorder};
  margin: 0 auto;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  border-radius: 15px;
  padding: 10px 20px;
`;
