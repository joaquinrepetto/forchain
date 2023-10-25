import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  background-color: ${theme.colors.background};
  min-height: 100vh;
  color: white;
  padding: 20px;
`;

export const TitleH2 = styled.h2`
  color: ${theme.colors.titleText};
  font-size: 16px;
  font-family: "Codec Pro", sans-serif;
  font-weight: 400;
`;

export const ComponentSeparator = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
