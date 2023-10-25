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

  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;

  &:hover {
    width: 126px;
  }
`;
export const Icon = styled.img`
  width: 26px;
  height: 26px;
  object-fit: cover;
`;
