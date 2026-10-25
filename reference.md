# Reference

## Destinations

<details><summary><code>client.destinations.<a href="/src/api/resources/destinations/client/Client.ts">listDestinations</a>() -> CelitechApi.ListDestinationsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Destinations

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.destinations.listDestinations();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DestinationsClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Packages

<details><summary><code>client.packages.<a href="/src/api/resources/packages/client/Client.ts">listPackages</a>({ ...params }) -> CelitechApi.ListPackagesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Packages

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.packages.listPackages({
  destination: 'FRA',
  dataLimitInGB: 1,
  startDate: '2023-11-01',
  endDate: '2023-11-20',
  afterCursor:
    'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA',
  limit: 20,
  includeUnlimited: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.ListPackagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PackagesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Purchases

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">createPurchaseV2</a>({ ...params }) -> CelitechApi.CreatePurchaseV2ResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to purchase a new eSIM by providing the package details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.createPurchaseV2({
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
  body: createPurchaseV2Request,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.CreatePurchaseV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">listPurchases</a>({ ...params }) -> CelitechApi.ListPurchasesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can be used to list all the successful purchases made between a given interval.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.listPurchases({
  purchaseId: '4973fa15-6979-4daa-9cf3-672620df819c',
  iccid: '1111222233334444555000',
  afterDate: '2023-11-01',
  beforeDate: '2023-11-20',
  email: 'example@gmail.com',
  referenceId: 'abc111222333444',
  afterCursor:
    'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA',
  limit: 20,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.ListPurchasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">createPurchase</a>({ ...params }) -> CelitechApi.CreatePurchaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to purchase a new eSIM by providing the package details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.createPurchase({
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
  body: createPurchaseRequest,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.CreatePurchaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">topUpEsim</a>({ ...params }) -> CelitechApi.TopUpEsimResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to top-up an existing eSIM with the previously associated destination by providing its ICCID and package details. To determine if an eSIM can be topped up, use the Get eSIM endpoint, which returns the `isTopUpAllowed` flag.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.topUpEsim({
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
  body: topUpEsimRequest,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.TopUpEsimRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">editPurchase</a>({ ...params }) -> CelitechApi.EditPurchaseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint allows you to modify the validity dates of an existing purchase. **Behavior:** - If the purchase has **not yet been activated**, both the start and end dates can be updated. - If the purchase is **already active**, only the **end date** can be updated, while the **start date must remain unchanged** (and should be passed as originally set). - Updates must comply with the same pricing structure; the modification cannot alter the package size or change its duration category. The end date can be extended or shortened as long as it adheres to the same pricing category and does not exceed the allowed duration limits.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.editPurchase({
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
  body: editPurchaseRequest,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.EditPurchaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.purchases.<a href="/src/api/resources/purchases/client/Client.ts">getPurchaseConsumption</a>({ ...params }) -> CelitechApi.GetPurchaseConsumptionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.purchases.getPurchaseConsumption({
  purchaseId: '4973fa15-6979-4daa-9cf3-672620df819c',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.GetPurchaseConsumptionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchasesClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ESim

<details><summary><code>client.eSim.<a href="/src/api/resources/eSim/client/Client.ts">getEsim</a>({ ...params }) -> CelitechApi.GetEsimResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get eSIM

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eSim.getEsim({
  iccid: '1111222233334444555000',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.GetEsimRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ESimClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eSim.<a href="/src/api/resources/eSim/client/Client.ts">getEsimDevice</a>({ ...params }) -> CelitechApi.GetEsimDeviceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get eSIM Device

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eSim.getEsimDevice({
  iccid: '1111222233334444555000',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.GetEsimDeviceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ESimClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eSim.<a href="/src/api/resources/eSim/client/Client.ts">getEsimHistory</a>({ ...params }) -> CelitechApi.GetEsimHistoryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get eSIM History

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eSim.getEsimHistory({
  iccid: '1111222233334444555000',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.GetEsimHistoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ESimClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eSim.<a href="/src/api/resources/eSim/client/Client.ts">suspendEsim</a>({ ...params }) -> CelitechApi.SuspendEsimResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Suspends an eSIM to prevent abuse. All of the eSIM's packages are terminated and its connectivity is switched off. The eSIM is not refunded: the charge stays.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eSim.suspendEsim({
  iccid: '1111222233334444555000',
  Idempotency_Key: '8f14e45f-ceea-4672-a1d9-0a5a3c2f1e17',
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.SuspendEsimRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ESimClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## IFrame

<details><summary><code>client.iFrame.<a href="/src/api/resources/iFrame/client/Client.ts">token</a>() -> CelitechApi.TokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a new token to be used in the iFrame

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.iFrame.token();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `IFrameClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## OAuth

<details><summary><code>client.oAuth.<a href="/src/api/resources/oAuth/client/Client.ts">getAccessToken</a>({ ...params }) -> CelitechApi.OAuthTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.oAuth.getAccessToken(oAuthTokenRequest);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `CelitechApi.OAuthTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OAuthClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
