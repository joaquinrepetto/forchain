import { useState } from "react";
import {
  thisWeekEvents,
  nextWeekEvents,
  pastEvents,
} from "../../utils/data/tickets/tickets";
import Events from "../../components/Tickets/Events";
import PastEvents from "../../components/Tickets/PastEvents";
import { handleRedirect } from "../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";
import Screen from "../../components/Screen/Screen";
import LoginWindow from "../Layout/Header/LoginWindow";

const Tickets = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Próximos");
  const [showLogin, setShowLogin] = useState(false);

  const handleClickEventNavigate = (event) => {
    handleRedirect(navigate, `/tickets/${event.id}`);
  };

  const renderContent = (activeTab) => {
    if (activeTab === "Próximos") {
      return (
        <Events
          thisWeekEvents={thisWeekEvents}
          nextWeekEvents={nextWeekEvents}
          handleClickEventNavigate={handleClickEventNavigate}
        />
      );
    } else if (activeTab === "Pasados") {
      return <PastEvents pastEvents={pastEvents} />;
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
        titleScreen="Mis tickets"
        tabLabels={["Próximos", "Pasados"]}
        renderContent={renderContent}
        subtitle="Necesitas inciar sesión para ver tus tickets"
        onClick={onClickLogin}
      />
      {showLogin && (
        <LoginWindow setUser={setUser} setShowLogin={setShowLogin} />
      )}
    </>
  );
};

export default Tickets;
