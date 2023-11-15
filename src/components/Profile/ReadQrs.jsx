import { QrReader } from "react-qr-reader";
import { useEffect, useState } from "react";
import { QrReaderContainer } from "../../containers/Profile/profileStyles";

const ReadQrs = ({ setData, handleShowQrModalSet, setShowCamera }) => {
  const [scanResultfile, setScanResultFile] = useState("");

  useEffect(() => {
    if (scanResultfile.length) {
      setData(JSON.parse(scanResultfile));
      handleShowQrModalSet();
    }
  }, [scanResultfile]);

  return (
    <QrReaderContainer>
      <QrReader
        scanDelay={300}
        onResult={(result, error) => {
          if (!!result) {
            setScanResultFile(result?.text);
          }
          if (!!error) {
          }
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </QrReaderContainer>
  );
};

export default ReadQrs;
