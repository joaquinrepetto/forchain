import React from "react";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const TicketConfirmation = ({ event, handleNavigate }) => {
  return (
    <SuccessMessage
      title="Tus entradas para"
      subtitle={event.name}
      indication="Ya están disponibles en"
      buttonText="Mis tickets >"
      acknowledgments="¡Gracias!"
      onClick={handleNavigate}
    />
  );
};

export default TicketConfirmation;