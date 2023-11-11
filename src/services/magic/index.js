import { Magic } from "magic-sdk";
import { AlgorandExtension } from "@magic-ext/algorand";

export const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY, {
  network: "goerli",
});

export const magicAlgorand = new Magic(process.env.REACT_APP_MAGIC_API_KEY, {
  extensions: {
    algorand: new AlgorandExtension({
      rpcUrl: "",
    }),
  },
});
