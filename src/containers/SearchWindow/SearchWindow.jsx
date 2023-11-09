import React, { useEffect, useState } from "react";
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
  SearchResultContainer,
  CloseButtonFilter,
  SearchBodyContainer,
  FilterSelectedTitle,
} from "./searchWindowStyles";
import xCloseButton from "../../assets/imgs/x-close-button.png";
import closeSearchFooterButton from "../../assets/imgs/close-search-footer-button.png";
import SearchButton from "../../assets/imgs/search-icon-white.png";
import FireIconToITem from "../../assets/imgs/llama-de-fuego-curvada.png";
import useSearchWindow from "./useSearchWindow";

import { events } from "../../utils/data/upcoming/events";
import { handleRedirect } from "../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";

const SearchWindow = ({ setSearchWindowOpen }) => {
  const {
    data,
    setData,
    categories,
    setCategories,
    popularSearches,
    setPopularSearches,
    resetCategories,
  } = useSearchWindow();
  const navigate = useNavigate();
  const [search, setSearch] = useState({ search: "", filter: "" });

  const handleClickEventNavigate = (event) => {
    handleRedirect(navigate, `/events/${event.id}`);
    setSearchWindowOpen(false);
  };

  const onCloseCategory = () => {
    resetCategories();
    setSearch((prevState) => {
      return { ...prevState, filter: "" };
    });
  };

  const onChange = (e) => {
    setSearch((prevState) => {
      return { ...prevState, search: e.target.value };
    });
  };

  const onSelectFilter = (category) => {
    setCategories([category]);

    setSearch((prevState) => {
      return { ...prevState, filter: category };
    });
  };

  const filtersAndSearch = () => {
    let newData = events;
    let newPopularSearches = popularSearches;

    if (search.search.length) {
      const filteredEvents = events.filter((e) =>
        e.name.toLowerCase().startsWith(search.search.toLowerCase())
      );
      newData = filteredEvents;
      newPopularSearches = filteredEvents;
    }

    if (search.filter.length) {
      newData = newData.filter((e) => e.tags.includes(`#${search.filter}`));
    }

    if (search.filter.length || search.search.length) {
      setData(newData);
      setPopularSearches(newPopularSearches);
    } else {
      setData([]);
      setPopularSearches(events);
    }
  };

  useEffect(() => {
    filtersAndSearch();
  }, [search]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
      <SearchBodyContainer>
        <SearchinputContainer>
          <SearchIcon src={SearchButton} />
          <SearchInput
            placeholder="Buscá lo que quieras"
            onChange={(e) => {
              onChange(e);
            }}
            value={search.search}
          />
        </SearchinputContainer>

        <FiltersContainer>
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <Filterbox onClick={() => onSelectFilter(category)}>
                  <Filter>{category}</Filter>
                </Filterbox>

                {categories.length === 1 && (
                  <CloseButtonFilter
                    onClick={onCloseCategory}
                    src={xCloseButton}
                  />
                )}
              </div>
            );
          })}
        </FiltersContainer>
        {search.filter && (
          <FilterSelectedTitle>Búsqueda "{search.filter}"</FilterSelectedTitle>
        )}
        <SearchResultContainer>
          {data.map((event, index) => {
            return (
              <Event
                key={index}
                onClick={() => handleClickEventNavigate(event)}
              >
                <EventImgContainer>
                  <EventImg src={event.picture} alt={event.name} />
                </EventImgContainer>
                <EventInfoContainer>
                  <EventInfoTitle>{event.name}</EventInfoTitle>
                  <EventInfo>{event.dateAndTime}</EventInfo>
                  <EventInfoLocation>{event.location}</EventInfoLocation>
                </EventInfoContainer>
              </Event>
            );
          })}
        </SearchResultContainer>

        {popularSearches?.length && !search.filter ? (
          <PopularSearchesContainer>
            <PopularSeachesTitle>Búsquedas populares</PopularSeachesTitle>
            {popularSearches.map((bp, index) => {
              return (
                <PopularSearchBox
                  key={index}
                  onClick={() => handleClickEventNavigate(bp)}
                >
                  <ImgFire src={FireIconToITem} alt="" />
                  <PopularSearch>{bp.name}</PopularSearch>
                </PopularSearchBox>
              );
            })}
          </PopularSearchesContainer>
        ) : null}
      </SearchBodyContainer>
    </SearchWindowContainer>
  );
};

export default SearchWindow;
