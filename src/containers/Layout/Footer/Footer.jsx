import React, { useEffect, useState } from "react";
import SearchWindow from "./SearchWindow";
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
  const [searchWindowOpen, setSearchWindowOpen] = useState(false);

  useEffect(() => {
    if (searchWindowOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [searchWindowOpen]);

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
            <Icon src={searchIcon} onClick={() => setSearchWindowOpen(true)} />
            <Icon src={ticketIcon} />
            <Icon src={userIcon} />
          </IconsContainer>
          {searchWindowOpen ? (
            <SearchWindow setSearchWindowOpen={setSearchWindowOpen} />
          ) : null}
        </Tab>
      </TabsContainer>
    </FooterContainer>
  );
};

export default Footer;
