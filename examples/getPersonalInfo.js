import OuraApiV2Client from "../dist";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client(process.env.ACCESS_TOKEN);
  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);
};

main();
