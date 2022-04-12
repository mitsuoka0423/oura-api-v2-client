const OuraApiV2Client = require("oura-api-v2-client").default;
const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);

const main = async () => {
  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);
};

main();
