import React, { useState } from "react";
import { HeaderStyled, Logo, Menu, ProfileIconImg } from "./headerStyles";
import { TitleH2 } from "../../../components/Global/globalStyles.js";
import LoginWindow from "./LoginWindow";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import profileIcon from "../../../assets/imgs/Wallet-icon.png";

const Header = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <HeaderStyled>
      <Logo src={forchainLogo} />
      {user ? (
        <ProfileIconImg src={profileIcon} />
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
