# oura-api-v2-client

ŌURA API V2 client

## Install

```bash
npm i oura-api-v2-client
```

## Get Token

https://cloud.ouraring.com/personal-access-tokens

## Examples

```js
const OuraApiV2Client = require('oura-api-v2-client').default;
const ouraApiV2Client = new OuraApiV2Client('ACCESS_TOKEN');

const main = async () => {
  const dailyActivity = await ouraApiV2Client.dailyActivity();
  console.log(dailyActivity);

  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);
};

main();
```

## LICENSE

MIT License
