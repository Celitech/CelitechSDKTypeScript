# GetEsimHistoryOkResponse

**Properties**

| Name | Type                         | Required | Description |
| :--- | :--------------------------- | :------- | :---------- |
| esim | GetEsimHistoryOkResponseEsim | ❌       |             |

# GetEsimHistoryOkResponseEsim

**Properties**

| Name    | Type      | Required | Description    |
| :------ | :-------- | :------- | :------------- |
| iccid   | string    | ❌       | ID of the eSIM |
| history | History[] | ❌       |                |

# History

**Properties**

| Name       | Type   | Required | Description                                                                                                                         |
| :--------- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| status     | string | ❌       | The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR' |
| statusDate | string | ❌       | The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ'                                                         |
| date       | number | ❌       | Epoch value representing the date when the eSIM status changed                                                                      |
