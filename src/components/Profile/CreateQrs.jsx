import { useEffect, useState } from "react";
import QRCode from "qrcode";

const CreateQrs = ({ profileInfo }) => {
  const [qrImage, setQrImage] = useState("");

  const handleGetQr = async () => {
    const response = await QRCode.toDataURL(JSON.stringify(profileInfo));
    setQrImage(response);
  };

  useEffect(() => {
    handleGetQr();
  }, []);

  return <img src={qrImage} alt="qr image" />;
};

export default CreateQrs;
