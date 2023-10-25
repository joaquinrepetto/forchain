import React, { useState } from "react";
import { HeaderStyled, Logo, Menu } from "./headerStyles";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import { TitleH2 } from "../../../components/Global/globalStyles.js";
import LoginWindow from "./LoginWindow";

const Header = ({ user, setUser }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <HeaderStyled>
      <Logo src={forchainLogo} />
      {user ? (
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
