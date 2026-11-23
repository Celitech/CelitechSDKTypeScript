# ListPackagesResponse

**Properties**

| Name        | Type                                                                    | Required | Description                                                                                                                                                                                                                                                                                    |
| :---------- | :---------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| packages    | [ListPackagesResponsePackagesItem[]](#listpackagesresponsepackagesitem) | ✅        |                                                                                                                                                                                                                                                                                                |
| afterCursor | string                                                                  | ✅        | The cursor value representing the end of the current page of results. Use this cursor value as the "afterCursor" parameter in your next request to retrieve the subsequent page of results. It ensures that you continue fetching data from where you left off, facilitating smooth pagination |

# ListPackagesResponsePackagesItem

**Properties**

| Name             | Type   | Required | Description                                                                             |
| :--------------- | :----- | :------- | :-------------------------------------------------------------------------------------- |
| id               | string | ✅        | ID of the package                                                                       |
| destination      | string | ✅        | ISO3 representation of the package's destination.                                       |
| destinationISO2  | string | ✅        | ISO2 representation of the package's destination.                                       |
| dataLimitInBytes | number | ✅        | Size of the package in Bytes. A value of `-1` indicates an unlimited package.           |
| dataLimitInGB    | number | ✅        | Size of the package in GB. A value of `-1` indicates an unlimited (date-based) package. |
| minDays          | number | ✅        | Min number of days for the package                                                      |
| maxDays          | number | ✅        | Max number of days for the package                                                      |
| priceInCents     | number | ✅        | Price of the package in cents                                                           |
