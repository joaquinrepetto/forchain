import {
  ProfileContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileForm,
  ButtonsQrsContainer,
} from "../../containers/Profile/profileStyles";
import InputForm from "../../components/InputForm/InputForm";
import PurpleButton from "../Button/PurpleButton";
import useAuth from "../../containers/Auth/useAuth";
import React, { useState, useEffect } from "react";
import ReadQrs from "./ReadQrs";
import CreateQrs from "./CreateQrs";

const Info = () => {
  const { handleLogout } = useAuth();
  const [data, setData] = useState("No result");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ProfileContainer>
      <ProfileImageContainer>
        <ProfileImage
          src="https://avatars.githubusercontent.com/u/59816558?v=4"
          alt="profile image"
        />
      </ProfileImageContainer>
      <ButtonsQrsContainer>
        <CreateQrs />
        <ReadQrs />
      </ButtonsQrsContainer>
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
