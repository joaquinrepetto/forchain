import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderStyled, Logo, Menu, ProfileIconImg } from "./headerStyles";
import { TitleH2 } from "../../../components/Global/globalStyles.js";
import LoginWindow from "./LoginWindow";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import profileIcon from "../../../assets/imgs/Wallet-icon.png";

const Header = ({ user, setUser }) => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [isPathEvent, setIsPathEvent] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/eventos/")) {
      setIsPathEvent(true);
    } else {
      setIsPathEvent(false);
    }
  }, [location]);

  return (
    <HeaderStyled>
      <Logo src={forchainLogo} />
      {user && isPathEvent ? (
        <div>
          <ProfileIconImg src={profileIcon} />
          <Menu src={menuIcon} />
        </div>
      ) : user && !isPathEvent ? (
        <ProfileIconImg src={profileIcon} />
      ) : !user && isPathEvent ? (
        <Menu src={menuIcon} />
      ) : (
        <TitleH2
          style={{ fontSize: "14px", paddingTop: "10px" }}
          onClick={() => setShowLogin(true)}
        >
          Iniciar sesión
        </TitleH2>
      )}
      {showLogin ? (
        <LoginWindow
          user={user}
          setUser={setUser}
          setShowLogin={setShowLogin}
        ></LoginWindow>
      ) : null}
    </HeaderStyled>
  );
};

export default Header;
