import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule("0x31Cd9191C87b32ABc5B347a1fd62808978905694");

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      "✅ Successfully set claim condition on bundle drop:",
      bundleDrop.address
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
