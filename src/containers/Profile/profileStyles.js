import styled from "styled-components";
import theme from "../../theme";

// ------------ Information

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
`;

export const ProfileImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;

// ------------ MyEvents

export const MyEventsContainer = styled.div``;

export const EventLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EventLine = styled.div`
  width: 80%;
  height: 0.5px;
  background-color: ${theme.colors.border};
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ContainerActionButton = styled.div`
  background-color: ${(props) => props.bgColor || "defaultColor"};
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const ContainerBtns = styled.div``;
