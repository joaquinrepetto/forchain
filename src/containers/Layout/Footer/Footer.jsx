import React, { useState } from "react";
import {
  TabsContainer,
  Tab,
  IconsContainer,
  Icon,
  ButtonPlus,
  FooterContainer,
  ButtonPlusContainer,
} from "./footerStyles";
import homeIcon from "../../../assets/imgs/home-icon-white.png";
import searchIcon from "../../../assets/imgs/search-icon-white.png";
import ticketIcon from "../../../assets/imgs/ticket-icon-white.png";
import userIcon from "../../../assets/imgs/user-icon-white.png";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <FooterContainer>
      <ButtonPlusContainer>
        <ButtonPlus
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {hovered ? "+ Crear evento" : "+"}
        </ButtonPlus>
      </ButtonPlusContainer>
      <TabsContainer>
        <Tab>
          <IconsContainer>
            <Icon src={homeIcon} />
            <Icon src={searchIcon} />
            <Icon src={ticketIcon} />
            <Icon src={userIcon} />
          </IconsContainer>
        </Tab>
      </TabsContainer>
    </FooterContainer>
  );
};

export default Footer;
