export const openExternalUrl = (urlType, url) => {
  switch (urlType) {
    case "txID":
      window.open(`https://testnet.algoexplorer.io/tx/${url}`, "_blank");
      break;
    case "metadata":
      window.open(`https://ipfs.io/ipfs/${url}`, "_blank");
      break;
  }
  if (urlType === "txID") {
    window.open(`https://testnet.algoexplorer.io/tx/${url}`, "_blank");
  }
  if (urlType === "txID") {
    window.open(`https://ipfs.io/ipfs/${url}`, "_blank");
  }
};
