import OuraApiV2Client from "../dist";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);
  const dailyActivity = await ouraApiV2Client.dailyActivity();
  console.log(dailyActivity);
};

main();
