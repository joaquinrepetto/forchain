import { magicAlgorand, magic } from "../../services/magic/index.js";
import { useWeb3 } from "../../containers/Context/Web3Context.js";
import { useUser } from "../../containers/Context/UserContext.js";
import { useState } from "react";
import axios from "axios";

const useAuth = () => {
  const { setUser } = useUser();
  const [userInfo, setUserInfo] = useState(null);

  const { initializeWeb3 } = useWeb3();

  const handleConnect = async () => {
    try {
      await magic.wallet.connectWithUI();
      initializeWeb3();
      const data = await magicAlgorand.user.getMetadata();
      //Usar .env para la url
      await axios.post(`${process.env.REACT_APP_API}profile/register`, {
        magicId: data.publicAddress,
        email: data.email,
      });
      localStorage.setItem("user", data.publicAddress);
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetInfo = async () => {
    try {
      const data = await magic.user.getInfo();
      setUserInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleConnect,
    handleLogout,
    handleGetInfo,
    userInfo,
  };
};

export default useAuth;
