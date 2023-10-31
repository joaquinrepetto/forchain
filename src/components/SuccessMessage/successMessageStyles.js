import styled from "styled-components";
import theme from "../../theme";

export const SuccessContainer = styled.div`
  min-width: 300px;
  min-height: 300px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.successBackground};
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 30px;
  box-sizing: border-box;
`;

export const SuccessTitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.white};
  font-family: "Poppins", sans-serif;
`;

export const AcknowledgmentsText = styled.p`
  font-size: 28px;
  color: ${theme.colors.white};
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
`;

export const SuccessText = styled.p`
  font-size: 34px;
  color: ${theme.colors.white};
  font-family: "Codec Pro", sans-serif;
  font-weight: bold;
  margin: 0;
`;

export const SuccessTextContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.white};
  padding-bottom: 15px;
`;

export const ContainerBottomText = styled.div`
  padding-top: 15px;
`;

export const ContainerAcknowledgments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SuccessIndication = styled.p`
  font-size: 16px;
  color: ${theme.colors.white};
  font-family: "Poppins", sans-serif;
  margin: 0;
`;

export const SuccessButton = styled.div`
  background: none;
  border: none;
  color: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  font-family: "Codec Pro", sans-serif;
  font-size: 28px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
  margin-left: 5px;
`;
