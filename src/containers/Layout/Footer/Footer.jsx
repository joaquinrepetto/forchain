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
import { handleRedirect } from "../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
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

  const handlerHomeNavigate = () => {
    handleRedirect(navigate, `/`);
  };

  const handlerTicketsNavigate = () => {
    handleRedirect(navigate, `/tickets`);
  };

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
            <Icon src={homeIcon} onClick={handlerHomeNavigate} />
            <Icon src={searchIcon} onClick={() => setSearchWindowOpen(true)} />
            <Icon src={ticketIcon} onClick={handlerTicketsNavigate} />
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
