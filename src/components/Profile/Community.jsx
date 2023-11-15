import PurpleButton from "../Button/PurpleButton";
import {
  ComunityContainer,
  ComunityTitleContainer,
  ComunityTitle,
  ComunitySubtitleContainer,
  ComunitySubtitle,
  SecondSubtitleContainer,
  SecondSubtitle,
  MyComuinityListContainer,
  MyComunityListTitle,
  MyComunityItem,
} from "../../containers/Profile/profileStyles";
import QrScanModal from "./QrScanModal";
import CreateQrs from "./CreateQrs";
import ReadQrs from "./ReadQrs";

const Community = ({
  profile,
  showReadQrModal,
  handleShowQrModalSet,
  data,
  setData,
  showCamera,
  setShowCamera,
  handleCloseModal,
}) => {
  const handleShowCamera = () => {
    setShowCamera(true);
  };

  return (
    <ComunityContainer>
      {showReadQrModal && (
        <QrScanModal handleCloseModal={handleCloseModal} data={data} />
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
      {showCamera ? (
        <ReadQrs
          setData={setData}
          handleShowQrModalSet={handleShowQrModalSet}
          setShowCamera={setShowCamera}
          data={data}
        />
      ) : (
        <CreateQrs profileInfo={profile} />
      )}

      <SecondSubtitleContainer>
        <SecondSubtitle>
          ¡Escanea la mayor cantidad de personas que conozcas para obtener
          recompensas!
        </SecondSubtitle>
      </SecondSubtitleContainer>
      <PurpleButton onClick={() => handleShowCamera()}>
        Escanear QR
      </PurpleButton>
      {/* <MyComuinityListContainer>
        <MyComunityListTitle>Mi comunidad</MyComunityListTitle>
        {[1, 2, 3].map((item, index) => {
          return <MyComunityItem key={index}></MyComunityItem>;
        })}
      </MyComuinityListContainer> */}
    </ComunityContainer>
  );
};

export default Community;
