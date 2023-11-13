import { QrReader } from "react-qr-reader";
import { useRef, useState } from "react";
import PurpleButton from "../Button/PurpleButton";

const ReadQrs = () => {
  const qrRef = useRef(null);
  const [scanResultfile, setResultFile] = useState("");
  const [cam, setCam] = useState(false);
  const handlerErrorFile = (error) => {
    console.log(error);
  };

  const turnOnScanner = () => {
    setCam(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <PurpleButton onClick={turnOnScanner}>ReadQrCode</PurpleButton>
      {cam && (
        <div
          style={{
            position: "absolute",
            zIndex: "1000",
            width: "90vw",
            height: "100vh",
            left: "5vw",
            top: "20%",
          }}
        >
          <QrReader
            scanDelay={300}
            onResult={(result, error) => {
              if (!!result) {
                setResultFile(result?.text);
                setCam(false);
              }
              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
      <h3>Texto escaneado:{scanResultfile}</h3>
    </div>
  );
};

export default ReadQrs;
