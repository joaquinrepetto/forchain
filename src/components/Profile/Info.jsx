import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileForm,
} from "../../containers/Profile/profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import PurpleButton from "../Button/PurpleButton";
import useAuth from "../../containers/Auth/useAuth";
import React from "react";
import { TitleH2 } from "../Global/globalStyles";

const Info = () => {
  const { handleLogout } = useAuth();
  const magicAddres = localStorage.getItem("user");

  const handleCopy = () => {
    navigator.clipboard.writeText(magicAddres);
    window.alert("Address copiada al portapapeles");
  };

  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/59816558?v=4"
          alt="profile image"
        />
      </ProfileImageContainer>
      <div
        style={{
          marginTop: "2rem",
          cursor: "pointer",
        }}
        onClick={() => {
          handleCopy();
        }}
      >
        <TitleH2>{magicAddres}</TitleH2>
      </div>
      <ProfileForm>
        <InputForm
          label="Nombre"
          type="text"
          placeholder="Nombre"
          isEditable={true}
        />
        <InputForm
          label="Correo electrónico"
          type="email"
          placeholder="Email"
          isEditable={true}
        />

        <PurpleButton onClick={() => {}} disabled={true}>
          Guardar cambios
        </PurpleButton>
        <PurpleButton onClick={() => handleLogout()}>
          Cerrar sesión
        </PurpleButton>
      </ProfileForm>
    </ProfileContainer>
  );
};

export default Info;
