# TopUpEsimRequest

**Properties**

| Name          | Type   | Required | Description                                                                                                                                             |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| iccid         | string | ✅       | ID of the eSIM                                                                                                                                          |
| dataLimitInGb | number | ✅       | Size of the package in GB. The available options are 1, 2, 3, 5, 8, 20GB                                                                                |
| startDate     | string | ✅       | Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.          |
| endDate       | string | ✅       | End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 90 days after Start date.                                        |
| email         | string | ❌       | Email address where the purchase confirmation email will be sent (excluding QR Code & activation steps)                                                 |
| referenceId   | string | ❌       | An identifier provided by the partner to link this purchase to their booking or transaction for analytics and debugging purposes.                       |
| emailBrand    | string | ❌       | Customize the email brand. This parameter is accessible to platforms with Diamond tier and requires an alphanumeric string of up to 25 characters.      |
| startTime     | number | ❌       | Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months. |
| endTime       | number | ❌       | Epoch value representing the end time of the package's validity. End time can be maximum 90 days after Start time.                                      |
