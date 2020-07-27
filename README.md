# ftaoba-ble-centraljs

ftaoba ble central for browser.

## Install

```
npm install @ftaoba/ble-central
```

## Usage

```ts
import { FTAobaBLECentral } from "@ftaoba/ble-central";

const ftaobaCentral = await FTAobaBLECentral.initialize();

ftaobaCentral.on("data", (data) => {
  console.log(data.transform);
});
```
