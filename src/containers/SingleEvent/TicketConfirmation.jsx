import React from "react";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const TicketConfirmation = ({ event, handleNavigate, txID, IPFSHash }) => {
  return (
    <SuccessMessage
      title="Tus entradas para"
      subtitle={event.name}
      indication="Ya están disponibles en"
      buttonText="Mis tickets"
      acknowledgments="¡Gracias!"
      onClick={handleNavigate}
      txID={txID}
      urlIPFS={IPFSHash}
    />
  );
};

export default TicketConfirmation;
