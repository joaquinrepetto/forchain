import PurpleButton from "../Button/PurpleButton";
import { QrScannModalContainer } from "../../containers/Profile/profileStyles";
import { useState } from "react";
import ReadQrs from "./ReadQrs";

const QrScanModal = ({ handleCloseModal }) => {
  const [data, setData] = useState(null);
  return (
    <QrScannModalContainer>
      <h1 onClick={() => handleCloseModal()}>x</h1>
      {!data ? (
        <ReadQrs setData={setData} />
      ) : (
        // <ScannedUserBio>
        <>
          <span>Email</span>
          <span>{data?.email}</span>
          <span>{data?._id}</span>
          <span>{data?.magicId}</span>
        </>
        // </ScannedUserBio>
      )}
    </QrScannModalContainer>
  );
};

export default QrScanModal;
