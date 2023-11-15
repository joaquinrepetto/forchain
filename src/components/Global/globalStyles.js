import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  color: white;
  padding: 20px;
  padding-bottom: 0px;
`;

export const TitleH2 = styled.h2`
  color: ${theme.colors.titleText};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
`;

export const TitleAddress = styled.h2`
  color: ${theme.colors.titleText};
  font-size: 14px;
  font-family: "Codec Pro", sans-serif;
`;

export const ComponentSeparator = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;

export const PurpleButton = styled.button`
  background-color: ${theme.colors.purpleBorder};
  border: none;
  width: 360px;
  height: 54px;
  padding: 12px 106px;
  border-radius: 17px;
  font-family: "Codec Pro", sans-serif;
  color: white;
  font-size: 21px;
`;

// ---------------------------------------------------------  SCREEN COMPONENT

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleScreen = styled.h1`
  color: ${theme.colors.nameText};
  font-size: 20px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-top: 17.5px;
`;

export const ScreenBodyLogged = styled.div``;

export const ScreenTypesContainer = styled.div`
  margin-top: 20px;
`;

export const ScreenTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;

export const ButtonScreenTypes = styled(({ isActive, ...rest }) => (
  <button {...rest} />
))`
  border: none;
  color: ${theme.colors.white};
  font-size: max(1vw, 8.5px);

  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  background-color: ${(props) =>
    props.isActive ? `${theme.colors.inactive}` : `transparent`};
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const ScreenBodyUnlogged = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;

export const SubtitleScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: solid 3px ${theme.colors.purpleBorder};
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  width: 80%;
  margin-bottom: 50px;
`;

export const SubtitleScreen = styled.h2`
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
  color: ${theme.colors.white};
  padding: 15px 20px;
  border: none;
  border-radius: 17px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;
