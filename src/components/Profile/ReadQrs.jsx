import { QrReader } from "react-qr-reader";
import { useEffect, useState } from "react";
import { QrReaderContainer } from "../../containers/Profile/profileStyles";

const ReadQrs = ({ setData }) => {
  const [scanResultfile, setScanResultFile] = useState("");

  useEffect(() => {
    if (scanResultfile.length) {
      console.log(scanResultfile);
      setData(JSON.parse(scanResultfile));
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
