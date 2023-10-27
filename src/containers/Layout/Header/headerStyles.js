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

export const Menu = styled.img`
  width: 22.53px;
  height: 12px;
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
  z-index: 3;
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
  border: solid 1px red;
  width: 100vw;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border: solid 1px red;
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
