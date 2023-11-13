import { useState } from "react";
import QRCode from "qrcode";
import PurpleButton from "../Button/PurpleButton";

const CreateQrs = () => {
  const [qrValue, setQrValue] = useState("userData");
  const [qrImage, setQrImage] = useState("");

  const handleSubmit = async () => {
    const response = await QRCode.toDataURL(qrValue);
    console.log(response);
    setQrImage(response);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PurpleButton onClick={handleSubmit}>Generar Qr</PurpleButton>
      {qrImage && <img src={qrImage} alt="qr image" />}
    </div>
  );
};

export default CreateQrs;
