import React from "react";
import { LoginWindowContainer, WindowContainer, Logo } from "./headerStyles";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";

const LoginWindow = ({ user, setUser, setShowLogin }) => {
  return (
    <LoginWindowContainer>
      <WindowContainer>
        <button onClick={() => setShowLogin(false)}>X</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Logo src={forchainLogo} />
          <button
            onClick={() => {
              setUser(true);
              setShowLogin(false);
            }}
          >
            Login
          </button>
        </div>
      </WindowContainer>
    </LoginWindowContainer>
  );
};

export default LoginWindow;
