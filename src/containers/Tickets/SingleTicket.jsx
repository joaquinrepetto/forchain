import React from "react";
import {
  InfoContainer,
  TicketContainer,
  TicketQRCode,
  FlyerTicketContainer,
  FlyerTicket,
  YourTicketOnlineFor,
  TicketInfoContainer,
  TicketInfoTitle,
  TicketInfoLocation,
  ShowYourTicket,
  QRContainer,
} from "./ticketsStyles";

import { thisWeekEvents } from "../../utils/data/tickets/tickets";
import { useParams } from "react-router-dom";
import { BackArrow, BackArrowContainer } from "../SingleEvent/singleEventStyles";
import LeftArrow from "../../assets/imgs/arrow-left.png";

const SingleTicket = () => {
  const { id } = useParams();
  const event = thisWeekEvents.find((event) => event.id === Number(id));

  return (
    <TicketContainer>
      <FlyerTicketContainer>
        <FlyerTicket src={event.picture} alt="Flyer" />
        <BackArrowContainer>
        <BackArrow src={LeftArrow} onClick={() => window.history.back()} />
      </BackArrowContainer>
      </FlyerTicketContainer>
      <TicketInfoContainer>
        <InfoContainer>
          <YourTicketOnlineFor>TU TICKET ONLINE PARA</YourTicketOnlineFor>
          <TicketInfoTitle>{event.title}</TicketInfoTitle>
          <TicketInfoLocation>{event.info}</TicketInfoLocation>
        </InfoContainer>
        <QRContainer>
          <ShowYourTicket>
            Mostra tu ticket al ingresar al evento
          </ShowYourTicket>
          <ShowYourTicket>ID: 54304201</ShowYourTicket>
          <TicketQRCode
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
            alt="QR Code"
          />
        </QRContainer>
      </TicketInfoContainer>
    </TicketContainer>
  );
};

export default SingleTicket;
