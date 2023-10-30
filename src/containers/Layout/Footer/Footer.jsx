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
import homeIconPurple from "../../../assets/imgs/home-icon-purple.png";
import searchIcon from "../../../assets/imgs/search-icon-white.png";
import ticketIcon from "../../../assets/imgs/ticket-icon-white.png";
import ticketIconPurple from "../../../assets/imgs/ticket-icon-purple.png";
import userIcon from "../../../assets/imgs/user-icon-white.png";
import userIconPurple from "../../../assets/imgs/user-icon-purple.png";
import { handleRedirect } from "../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [searchWindowOpen, setSearchWindowOpen] = useState(false);
  const [locationIcon, setLocationIcon] = useState();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/eventos/")) {
      setLocationIcon("eventos");
    } else if (location.pathname === "/") {
      setLocationIcon("home");
    } else if (location.pathname.includes("/tickets")) {
      setLocationIcon("tickets");
    } else if (location.pathname.includes("/profile")) {
      setLocationIcon("profile");
    }
  }, [location]);

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

  const handlerProfileNavigate = () => {
    handleRedirect(navigate, `/profile`);
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
            <Icon
              src={locationIcon === "home" ? homeIconPurple : homeIcon}
              onClick={handlerHomeNavigate}
            />
            <Icon src={searchIcon} onClick={() => setSearchWindowOpen(true)} />
            <Icon
              src={locationIcon === "tickets" ? ticketIconPurple : ticketIcon}
              onClick={handlerTicketsNavigate}
            />
            <Icon
              src={locationIcon === "profile" ? userIconPurple : userIcon}
              onClick={handlerProfileNavigate}
            />
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
