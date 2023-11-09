import { Magic } from "magic-sdk";

export const magic = new Magic(process.env.REACT_APP_MAGIC_API_KEY, {
  network: "goerli",
});
