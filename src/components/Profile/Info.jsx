import React from "react";
import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileForm,
} from "../../containers/Profile/profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import PurpleButton from "../Button/PurpleButton";

const Info = () => {
  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/59816558?v=4"
          alt="profile image"
        />
      </ProfileImageContainer>
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
      </ProfileForm>
    </ProfileContainer>
  );
};

export default Info;
