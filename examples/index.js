const OuraApiV2Client = require("oura-api-v2-client").default;
const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);

const main = async () => {
  const dailyActivity = await ouraApiV2Client.dailyActivity();
  console.log(dailyActivity);

  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);

  const sleep = await ouraApiV2Client.sleep_v1();
  console.log(sleep);
};

main();
