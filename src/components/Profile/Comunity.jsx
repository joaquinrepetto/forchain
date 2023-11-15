import PurpleButton from "../Button/PurpleButton";
import {
  ComunityContainer,
  ComunityTitleContainer,
  ComunityTitle,
  ComunitySubtitleContainer,
  ComunitySubtitle,
  QRContainer,
  SecondSubtitleContainer,
  SecondSubtitle,
  MyComuinityListContainer,
  MyComunityListTitle,
  MyComunityItem,
  QRSubContainer,
} from "../../containers/Profile/profileStyles";
import QrScanModal from "./QrScanModal";
import CreateQrs from "./CreateQrs";

const Comunity = ({ profile, showReadQrModal, handleShowQrModalSet }) => {
  return (
    <ComunityContainer>
      {showReadQrModal && (
        <QrScanModal handleCloseModal={handleShowQrModalSet} />
      )}
      <ComunityTitleContainer>
        <ComunityTitle>¡Conecta con otros!</ComunityTitle>
      </ComunityTitleContainer>
      <ComunitySubtitleContainer>
        <ComunitySubtitle>
          Cuando otros escaneen tu código QR van a obtener la información que
          cargaste en tu perfil
        </ComunitySubtitle>
      </ComunitySubtitleContainer>
      <QRContainer>
        <QRSubContainer>
          <CreateQrs profileInfo={profile} />
        </QRSubContainer>
      </QRContainer>
      <SecondSubtitleContainer>
        <SecondSubtitle>
          ¡Escanea la mayor cantidad de personas que conozcas para obtener
          recompensas!
        </SecondSubtitle>
      </SecondSubtitleContainer>
      <PurpleButton onClick={() => handleShowQrModalSet()}>
        Escanear QR
      </PurpleButton>
      <MyComuinityListContainer>
        <MyComunityListTitle>Mi comunidad</MyComunityListTitle>
        {[1, 2, 3].map((item) => {
          return <MyComunityItem></MyComunityItem>;
        })}
      </MyComuinityListContainer>
    </ComunityContainer>
  );
};

export default Comunity;
