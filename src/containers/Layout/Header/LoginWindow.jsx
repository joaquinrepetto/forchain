import React from "react";
import {
  LoginWindowContainer,
  WindowContainer,
  CloseWindowButton,
  Logo,
} from "./headerStyles";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import { TitleH2 } from "../../../components/Global/globalStyles.js";

const LoginWindow = ({ user, setUser, setShowLogin }) => {
  return (
    <LoginWindowContainer>
      <WindowContainer>
        <button onClick={() => setShowLogin(false)}>X</button>
        <div>
          <Logo src={forchainLogo} />
          <button onClick={() => setUser(true)}>Login</button>
        </div>
      </WindowContainer>
    </LoginWindowContainer>
  );
};

export default LoginWindow;
