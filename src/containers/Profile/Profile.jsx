import { useState } from "react";
import Screen from "../../components/Screen/Screen";
import Info from "../../components/Profile/Info";
import MyEvents from "../../components/Profile/MyEvents";

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Información");

  const renderContent = (activeTab) => {
    if (activeTab === "Información") {
      return <Info />;
    } else if (activeTab === "Mis eventos") {
      return <MyEvents />;
    }
  };

  const onClickLogin = () => {};

  return (
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
  );
};

export default Profile;
