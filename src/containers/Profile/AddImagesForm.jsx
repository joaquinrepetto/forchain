import React, { useRef, useState } from "react";
import {
  SectionForm,
  SectionFormTitle,
  SpanTextModal,
  ContainerInputFile,
  FileIcon,
  TitleFile,
  SubtitleFile,
  ContainerSubtitleFile,
  ButtonFile,
} from "./profileStyles";
import FileIconImg from "../../assets/imgs/file.svg";

const AddImagesForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 10) {
      alert("Solo puedes seleccionar un máximo de 10 imágenes");
      return;
    }

    setSelectedFiles(e.target.files);
  };

  return (
    <SectionForm>
      <SectionFormTitle>Imágenes</SectionFormTitle>
      <SpanTextModal>
        Incorporá algunas fotos para mostrar como es tu evento. Limite 10 fotos.
      </SpanTextModal>
      <ContainerInputFile>
        <FileIcon src={FileIconImg} />
        <TitleFile>Arrastrá y coloca una imagen</TitleFile>
        <ContainerSubtitleFile>
          <SubtitleFile>Tamaño recomendado 2160 x 1080 px</SubtitleFile>
          <SubtitleFile>Peso recomendado: 10 MB</SubtitleFile>
          <SubtitleFile>Formatos: JPG o PNG</SubtitleFile>
        </ContainerSubtitleFile>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={handleFileChange}
        />
        <ButtonFile onClick={handleButtonClick}>Seleccionar archivo</ButtonFile>
      </ContainerInputFile>
    </SectionForm>
  );
};

export default AddImagesForm;
