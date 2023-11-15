import { QrReader } from "react-qr-reader";
import { useEffect, useState } from "react";
import { QrReaderContainer } from "../../containers/Profile/profileStyles";
import useProfile from "../../containers/Profile/useProfile";

const ReadQrs = ({ setData, handleShowQrModalSet }) => {
  const { transferToken, connectProfile } = useProfile();
  const [scanResultfile, setScanResultFile] = useState("");
  const magicUserId = localStorage.getItem("user");

  useEffect(() => {
    if (scanResultfile.length) {
      const magicId = JSON.parse(scanResultfile).magicId;
      connectProfile(magicId);
      transferToken(magicUserId);
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
