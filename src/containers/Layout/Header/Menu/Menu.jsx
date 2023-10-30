import { PurpleButton } from "../../../../components/Global/globalStyles";
import {
  MenuContainer,
  OptionsContainer,
  Option,
  LoginButtonContainer,
} from "../headerStyles";
import { handleRedirect } from "../../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";

const Menu = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    handleRedirect(navigate, path);
  };

  const options = [
    { title: "Inicio", path: "/" },
    { title: "Buscar evento", path: "none" },
    { title: "Mis tickets", path: "/tickets" },
    { title: "Perfil", path: "/profile" },
  ];
  return (
    <MenuContainer>
      <OptionsContainer>
        {options.map((option) => {
          return (
            <Option onClick={() => handleNavigate(option.path)}>
              {option.title}
            </Option>
          );
        })}
      </OptionsContainer>
      {user ? null : (
        <LoginButtonContainer>
          <PurpleButton style={{ marginTop: "63px" }}>
            Iniciar Sesión
          </PurpleButton>
        </LoginButtonContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
