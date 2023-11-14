import { QrReader } from "react-qr-reader";
import { useEffect, useRef, useState } from "react";
import PurpleButton from "../Button/PurpleButton";

const ReadQrs = ({ setShowModal, setData }) => {
  const [scanResultfile, setResultFile] = useState("");
  const [cam, setCam] = useState(false);

  const turnOnScanner = () => {
    setCam(true);
  };

  useEffect(() => {
    if (scanResultfile.length) {
      setShowModal(true);
      setData(JSON.parse(scanResultfile));
    }
  }, [scanResultfile]);

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
            position: "fixed",
            zIndex: "1000",
            width: "70%",

            left: "15%",
            top: "10%",
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
    </div>
  );
};

export default ReadQrs;
