import algosdk from "algosdk";
import { magicAlgorand } from "./magic";

// //Conectarse al server de Algorand test
const algodToken = "";
const algodServer = "https://testnet-api.algonode.cloud";
const algodPort = undefined;

//create the NFT ticket using the magic link wallet and the algosdk
export const createEventTicketAsset = async (publicAddress, eventName) => {
  const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
  const roundsToWait = 3;

  let suggestedParams = await algodClient.getTransactionParams().do();
  let assetCreateTxn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    suggestedParams,
    from: publicAddress,
    assetName: eventName || "Event Ticket",
    assetUnitName: "TCKT",
    assetTotal: 100,
    assetDecimals: 0,
    reserve: publicAddress, // The address of the account that holds the uncirculated/unminted supply of the asset
    freeze: publicAddress,
    clawback: publicAddress, // The address of the account that can clawback the asset
    assetURL: "https://url_donde_lleva_el_qr.org", // The URL where more information about the asset can be retrieved
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
};
