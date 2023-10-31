import { PurpleButton } from "../../../../components/Global/globalStyles";
import {
  MenuContainer,
  OptionsContainer,
  Option,
  LoginButtonContainer,
} from "../headerStyles";
import { handleRedirect } from "../../../../utils/navigate/handleRedirect";
import { useNavigate } from "react-router-dom";

const Menu = ({
  user,
  setShowLogin,
  setSearchWindowOpen,
  searchWindowOpen,
  handleCloseForm,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (!path) {
      setSearchWindowOpen(true);
      handleCloseForm();
    } else {
      handleRedirect(navigate, path);
      handleCloseForm();
    }
  };

  const handleLoginWindow = () => {
    setShowLogin(true);
    handleCloseForm();
  };

  const options = [
    { title: "Inicio", path: "/" },
    { title: "Buscar evento", path: null },
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
          <PurpleButton
            style={{ marginTop: "63px" }}
            onClick={handleLoginWindow}
          >
            Iniciar Sesión
          </PurpleButton>
        </LoginButtonContainer>
      )}
    </MenuContainer>
  );
};

export default Menu;
