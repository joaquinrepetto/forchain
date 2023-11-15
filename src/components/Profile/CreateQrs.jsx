import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  QRSubContainer,
  QRContainer,
} from "../../containers/Profile/profileStyles";

const CreateQrs = ({ profileInfo }) => {
  const [qrImage, setQrImage] = useState("");
  const [qrLoaded, setQrLoaded] = useState(false);

  const handleGetQr = async () => {
    const response = await QRCode.toDataURL(JSON.stringify(profileInfo));
    if (profileInfo) {
      setQrImage(response);
    }
  };

  useEffect(() => {
    handleGetQr();
  }, []);

  return (
    <QRContainer>
      <QRSubContainer>
        {profileInfo ? (
          <img src={qrImage} alt="qr image" />
        ) : (
          //Poner spinner
          <h3>Cargando...</h3>
        )}
      </QRSubContainer>
    </QRContainer>
  );
};

export default CreateQrs;
