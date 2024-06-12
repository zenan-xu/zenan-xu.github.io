---
id: Tools
sidebar_label: Tools
sidebar_position: 5
---
# Tools

## Postman get info from response and set it to a var
For ex, get token from a login endpoint and use it as authorization for a second call

In `Tests` window:
```
var jsonData = pm.response.json();
pm.enviroment.set("my_token", jsonData.token);
```
Set `authorization/{{my_token}}` as header in the second call

