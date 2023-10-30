import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
export const Logo = styled.img`
  object-fit: cover;
  width: 138px;
  height: 25px;
`;

export const MenuButton = styled.img`
  width: 22.53px;
  height: 12px;
  margin-left: 26.92px;
`;
export const ProfileIconImg = styled.img`
  object-fit: cover;
  width: 38.54;
  height: 38.54px;
`;

export const LoginWindowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  z-index: 999;
  position: fixed;
  top: 0%;
  left: 0%;
`;

export const WindowContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 90.5px;
  width: calc(100vw - 40px);
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 224px;
`;

export const Option = styled.body`
  color: #c5c5c9;
  font-size: 32px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;

export const PopularSearch = styled.body`
  color: #c5c5c9;
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const ProfileIconAndMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
