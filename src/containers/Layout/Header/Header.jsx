import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderStyled,
  Logo,
  MenuButton,
  ProfileIconImg,
  ProfileIconAndMenu,
} from "./headerStyles";
import { Clickable, TitleH2 } from "../../../components/Global/globalStyles.js";
import forchainLogo from "../../../assets/imgs/forchain-blanco-logo.png";
import menuIcon from "../../../assets/imgs/menu-header.png";
import profileIcon from "../../../assets/imgs/Wallet-icon.png";
import { handleRedirect } from "../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal/Modal";
import Menu from "./Menu/Menu";
import SearchWindow from "../../SearchWindow/SearchWindow";
import { useUser } from "../../../containers/Context/UserContext.js";
import useAuth from "../../Auth/useAuth.jsx";
import useAuthListener from "../../Auth/useAuthListener.jsx";

const Header = () => {
  const { isLoading } = useUser();
  const { handleConnect } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isPathEvent, setIsPathEvent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchWindowOpen, setSearchWindowOpen] = useState(false);

  const user = useAuthListener();

  useEffect(() => {
    if (location.pathname.includes("/events/")) {
      setIsPathEvent(true);
    } else {
      setIsPathEvent(false);
    }
  }, [location]);

  const handlerHome = () => {
    handleRedirect(navigate, `/`);
  };

  const handleProfileNavigation = () => {
    handleRedirect(navigate, "/profile");
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
            <ProfileIconImg
              src={profileIcon}
              onClick={() => handleProfileNavigation()}
            />
            <MenuButton src={menuIcon} onClick={() => setShowModal(true)} />
          </ProfileIconAndMenu>
          {showModal && (
            <Modal handleCloseForm={handleCloseForm}>
              <Menu
                user={user}
                setSearchWindowOpen={setSearchWindowOpen}
                searchWindowOpen={searchWindowOpen}
                handleCloseForm={handleCloseForm}
              />
            </Modal>
          )}
        </>
      ) : user && !isPathEvent ? (
        <ProfileIconImg
          src={profileIcon}
          onClick={() => handleProfileNavigation()}
        />
      ) : !user && isPathEvent ? (
        <>
          <MenuButton src={menuIcon} onClick={() => setShowModal(true)} />
          {showModal && (
            <Modal handleCloseForm={handleCloseForm}>
              <Menu
                user={user}
                setSearchWindowOpen={setSearchWindowOpen}
                searchWindowOpen={searchWindowOpen}
                handleCloseForm={handleCloseForm}
              />
            </Modal>
          )}
        </>
      ) : (
        <Clickable>
          {isLoading ? (
            <TitleH2 style={{ fontSize: "14px", paddingTop: "10px" }}>
              Loading...
            </TitleH2>
          ) : (
            <TitleH2
              style={{ fontSize: "14px", paddingTop: "10px" }}
              onClick={() => handleConnect()}
            >
              Iniciar sesión
            </TitleH2>
          )}
        </Clickable>
      )}

      {searchWindowOpen && (
        <SearchWindow setSearchWindowOpen={setSearchWindowOpen}></SearchWindow>
      )}
    </HeaderStyled>
  );
};

export default Header;
