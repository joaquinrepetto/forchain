import algosdk from "algosdk";
import { magicAlgorand } from "./magic";
import axios from "axios";

// //Conectarse al server de Algorand test
const algodToken = "";
const algodServer = "https://testnet-api.algonode.cloud";
const algodPort = undefined;

//create the NFT ticket using the magic link wallet and the algosdk

export const createEventTicketAsset = async (
  publicAddress,
  eventName,
  eventDescription,
  eventImageUrl,
  ticketsAmount
) => {
  try {
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
    const roundsToWait = 3;

    //upload to IPFS
    // await uploadJSONToIPFS(
    //   eventName,
    //   eventDescription,
    //   eventImageUrl,
    //   ticketsAmount
    // );

    //calls API pinata function for IPFS hosting
    const body = {
      eventName: eventName,
      eventDescription: eventDescription,
      eventImageUrl: eventImageUrl,
      ticketsAmount: ticketsAmount,
    };
    const pinataResponse = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/ipfs/upload-json-ipfs`,
      body
    );
    const ipfsHash = pinataResponse.data.response.IpfsHash;

    console.log("apiresponse", ipfsHash);

    let suggestedParams = await algodClient.getTransactionParams().do();
    let assetCreateTxn =
      algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        suggestedParams,
        from: publicAddress,
        assetName: eventName || "Event Ticket" + "@arc3",
        assetUnitName: "TCKT",
        assetTotal: Number(ticketsAmount),
        assetDecimals: 0,
        reserve: publicAddress, // The address of the account that holds the uncirculated/unminted supply of the asset
        freeze: publicAddress,
        clawback: publicAddress, // The address of the account that can clawback the asset
        assetURL: "ipfs://" + ipfsHash, // The URL where more information about the asset can be retrieved
        manager: publicAddress, //,
      });

    //encode and send transaction
    let encodedTxn = algosdk.encodeObj(assetCreateTxn.get_obj_for_encoding());
    const signedTxn = await magicAlgorand.algorand.signTransaction(encodedTxn);
    await algodClient.sendRawTransaction(signedTxn.blob).do();

    console.log(`Sending asset create transaction ${assetCreateTxn.txID()}...`);

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

    return { txID: assetCreateTxn.txID(), ipfsHash: ipfsHash };
  } catch (error) {
    console.error(error);
    window.alert("You must have ALGO in your account.");
  }
};
