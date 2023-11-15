import algosdk from "algosdk";
import axios from "axios";
import { useState } from "react";
import { magicAlgorand } from "../../services/magic";

const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const getProfile = async () => {
    try {
      const id = localStorage.getItem("user");
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}profile/${id}`
      );
      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const transferToken = async (scannerAddress) => {
    console.log("Transfiriendo...");

    const factoryMnemonic = process.env.REACT_APP_ALGORAND_MNEMONIC;
    const algodServer = "https://testnet-api.algonode.cloud";
    const algodToken = ""; // Token de la API si es necesario
    const algodPort = "";

    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
    const factoryAccount = algosdk.mnemonicToSecretKey(factoryMnemonic);

    try {
      let params = await algodClient.getTransactionParams().do();

      const assetID = 479753593;

      const doOptIn = async (address, assetID) => {
        let params = await algodClient.getTransactionParams().do();
        const optInTxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
          address,
          address,
          undefined,
          undefined,
          0,
          undefined,
          assetID,
          params
        );

        const signedOptInTxn = await magicAlgorand.algorand.signTransaction(
          optInTxn.toByte()
        );

        await algodClient.sendRawTransaction(signedOptInTxn.blob).do();
        await algosdk.waitForConfirmation(algodClient, signedOptInTxn.txID, 4);
      };

      // Optar por el token
      await doOptIn(scannerAddress, assetID);

      // Verificar el opt-in
      const hasOptedIn = async (address, assetID) => {
        const accountInfo = await algodClient.accountInformation(address).do();
        console.log(
          accountInfo["assets"].some((asset) => asset["asset-id"] === assetID)
        );
        return accountInfo["assets"].some(
          (asset) => asset["asset-id"] === assetID
        );
      };

      if (!(await hasOptedIn(scannerAddress, assetID))) {
        console.error("Error: Scanner address has not opted in for the asset.");
        return;
      }

      // Transferir los tokens a las direcciones correspondientes

      const transferTxn1 = algosdk.makeAssetTransferTxnWithSuggestedParams(
        factoryAccount.addr,
        scannerAddress,
        undefined,
        undefined,
        1, // Cantidad a transferir, 1 token
        undefined,
        assetID,
        params
      );

      // Firmar las transacciones de transferencia
      const signedTransferTxn1 = transferTxn1.signTxn(factoryAccount.sk);

      // Enviar las transacciones de transferencia
      await algodClient.sendRawTransaction(signedTransferTxn1).do();

      console.log(`Tokens transferidos: Asset ID ${assetID}`);
    } catch (error) {
      console.error("Error during token creation and transfer:", error);
    }
  };

  const connectProfile = async (connectedUserId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}profile/connect`,
        {
          magicId: localStorage.getItem("user"),
          connectedUserId,
        }
      );

      if (response.data) {
        console.log("Conectado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getProfile,
    profile,
    transferToken,
    connectProfile,
  };
};

export default useProfile;
