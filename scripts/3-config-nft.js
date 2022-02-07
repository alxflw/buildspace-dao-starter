import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x31Cd9191C87b32ABc5B347a1fd62808978905694",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Seed round incoming!",
        description: "This NFT will give you access to Seed Founders' DAO!",
        image: readFileSync("scripts/assets/founders.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()