# oura-api-v2-client

# Install

```bash
npm i oura-api-v2-client
```

# Get Token

https://cloud.ouraring.com/personal-access-tokens

# Examples

```js
import OuraApiV2Client from "oura-api-v2-client";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client('<ACCESS_TOKEN>');
  const personalInfo = await ouraApiV2Client.personalInfo();
  console.log(personalInfo);
};

main();

```

```js
import OuraApiV2Client from "oura-api-v2-client";

const main = async () => {
  const ouraApiV2Client = new OuraApiV2Client('<ACCESS_TOKEN>');
  const dailyActivity = await ouraApiV2Client.dailyActivity();
  console.log(dailyActivity);
};

main();
```

## LICENSE

MIT License
