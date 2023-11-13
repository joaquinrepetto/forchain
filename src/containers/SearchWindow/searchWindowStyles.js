import styled from "styled-components";
import theme from "../../theme";

export const SearchResultContainer = styled.div``;
export const Event = styled.div`
  display: flex;
  align-items: stretch;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 40px;
  height: 99px;
`;

export const EventImgContainer = styled.div`
  flex: 0 0 27%;
  overflow: hidden;
  line-height: 0;
`;

export const EventImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventInfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.white};
  color: black;
`;

export const EventInfoTitle = styled.h3`
  font-size: 20px;
  color: ${theme.colors.darkBlue};
  margin: 0;
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
`;

export const EventInfo = styled.h3`
  font-size: 10px;
  color: ${theme.colors.nameText};
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  margin-top: 5px;
`;

export const EventInfoLocation = styled.h4`
  font-size: 10px;
  color: ${theme.colors.purpleBorder};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const ImgFire = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -4px;
`;

export const SearchInput = styled.input`
  height: 34px;
  width: 254px;
  border: none;
  border-bottom: solid 2px ${theme.colors.titleText};
  background-color: transparent;
  font-family: "Codec Pro", sans-serif;
  color: ${theme.colors.titleText};
  font-size: 20px;
  &::placeholder {
    color: ${theme.colors.titleText};
    font-family: "Codec Pro", sans-serif;
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border-bottom: solid 2px ${theme.colors.purpleBorder};
    &::placeholder {
      color: ${theme.colors.border};
    }
  }
`;

export const SearchWindowContainer = styled.div`
  background-color: ${theme.colors.background};
  height: 100vh;
  width: 100vw;
  display: flex;

  align-items: center;
  flex-direction: column;
  z-index: 999;
  position: fixed;
  top: 0%;
  left: 0%;
`;

export const GoBackButtonContainer = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.5px;
  margin-bottom: 12px;
`;

export const CloseButtonContainer = styled.div`
  height: 15px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 55px;
`;

export const SearchinputContainer = styled.div`
  height: 35px;
  width: 100vw;
  display: flex;
  margin-right: 40.5px;
  align-items: center;
  margin-top: 31.49px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  margin: 50px 0px;
  flex-wrap: wrap;
`;

export const Filterbox = styled.div`
  height: 34px;
  background-color: ${theme.colors.purpleButton};
  display: flex;
  padding: 0 22px;
  align-items: center;
  border-radius: 15px;
  margin: 7px 0px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Filter = styled.h1`
  color: ${theme.colors.white};
  font-family: "Codec Pro", sans-serif;
  font-size: 14px;
`;

export const PopularSearchesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PopularSeachesTitle = styled.h1`
  color: ${theme.colors.titleText};
  font-size: 23px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 17px;
`;

export const FilterSelectedTitle = styled.h1`
  color: ${theme.colors.titleText};
  font-size: 23px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 17px;
  margin-top: 45px;
  margin-bottom: 28px;
`;

export const SearchBodyContainer = styled.div`
  width: 345px;
  height: 380;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PopularSearchBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 9px 0px;
  height: 23px;
  cursor: pointer;
`;

export const PopularSearch = styled.h1`
  color: ${theme.colors.nameText};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-left: 10px;
`;

export const CloseButton = styled.img`
  cursor: pointer;
  width: 14.84px;
  height: 15px;
  object-fit: cover;
`;

export const CloseButtonTop = styled.img`
  width: 20px;
  height: 10px;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 15px;
`;

export const CloseButtonFilter = styled.img`
  cursor: pointer;
  width: 7x;
  height: 7px;
  object-fit: cover;
  position: relative;
  top: 21px;
  right: 26px;
`;
