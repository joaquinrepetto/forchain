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
  object-fit: cover;
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
