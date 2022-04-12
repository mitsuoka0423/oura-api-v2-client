import OuraApiV2Client from "oura-api-v2-client";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);
  const sleep = await ouraApiV2Client.sleep_v1();
  console.log(sleep);
};

main();
