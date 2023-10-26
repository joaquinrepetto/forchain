import React, { useState } from "react";
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
} from "./footerStyles";
import xCloseButton from "../../../assets/imgs/x-close-button.png";
import closeSearchFooterButton from "../../../assets/imgs/close-search-footer-button.png";
import SearchButton from "../../../assets/imgs/search-icon-white.png";

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
                <PopularSearch>{bp}</PopularSearch>
              </PopularSearchBox>
            );
          })}
        </PopularSearchesContainer>
      </div>
    </SearchWindowContainer>
  );
};

export default SearchWindow;
