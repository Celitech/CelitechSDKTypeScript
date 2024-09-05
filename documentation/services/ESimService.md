# ESimService

A list of all methods in the `ESimService` service. Click on the method name to view detailed information about that method.

| Methods                           | Description      |
| :-------------------------------- | :--------------- |
| [getEsim](#getesim)               | Get eSIM Status  |
| [getEsimDevice](#getesimdevice)   | Get eSIM Device  |
| [getEsimHistory](#getesimhistory) | Get eSIM History |
| [getEsimMac](#getesimmac)         | Get eSIM MAC     |

## getEsim

Get eSIM Status

- HTTP Method: `GET`
- Endpoint: `/esim`

**Parameters**

| Name  | Type   | Required | Description    |
| :---- | :----- | :------- | :------------- |
| iccid | string | ✅       | ID of the eSIM |

**Return Type**

`GetEsimOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.eSim.getEsim({
    iccid: '1111222233334444555',
  });

  console.log(data);
})();
```

## getEsimDevice

Get eSIM Device

- HTTP Method: `GET`
- Endpoint: `/esim/{iccid}/device`

**Parameters**

| Name  | Type   | Required | Description    |
| :---- | :----- | :------- | :------------- |
| iccid | string | ✅       | ID of the eSIM |

**Return Type**

`GetEsimDeviceOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.eSim.getEsimDevice('1111222233334444555');

  console.log(data);
})();
```

## getEsimHistory

Get eSIM History

- HTTP Method: `GET`
- Endpoint: `/esim/{iccid}/history`

**Parameters**

| Name  | Type   | Required | Description    |
| :---- | :----- | :------- | :------------- |
| iccid | string | ✅       | ID of the eSIM |

**Return Type**

`GetEsimHistoryOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.eSim.getEsimHistory('1111222233334444555');

  console.log(data);
})();
```

## getEsimMac

Get eSIM MAC

- HTTP Method: `GET`
- Endpoint: `/esim/{iccid}/mac`

**Parameters**

| Name  | Type   | Required | Description    |
| :---- | :----- | :------- | :------------- |
| iccid | string | ✅       | ID of the eSIM |

**Return Type**

`GetEsimMacOkResponse`

**Example Usage Code Snippet**

```typescript
import { Celitech } from 'celitech-sdk';

(async () => {
  const celitech = new Celitech({
    clientId: 'client-id',
    clientSecret: 'client-secret',
  });

  const { data } = await celitech.eSim.getEsimMac('1111222233334444555');

  console.log(data);
})();
```
