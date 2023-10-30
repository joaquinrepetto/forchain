import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;

  width: calc(100vw - 40px);
`;

export const TabsContainer = styled.div`
  display: flex;
  height: 79px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.div`
  display: flex;
  height: 79px;
  width: 90%;
  justify-content: center;
  align-content: center;
  background-color: #121440;
  border-radius: 30px;
`;

export const IconsContainer = styled.div`
  height: 79px;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ButtonPlusContainer = styled.div`
  display: flex;

  width: 100%;
  justify-content: flex-end;
  margin-bottom: 15px;
`;
export const ButtonPlus = styled.div`
  background-color: #695ddf;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  font-size: 12px;
  &:hover {
    width: 126px;
    height: 42px;
  }
`;

export const Icon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  width: 14.84px;
  height: 15px;
  object-fit: cover;
`;

export const CloseButtonTop = styled.img`
  width: 20px;
  height: 10px;
`;

export const SearchIcon = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 15px;
`;

export const ImgPlus = styled.img`
  height: 2rem;
  width: 2rem;
`;

export const ImgPlusHovered = styled.img`
  width: 25px;
  height: 25px;
  margin-left: -5px;
`;

export const SearchInput = styled.input`
  height: 34px;
  width: 254px;
  border: none;
  border-bottom: solid 2px #d3d3d6;
  background-color: transparent;
  font-family: "Codec Pro", sans-serif;
  color: #d3d3d6;
  font-size: 20px;
  &::placeholder {
    color: #d3d3d6;
    font-family: "Codec Pro", sans-serif;
    font-size: 20px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    border-bottom: solid 2px #695ddf;
    &::placeholder {
      color: #747475;
    }
  }
`;

export const SearchWindowContainer = styled.div`
  background-color: #090a20;
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
  background-color: #201a39;
  display: flex;
  padding: 0 22px;
  align-items: center;
  border-radius: 15px;
  margin: 7px 0px;
  margin-right: 10px;
`;

export const Filter = styled.body`
  color: white;
  font-family: "Codec Pro", sans-serif;
  font-size: 14px;
`;

export const PopularSearchesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PopularSeachesTitle = styled.body`
  color: #d3d3d6;
  font-size: 23px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
  margin-bottom: 17px;
`;

export const PopularSearchBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 9px 0px;
  height: 23px;
`;

export const PopularSearch = styled.body`
  color: #c5c5c9;
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;
