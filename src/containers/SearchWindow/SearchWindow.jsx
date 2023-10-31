import React, { useEffect } from "react";
import {
  SearchWindowContainer,
  GoBackButtonContainer,
  CloseButtonContainer,
  CloseButton,
  CloseButtonTop,
  SearchinputContainer,
  SearchIcon,
  SearchInput,
  FiltersContainer,
  Filter,
  Filterbox,
  PopularSearchesContainer,
  PopularSeachesTitle,
  PopularSearch,
  PopularSearchBox,
  ImgFire,
  Event,
  EventImgContainer,
  EventImg,
  EventInfoContainer,
  EventInfoTitle,
  EventInfo,
  EventInfoLocation,
} from "./searchWindowStyles";
import xCloseButton from "../../assets/imgs/x-close-button.png";
import closeSearchFooterButton from "../../assets/imgs/close-search-footer-button.png";
import SearchButton from "../../assets/imgs/search-icon-white.png";
import FireIconToITem from "../../assets/imgs/llama-de-fuego-curvada.png";
import { nextEvents } from "../../utils/data/tickets/tickets";

const SearchWindow = ({ setSearchWindowOpen }) => {
  const categories = [
    "Educación",
    "Networking",
    "DAOS",
    "Ethereum",
    "Conferencias",
  ];

  const búsquedasPopulares = [
    "GrowthHackers Conference",
    "Rootstock rooftops",
    "SDCONF",
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const searchEvents = nextEvents.slice(0, 1);

  return (
    <SearchWindowContainer>
      <GoBackButtonContainer>
        <CloseButtonTop
          onClick={() => setSearchWindowOpen(false)}
          src={closeSearchFooterButton}
        />
      </GoBackButtonContainer>
      <CloseButtonContainer>
        <CloseButton
          onClick={() => setSearchWindowOpen(false)}
          src={xCloseButton}
        />
      </CloseButtonContainer>
      <div
        style={{
          width: "345px",
          height: "380",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <SearchinputContainer>
          <SearchIcon src={SearchButton} />
          <SearchInput placeholder="Buscá lo que quieras" />
        </SearchinputContainer>

        <FiltersContainer>
          {categories.map((category) => {
            return (
              <Filterbox>
                <Filter>{category}</Filter>
              </Filterbox>
            );
          })}
        </FiltersContainer>

        <PopularSearchesContainer>
          <PopularSeachesTitle>Búsquedas populares</PopularSeachesTitle>
          {búsquedasPopulares.map((bp) => {
            return (
              <PopularSearchBox>
                <ImgFire src={FireIconToITem} alt="" />
                <PopularSearch>{bp}</PopularSearch>
              </PopularSearchBox>
            );
          })}
        </PopularSearchesContainer>
      </div>

      {/* {searchEvents.map((event, index) => {
        return (
          <Event
            key={index}
            //  onClick={() => handleClickEventNavigate(event)}
          >
            <EventImgContainer>
              <EventImg src={event.picture} alt={event.title} />
            </EventImgContainer>
            <EventInfoContainer>
              <EventInfoTitle>{event.title}</EventInfoTitle>
              <EventInfo>{event.info}</EventInfo>
              <EventInfoLocation>{event.location}</EventInfoLocation>
            </EventInfoContainer>
          </Event>
        );
      })} */}
    </SearchWindowContainer>
  );
};

export default SearchWindow;
