# Celitech TypeScript Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-Built%20with%20Fern-brightgreen)](https://buildwithfern.com?utm_source=github&utm_medium=github&utm_campaign=readme&utm_source=Celitech%2FTypeScript)

Welcome to the Celitech SDK. It gives you typed access to the CELITECH eSIM API from your backend.

Useful links: [Homepage](https://www.celitech.com) | [Documentation](https://docs.celitech.com) | [Support email](mailto:devops@celitech.com) | [Blog](https://www.celitech.com/blog/)

## Table of Contents

- [Documentation](#documentation)
- [Installation](#installation)
- [Reference](#reference)
- [About the API](#about-the-api)
- [Authentication & Authorization](#authentication--authorization)
- [Usage](#usage)
- [Environments](#environments)
- [Request and Response Types](#request-and-response-types)
- [Exception Handling](#exception-handling)
- [Advanced](#advanced)
  - [Subpackage Exports](#subpackage-exports)
  - [Additional Headers](#additional-headers)
  - [Additional Query String Parameters](#additional-query-string-parameters)
  - [Retries](#retries)
  - [Timeouts](#timeouts)
  - [Aborting Requests](#aborting-requests)
  - [Access Raw Response Data](#access-raw-response-data)
  - [Logging](#logging)
  - [Custom Fetch](#custom-fetch)
  - [Custom Fetcher](#custom-fetcher)
  - [Runtime Compatibility](#runtime-compatibility)

## Documentation

API reference documentation is available [here](https://docs.celitech.com/).

## Installation

```sh
npm i -s celitech-sdk
```

## Reference

A full reference for this library is available [here](./reference.md).

## About the API

The CELITECH API is designed for use by partner platforms, including both web and mobile applications. It's assumed all endpoint calls are initiated from the backend of an integrated platform.

"Partners" refers to online service providers that use our eSIM API. Access levels include Gold, Platinum, and Diamond.

API URL: `https://api.celitech.net/v1`

## Authentication & Authorization

The CELITECH API uses the OAuth 2.0 client credentials flow. The token has a defined life span (typically 1 hour); the SDK fetches, caches and refreshes it for you.

To begin, obtain OAuth 2.0 client credentials (**CLIENT_ID** and **CLIENT_SECRET**) from the [CELITECH Dashboard](https://www.dashboard.celitech.com/) and pass them when you create the client.

Token URL: `https://auth.celitech.net/oauth2/token`

## Usage

Instantiate and use the client with the following:

```typescript
import { Celitech } from 'celitech-sdk';

const client = new Celitech({ clientId: 'CLIENT_ID', clientSecret: 'CLIENT_SECRET' });
await client.purchases.createPurchaseV2({
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
  destination: 'FRA',
  dataLimitInGB: 1,
  startDate: '2023-11-01',
  endDate: '2023-11-20',
  duration: 30,
  quantity: 1,
  email: 'example@domain.com',
  referenceId: 'abc111222333444',
  networkBrand: 'CELITECH',
  emailBrand: 'CELITECH',
  language: 'en',
});
```

## Environments

This SDK allows you to configure different environments for API requests.

```typescript
import { Celitech, CelitechApiEnvironment } from 'celitech-sdk';

const client = new Celitech({
  environment: CelitechApiEnvironment.Default,
});
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply import them with the
following namespace:

```typescript
import { CelitechApi } from "celitech-sdk";

const request: CelitechApi.ListPackagesRequest = {
    ...
};
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), a subclass of the following error
will be thrown.

```typescript
import { CelitechApiError } from "celitech-sdk";

try {
    await client.purchases.createPurchaseV2(...);
} catch (err) {
    if (err instanceof CelitechApiError) {
        console.log(err.statusCode);
        console.log(err.message);
        console.log(err.body);
        console.log(err.rawResponse);
    }
}
```

## Advanced

### Subpackage Exports

This SDK supports direct imports of subpackage clients, which allows JavaScript bundlers to tree-shake and include only the imported subpackage code. This results in much smaller bundle sizes.

```typescript
import { DestinationsClient } from 'celitech-sdk/destinations';

const client = new DestinationsClient({...});
```

### Additional Headers

If you would like to send additional headers as part of the request, use the `headers` request option.

```typescript
import { Celitech } from "celitech-sdk";

const client = new Celitech({
    ...
    headers: {
        'X-Custom-Header': 'custom value'
    }
});

const response = await client.purchases.createPurchaseV2(..., {
    headers: {
        'X-Custom-Header': 'custom value'
    }
});
```

### Additional Query String Parameters

If you would like to send additional query string parameters as part of the request, use the `queryParams` request option.

```typescript
const response = await client.purchases.createPurchaseV2(..., {
    queryParams: {
        'customQueryParamKey': 'custom query param value'
    }
});
```

### Retries

The SDK is instrumented with automatic retries with exponential backoff. A request will be retried as long
as the request is deemed retryable and the number of retry attempts has not grown larger than the configured
retry limit (default: 2).

Which status codes are retried depends on the `retryStatusCodes` generator configuration:

**`legacy`** (current default): retries on

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) (All server errors, including 500)

**`recommended`**: retries on

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [502](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) (Bad Gateway)
- [503](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503) (Service Unavailable)
- [504](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) (Gateway Timeout)

Use the `maxRetries` request option to configure this behavior.

```typescript
const response = await client.purchases.createPurchaseV2(..., {
    maxRetries: 0 // override maxRetries at the request level
});
```

### Timeouts

The SDK defaults to a 60 second timeout. Use the `timeoutInSeconds` option to configure this behavior.

```typescript
const response = await client.purchases.createPurchaseV2(..., {
    timeoutInSeconds: 30 // override timeout to 30s
});
```

### Aborting Requests

The SDK allows users to abort requests at any point by passing in an abort signal.

```typescript
const controller = new AbortController();
const response = await client.purchases.createPurchaseV2(..., {
    abortSignal: controller.signal
});
controller.abort(); // aborts the request
```

### Access Raw Response Data

The SDK provides access to raw response data, including headers, through the `.withRawResponse()` method.
The `.withRawResponse()` method returns a promise that results to an object with a `data` and a `rawResponse` property.

```typescript
const { data, rawResponse } = await client.purchases.createPurchaseV2(...).withRawResponse();

console.log(data);
console.log(rawResponse.headers['X-My-Header']);
```

### Logging

The SDK supports logging. You can configure the logger by passing in a `logging` object to the client options.

```typescript
import { Celitech, logging } from "celitech-sdk";

const client = new Celitech({
    ...
    logging: {
        level: logging.LogLevel.Debug, // defaults to logging.LogLevel.Info
        logger: new logging.ConsoleLogger(), // defaults to ConsoleLogger
        silent: false, // defaults to true, set to false to enable logging
    }
});
```

The `logging` object can have the following properties:

- `level`: The log level to use. Defaults to `logging.LogLevel.Info`.
- `logger`: The logger to use. Defaults to a `logging.ConsoleLogger`.
- `silent`: Whether to silence the logger. Defaults to `true`.

The `level` property can be one of the following values:

- `logging.LogLevel.Debug`
- `logging.LogLevel.Info`
- `logging.LogLevel.Warn`
- `logging.LogLevel.Error`

To provide a custom logger, you can pass in an object that implements the `logging.ILogger` interface.

<details>
<summary>Custom logger examples</summary>

Here's an example using the popular `winston` logging library.

```ts
import winston from 'winston';

const winstonLogger = winston.createLogger({...});

const logger: logging.ILogger = {
    debug: (msg, ...args) => winstonLogger.debug(msg, ...args),
    info: (msg, ...args) => winstonLogger.info(msg, ...args),
    warn: (msg, ...args) => winstonLogger.warn(msg, ...args),
    error: (msg, ...args) => winstonLogger.error(msg, ...args),
};
```

Here's an example using the popular `pino` logging library.

```ts
import pino from 'pino';

const pinoLogger = pino({...});

const logger: logging.ILogger = {
  debug: (msg, ...args) => pinoLogger.debug(args, msg),
  info: (msg, ...args) => pinoLogger.info(args, msg),
  warn: (msg, ...args) => pinoLogger.warn(args, msg),
  error: (msg, ...args) => pinoLogger.error(args, msg),
};
```

</details>

### Custom Fetch

The SDK provides a low-level `fetch` method for making custom HTTP requests while still
benefiting from SDK-level configuration like authentication, retries, timeouts, and logging.
This is useful for calling API endpoints not yet supported in the SDK.

```typescript
const response = await client.fetch(
  '/v1/custom/endpoint',
  {
    method: 'GET',
  },
  {
    timeoutInSeconds: 30,
    maxRetries: 3,
    headers: {
      'X-Custom-Header': 'custom-value',
    },
  },
);

const data = await response.json();
```

### Custom Fetcher

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're running in an
unsupported environment, this provides a way for you to break glass and ensure the SDK works.

```typescript
import { Celitech } from "celitech-sdk";

const client = new Celitech({
    ...
    fetcher: // provide your implementation here
});
```

### Runtime Compatibility

The SDK works in the following runtimes:

- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native
