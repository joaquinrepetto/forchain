import React from "react";
import {
  ScreenContainer,
  TitleScreenContainer,
  TitleScreen,
  ScreenBodyLogged,
  ScreenTypesContainer,
  ScreenTypes,
  ButtonScreenTypes,
  ScreenBodyUnlogged,
  SubtitleScreenContainer,
  SubtitleScreen,
  ButtonLoginContainer,
  ButtonLogin,
} from "../Global/globalStyles";
import { useUser } from "../../containers/Context/UserContext";
import useAuth from "../../containers/Auth/useAuth";
import useAuthListener from "../../containers/Auth/useAuthListener";

const Screen = ({
  activeTab,
  setActiveTab,
  titleScreen,
  tabLabels = [],
  renderContent,
  subtitle,
}) => {
  const { isLoading } = useUser();
  const { handleConnect } = useAuth();

  const user = useAuthListener();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ScreenContainer>
      <TitleScreenContainer>
        <TitleScreen>{titleScreen}</TitleScreen>
      </TitleScreenContainer>
      {user ? (
        <ScreenBodyLogged>
          <ScreenTypesContainer>
            <ScreenTypes>
              {tabLabels.map((label, index) => (
                <ButtonScreenTypes
                  key={index}
                  isActive={activeTab === label}
                  onClick={() => setActiveTab(label)}
                >
                  {label}
                </ButtonScreenTypes>
              ))}
            </ScreenTypes>
          </ScreenTypesContainer>
          {renderContent(activeTab)}
        </ScreenBodyLogged>
      ) : (
        <ScreenBodyUnlogged>
          <SubtitleScreenContainer>
            <SubtitleScreen>{subtitle}</SubtitleScreen>
          </SubtitleScreenContainer>
          <ButtonLoginContainer>
            <ButtonLogin onClick={() => handleConnect()}>
              Iniciar sesión
            </ButtonLogin>
          </ButtonLoginContainer>
        </ScreenBodyUnlogged>
      )}
    </ScreenContainer>
  );
};

export default Screen;
