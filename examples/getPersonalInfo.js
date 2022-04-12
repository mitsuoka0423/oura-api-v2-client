import OuraApiV2Client from "oura-api-v2-client";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);
  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);
};

main();
