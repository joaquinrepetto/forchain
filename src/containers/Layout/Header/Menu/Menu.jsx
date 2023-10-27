import { PurpleButton } from "../../../../components/Global/globalStyles";
import {
  MenuContainer,
  OptionsContainer,
  Option,
  LoginButtonContainer,
} from "../headerStyles";
const Menu = ({ user }) => {
  const options = ["Inicio", "Buscar evento", "Mis tickets", "Perfil"];
  return (
    <MenuContainer>
      <OptionsContainer>
        {options.map((option) => {
          return <Option>{option}</Option>;
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
