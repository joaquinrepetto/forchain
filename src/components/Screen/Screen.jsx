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

const Screen = ({
  user,
  activeTab,
  setActiveTab,
  titleScreen,
  tabLabels = [],
  renderContent,
  subtitle,
  onClick,
}) => {
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
            <ButtonLogin onClick={onClick}>Iniciar sesión</ButtonLogin>
          </ButtonLoginContainer>
        </ScreenBodyUnlogged>
      )}
    </ScreenContainer>
  );
};

export default Screen;
