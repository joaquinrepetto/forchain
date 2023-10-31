import { useState } from "react";
import Screen from "../../components/Screen/Screen";
import Info from "../../components/Profile/Info";
import MyEvents from "../../components/Profile/MyEvents";
import LoginWindow from "../Layout/Header/LoginWindow";

const Profile = ({ user, setUser }) => {
  const [activeTab, setActiveTab] = useState("Información");
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleFirstModal = () => {
    setShowFirstModal(!showFirstModal);
    setShowSecondModal(false);
  };

  const handleSecondModal = () => {
    setShowSecondModal(!showSecondModal);
  };

  const renderContent = (activeTab) => {
    if (activeTab === "Información") {
      return <Info />;
    } else if (activeTab === "Mis eventos") {
      return (
        <MyEvents
          handleFirstModal={handleFirstModal}
          showFirstModal={showFirstModal}
          handleSecondModal={handleSecondModal}
          showSecondModal={showSecondModal}
        />
      );
    }
  };

  const onClickLogin = () => {
    setShowLogin(true);
  };

  return (
    <>
      <Screen
        user={user}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleScreen="Mi perfil"
        tabLabels={["Información", "Mis eventos"]}
        renderContent={renderContent}
        subtitle="Necesitas inciar sesión para ver tu perfil"
        onClick={onClickLogin}
      />
      {showLogin && (
        <LoginWindow setUser={setUser} setShowLogin={setShowLogin} />
      )}
    </>
  );
};

export default Profile;
