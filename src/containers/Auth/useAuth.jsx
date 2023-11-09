import { magic } from "../../services/magic/index.js";
import { useWeb3 } from "../../containers/Context/Web3Context.js";
import { useUser } from "../../containers/Context/UserContext.js";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const { initializeWeb3 } = useWeb3();
  const handleConnect = async () => {
    try {
      await magic.wallet.connectWithUI();
      initializeWeb3();
      const { publicAddress } = await magic.user.getMetadata();
      localStorage.setItem("user", publicAddress);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      localStorage.removeItem("user");
      await magic.user.logout();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleConnect,
    handleLogout,
  };
};

export default useAuth;
