const OuraApiV2Client = require("oura-api-v2-client").default;
const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);

const main = async () => {
  const dailyActivity = await ouraApiV2Client.dailyActivity();
  console.log(dailyActivity);
};

main();
