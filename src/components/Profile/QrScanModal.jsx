import PurpleButton from "../Button/PurpleButton";
import { QrScannModalContainer } from "../../containers/Profile/profileStyles";
import { useState, useEffect } from "react";
import ReadQrs from "./ReadQrs";

const QrScanModal = ({ handleCloseModal, data }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <QrScannModalContainer>
      <>
        <span>Email</span>
        <span>{data?.email}</span>
        <span>{data?._id}</span>
        <span>{data?.magicId}</span>
      </>
      //{" "}
    </QrScannModalContainer>
  );
};

export default QrScanModal;
