import { useState, useEffect } from "react";
import Screen from "../../components/Screen/Screen";
import Info from "../../components/Profile/Info";
import MyEvents from "../../components/Profile/MyEvents";
import Community from "../../components/Profile/Community";
import useProfile from "../../containers/Profile/useProfile";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("Información");
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showReadQrModal, setShowReadQrModal] = useState(false);
  const { getProfile, profile } = useProfile();
  const [data, setData] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  const handleFirstModal = () => {
    setShowFirstModal(!showFirstModal);
    setShowSecondModal(false);
  };

  const handleSecondModal = () => {
    setShowSecondModal(!showSecondModal);
  };

  const handleShowQrModalSet = () => {
    setShowReadQrModal(!showReadQrModal);
    setShowCamera(false);
  };

  const handleCloseModal = () => {
    setShowReadQrModal(false);
    setData(null);
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
    } else if (activeTab === "Comunidad") {
      return (
        <Community
          profile={profile}
          handleShowQrModalSet={handleShowQrModalSet}
          showReadQrModal={showReadQrModal}
          handleCloseModal={handleCloseModal}
          data={data}
          setData={setData}
          showCamera={showCamera}
          setShowCamera={setShowCamera}
        />
      );
    }
  };

  return (
    <Screen
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      titleScreen="Mi perfil"
      tabLabels={["Información", "Mis eventos", "Comunidad"]}
      renderContent={renderContent}
      subtitle="Necesitas inciar sesión para ver tu perfil"
    />
  );
};

export default Profile;
