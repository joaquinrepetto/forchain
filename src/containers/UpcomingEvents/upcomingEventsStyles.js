import styled from "styled-components";
import theme from "../../theme";

export const UpcomingEventContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UpcomingEvent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const EventDetail = styled.div`
  flex: 1;
  
`;

export const FlyerContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  height: 250px;
`;

export const Flyer = styled.img`
  width: 100%;
  height: 100%;
`;

export const PictureContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.purpleBorder};
  overflow: hidden;
`;

export const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const EventTitle = styled.h3`
  font-size: 16px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-bottom: 0px;
`;

export const EventInfo = styled.p`
  font-size: 10px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  margin-top: 2px;
`;

export const IconContainer = styled.div`
  width: 10px;
  height: 10px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventDescriptionContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  gap: 10px;
`;
