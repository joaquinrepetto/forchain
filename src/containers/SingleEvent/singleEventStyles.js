import styled, { css } from "styled-components";
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
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const AgendaContainer = styled.div`
  margin-top: 15px;
`;

export const AgendaItemContainer = styled.div`
  background-color: ${(props) =>
    props.isbreak ? `${theme.colors.white}` : `${theme.colors.softLilac}`};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const AgendaBorderContainer = styled.div`
  border-left: ${(props) =>
    props.isbreak
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

export const SpeakersUl = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SpeakerLi = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
`;

export const SpeakerIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const SponsorPictureContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
`;

export const SponsorPicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${theme.colors.purpleBorder};
`;

export const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 30px;
`;

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-bottom: 300px;
`;

export const TagSpan = styled.span`
  font-size: 8px;
  font-family: "Poppins", sans-serif;
  background-color: ${theme.colors.white};
  color: ${theme.colors.darkBlue};
  padding: 5px 10px;
  border-radius: 20px;
  text-align: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.modalBackground};
  width: calc(100% - 40px);
  position: fixed;
  bottom: 0;
  padding: 20px;
  margin-left: -20px;
  margin-right: -20px;
  z-index: 998;
`;

export const TicketCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border: 1px solid ${theme.colors.purpleBorder};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
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

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc; /* Set a background color for the disabled state */
      color: #666; /* Set a different text color for the disabled state */
      cursor: not-allowed; /* Change cursor to not-allowed for the disabled state */
    `}
`;

export const TicketButtonsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const GeneralTicket = styled.h3`
  margin-top: 0;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  white-space: nowrap;
`;

export const GeneralTicketContainer = styled.div``;

export const CountSpan = styled.span`
  margin-top: 0;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const MinusButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.minusColor};
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const PlusButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.purpleBorder};
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  background-color: ${theme.colors.darkBlue};
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: -20px;
  margin-right: -20px;
  top: 0;
  overflow: auto;
`;

export const ContainerLogoAndClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ContainerLogo = styled.div`
  width: 138px;
  height: 25px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.5px solid ${theme.colors.titleText};
  width: 100%;
  margin-bottom: 40px;
`;

export const TitleForm = styled.h2`
  font-size: 20px;
  color: ${theme.colors.titleText};
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const SubtitleForm = styled.p`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: ${theme.colors.titleText};
  margin-top: 0px;
`;

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const CloseIconContainer = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const CloseIcon = styled.img`
  width: 100%;
  height: 100%;
`;
