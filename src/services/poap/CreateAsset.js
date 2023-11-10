import algosdk from "algosdk";

// Obtiene los parámetros sugeridos

const account = algosdk.generateAccount();
console.log("Mnemonic:", algosdk.secretKeyToMnemonic(account.sk));
console.log("Address:", account.addr);



const CreateNFT = async () => {
  //Conectarse al server de Algorand test
  const algodToken = "";
  const algodServer = "https://testnet-api.algonode.cloud";
  const algodPort = undefined;

  try {
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
    const roundsToWait = 3;

    let suggestedParams = await algodClient.getTransactionParams().do();
    let assetCreateTxn =
      algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
        suggestedParams,
        from: account.addr,
        assetName: "Taza de café",
        assetUnitName: "TDC",
        assetTotal: 100,
        assetDecimals: 0,
        reserve: account.addr, // The address of the account that holds the uncirculated/unminted supply of the asset
        freeze: account.addr,
        clawback: account.addr, // The address of the account that can clawback the asset
        assetURL: "https://blockmedia.com/wp-content/uploads/2023/01/FmIl7RUXEAgr6Hj.jpeg", // The URL where more information about the asset can be retrieved
        manager: account.addr, //,
      });

    let signedTxn = assetCreateTxn.signTxn(account.sk);
    await algodClient.sendRawTransaction(signedTxn).do();
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
      `Asset ${assetIndex} created! See the transaction at https://testnet.algoscan.app/tx/${assetCreateTxn.txID()}`
    );
  } catch (error) {
    console.error(error);
  }
};

export default CreateNFT;
