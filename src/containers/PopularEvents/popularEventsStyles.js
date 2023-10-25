import styled from "styled-components";
import theme from "../../theme";

export const PopularEventsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 15px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none; /* Para Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari y Opera */
  }
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const EventImageContainer = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border: 2px solid ${theme.colors.purpleBorder};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const EventImage = styled.img`
  min-width: 100%;
  min-height: 100%;
`;

export const EventName = styled.span`
  font-size: 10px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
