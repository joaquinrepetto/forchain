import PurpleButton from "../Button/PurpleButton";
import {
  QrScannModalContainer,
  UserScannedData,
  ScannedDataTitle,
  ScannedDataSubTitle,
  ScannedDateContainer,
  ScannedDate,
  ScannedData,
  LargeItem,
  ShortItemContainer,
  ShortItem,
  ButtonCotainer,
  CloseModalButton,
  SpanName,
  ItemDataContainer,
  ItemDataContainerBottom,
  SpanData,
} from "../../containers/Profile/profileStyles";
import { useEffect } from "react";

const QrScanModal = ({ handleCloseModal, data }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses en JavaScript empiezan desde 0
  const year = String(date.getFullYear()).slice(-2);

  const formattedDate = `${day}/${month}/${year}`;
  const clickInside = (e) => {
    e.stopPropagation();
  };

  return (
    <QrScannModalContainer onClick={handleCloseModal}>
      <UserScannedData onClick={clickInside}>
        <ScannedDataTitle>
          ¡Conociste a {data?.name ? data?.name : "un usuario"}!
        </ScannedDataTitle>
        <ScannedDataSubTitle>
          Recorda que podes volver a ver su información de contacto cuando
          quieras en mi comunidad{" "}
        </ScannedDataSubTitle>
        <ScannedDateContainer>
          <ScannedDate>{formattedDate}</ScannedDate>
        </ScannedDateContainer>
        <ScannedData>
          <LargeItem>
            <SpanName>Nombre</SpanName>
            <ItemDataContainer>
              <SpanData>{data?.name ? data?.name : "-"}</SpanData>
            </ItemDataContainer>
          </LargeItem>
          <LargeItem>
            <SpanName>Email</SpanName>
            <ItemDataContainer>
              <SpanData>{data?.email ? data?.email : "-"}</SpanData>
            </ItemDataContainer>
          </LargeItem>
          <ShortItemContainer>
            <ShortItem>
              <SpanName>Empresa</SpanName>
              <ItemDataContainer>
                <SpanData>{data.company ? data?.company : "-"}</SpanData>
              </ItemDataContainer>
            </ShortItem>
            <ShortItem>
              <SpanName>Puesto</SpanName>
              <ItemDataContainer>
                <SpanData>{data.position ? data?.position : "-"}</SpanData>
              </ItemDataContainer>
            </ShortItem>
          </ShortItemContainer>
          <LargeItem>
            <SpanName>Telegram</SpanName>
            <ItemDataContainer>
              <SpanData>{data.telegram ? data?.telegram : "-"}</SpanData>
            </ItemDataContainer>
          </LargeItem>
          <LargeItem>
            <SpanName>Twitter</SpanName>
            <ItemDataContainerBottom>
              <SpanData>{data.twitter ? data?.twitter : "-"}</SpanData>
            </ItemDataContainerBottom>
          </LargeItem>
        </ScannedData>
        <ButtonCotainer>
          <CloseModalButton onClick={handleCloseModal}>Cerrar</CloseModalButton>
        </ButtonCotainer>
      </UserScannedData>
    </QrScannModalContainer>
  );
};

export default QrScanModal;
