import React from "react";
import {
  HeaderContainer,
  BackgroundImage,
  BackArrow,
  BackArrowContainer,
} from "../../containers/SingleEvent/singleEventStyles";
import LeftArrow from "../../assets/imgs/arrow-left.png";

const SingleEventHeader = ({ backgroundUrl }) => {
  return (
    <HeaderContainer>
      <BackgroundImage src={backgroundUrl} />
      <BackArrowContainer>
        <BackArrow src={LeftArrow} onClick={() => window.history.back()} />
      </BackArrowContainer>
    </HeaderContainer>
  );
};

export default SingleEventHeader;
