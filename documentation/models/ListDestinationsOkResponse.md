# ListDestinationsOkResponse

**Properties**

| Name         | Type           | Required | Description |
| :----------- | :------------- | :------- | :---------- |
| destinations | Destinations[] | ❌       |             |

# Destinations

**Properties**

| Name               | Type     | Required | Description                                                                                                                                                                                                                                                                                                               |
| :----------------- | :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name               | string   | ❌       | Name of the destination                                                                                                                                                                                                                                                                                                   |
| destination        | string   | ❌       | ISO representation of the destination                                                                                                                                                                                                                                                                                     |
| supportedCountries | string[] | ❌       | This array indicates the geographical area covered by a specific destination. If the destination represents a single country, the array will include that country. However, if the destination represents a broader regional scope, the array will be populated with the names of the countries belonging to that region. |
