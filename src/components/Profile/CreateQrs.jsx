import { useState } from "react";
import QRCode from "qrcode";
import PurpleButton from "../Button/PurpleButton";

const CreateQrs = ({ userInfo }) => {
  const [qrImage, setQrImage] = useState("");

  const handleSubmit = async () => {
    const response = await QRCode.toDataURL(JSON.stringify(userInfo));
    setQrImage(response);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PurpleButton onClick={handleSubmit}>Generar Qr</PurpleButton>
      {qrImage && (
        <img
          style={{
            position: "fixed",
            zIndex: "1000",
            width: "70%",

            left: "15%",
            top: "10%",
          }}
          src={qrImage}
          alt="qr image"
        />
      )}
    </div>
  );
};

export default CreateQrs;
