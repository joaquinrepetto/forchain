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
import { TitleAddress } from "../Global/globalStyles";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Info = () => {
  const { handleLogout } = useAuth();
  const magicAddress = localStorage.getItem("user");

  const parsedAddress =
    magicAddress.slice(0, 6) + "..." + magicAddress.slice(-4);

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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CopyToClipboard
          text={magicAddress}
          onCopy={() => alert("¡Address copiada al portapapeles!")}
        >
          <TitleAddress>{parsedAddress}</TitleAddress>
        </CopyToClipboard>
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
