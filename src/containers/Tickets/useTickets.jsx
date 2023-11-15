import { useState } from "react";
import algosdk from "algosdk";
import { magicAlgorand } from "../../services/magic/index";

const useTickets = () => {
  const [isCreatingNft, setIsCreatingNft] = useState(false);

  // Función para obtener detalles de un asset
  const getAssetDetails = async (algodClient, assetId) => {
    try {
      const assetInfo = await algodClient.getAssetByID(assetId).do();
      return assetInfo;
    } catch (error) {
      console.error("Error obtaining asset details:", error);
      return null;
    }
  };

  // Función principal para obtener NFTs y su metadata
  const getNFTs = async () => {
    const publicAddress = await magicAlgorand.algorand.getWallet();
    const algodToken = "";
    const algodServer = "https://testnet-api.algonode.cloud";
    const algodPort = undefined;
    try {
      const algodClient = new algosdk.Algodv2(
        algodToken,
        algodServer,
        algodPort
      );

      // Obtiene la información de cuenta, incluyendo activos
      const accountInfo = await algodClient
        .accountInformation(publicAddress)
        .do();

      // Filtra para obtener solo los NFTs (activos total igual a 1)
      const nfts = accountInfo["assets"].filter(
        (asset) => asset["amount"] === 1
      );

      // Obtiene detalles completos y metadata de cada NFT
      const nftsDetails = await Promise.all(
        nfts.map(async (nft) => {
          const assetDetails = await getAssetDetails(
            algodClient,
            nft["asset-id"]
          );

          return { ...nft, assetDetails };
        })
      );

      return nftsDetails;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const createNFT = async (eventName) => {
    setIsCreatingNft(true);
    const publicAddress = await magicAlgorand.algorand.getWallet();
    const algodToken = "";
    const algodServer = "https://testnet-api.algonode.cloud";
    const algodPort = undefined;
    try {
      const algodClient = new algosdk.Algodv2(
        algodToken,
        algodServer,
        algodPort
      );
      const roundsToWait = 3;

      let suggestedParams = await algodClient.getTransactionParams().do();
      let assetCreateTxn =
        algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
          suggestedParams,
          from: publicAddress,
          assetName: eventName,
          total: 1,
          decimals: 0,
          reserve: publicAddress, // The address of the account that holds the uncirculated/unminted supply of the asset
          freeze: publicAddress,
          clawback: publicAddress, // The address of the account that can clawback the asset
          assetURL:
            "https://blockmedia.com/wp-content/uploads/2023/01/FmIl7RUXEAgr6Hj.jpeg", // The URL where more information about the asset can be retrieved
          manager: publicAddress, //,
          defaultFrozen: false,
        });

      let encodedTxn = algosdk.encodeObj(assetCreateTxn.get_obj_for_encoding());
      const signedTxn = await magicAlgorand.algorand.signTransaction(
        encodedTxn
      );
      await algodClient.sendRawTransaction(signedTxn.blob).do();

      console.log(
        `Sending asset create transaction ${assetCreateTxn.txID()}...`
      );

      await algosdk.waitForConfirmation(
        algodClient,
        assetCreateTxn.txID(),
        roundsToWait
      );

      const assetCreateInfo = await algodClient
        .pendingTransactionInformation(assetCreateTxn.txID())
        .do();

      const assetIndex = assetCreateInfo["asset-index"];

      console.log(
        `Asset ${assetIndex} created! See the transaction at https://testnet.algoexplorer.io/tx/${assetCreateTxn.txID()}`
      );

      setIsCreatingNft(false);
    } catch (error) {
      console.error(error);
      window.alert("Error. You must have ALGO in your account.");
      setIsCreatingNft(false);
    }
  };

  return { getNFTs, getAssetDetails, createNFT, isCreatingNft };
};

export default useTickets;
