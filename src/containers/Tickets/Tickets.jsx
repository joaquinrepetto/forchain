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

const Tickets = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Próximos");

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

  return (
    <Screen
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      titleScreen="Mis tickets"
      tabLabels={["Próximos", "Pasados"]}
      renderContent={renderContent}
      subtitle="Necesitas inciar sesión para ver tus tickets"
    />
  );
};

export default Tickets;
