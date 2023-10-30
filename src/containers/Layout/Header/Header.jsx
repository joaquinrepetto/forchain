import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderStyled,
  Logo,
  MenuButton,
  ProfileIconImg,
  ProfileIconAndMenu,
} from "./headerStyles";
import { TitleH2 } from "../../../components/Global/globalStyles.js";
import LoginWindow from "./LoginWindow";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import profileIcon from "../../../assets/imgs/Wallet-icon.png";
import { handleRedirect } from "../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import Menu from "./Menu/Menu";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [isPathEvent, setIsPathEvent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/eventos/")) {
      setIsPathEvent(true);
    } else {
      setIsPathEvent(false);
    }
  }, [location]);

  const handlerHome = () => {
    handleRedirect(navigate, `/`);
  };

  const handleCloseForm = () => {
    setShowModal(false);
  };

  return (
    <HeaderStyled>
      <Logo src={forchainLogo} onClick={handlerHome} />
      {user && isPathEvent ? (
        <>
          <ProfileIconAndMenu>
            <ProfileIconImg src={profileIcon} />
            <MenuButton src={menuIcon} onClick={() => setShowModal(true)} />
          </ProfileIconAndMenu>
          {showModal && (
            <Modal handleCloseForm={handleCloseForm}>
              <Menu user={user} />
            </Modal>
          )}
        </>
      ) : user && !isPathEvent ? (
        <ProfileIconImg src={profileIcon} />
      ) : !user && isPathEvent ? (
        <>
          <MenuButton src={menuIcon} onClick={() => setShowModal(true)} />
          {showModal && (
            <Modal handleCloseForm={handleCloseForm}>
              <Menu user={user} />
            </Modal>
          )}
        </>
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
