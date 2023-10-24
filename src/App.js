import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1``;

const LoginButton = styled.button``;

const PopularEvents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventImage = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button``;

const UpcomingEvent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const EventDetail = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const EventTitle = styled.h2``;

const EventInfo = styled.p``;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.span`
  font-size: 20px;
  margin: 10px;
`;

export default function App() {
  return (
    <Container>
      <Header>
        <Title>ForChain</Title>
        <LoginButton>Iniciar sesión</LoginButton>
      </Header>

      <h2>Eventos populares</h2>
      <PopularEvents>
        {/* Map through popular events and render Event components */}
        <Event>
          <EventImage src="path_to_image.jpg" alt="Event name" />
          <span>Event name</span>
        </Event>
      </PopularEvents>

      <h2>Categorias</h2>
      <Categories>
        <CategoryButton>Educación</CategoryButton>
        <CategoryButton>Networking</CategoryButton>
        <CategoryButton>DAOS</CategoryButton>
      </Categories>

      <h2>Próximos eventos</h2>
      <UpcomingEvent>
        <div>Event Icon</div>
        <EventDetail>
          <EventTitle>GrowthHackers Conference</EventTitle>
          <EventInfo>Online | Mié 08 Nov 2023 | 09 hs</EventInfo>
        </EventDetail>
      </UpcomingEvent>

      <Footer>
        <Icon>🏠</Icon>
        <Icon>🔍</Icon>
        <Icon>📅</Icon>
        <Icon>👤</Icon>
      </Footer>
    </Container>
  );
}
