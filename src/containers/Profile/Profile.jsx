import { useState } from "react";
import Screen from "../../components/Screen/Screen";

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Información");

  const renderContent = (activeTab) => {
    if (activeTab === "Información") {
      return <h1>Información</h1>;
    } else if (activeTab === "Mis eventos") {
      return <h1>Mis eventos</h1>;
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
