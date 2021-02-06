/*
# 石墨文档 (By Alex0510)
https://api.shimo.im/users/ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/shimo.js

api.shimo.im
*/

let obj = JSON.parse($response.body);

obj.membership = {
    "accountTypeExpiredAt": "2099-04-30T16:00:00.000Z",
    "accountTypeCreatedAt": "2020-03-25T13:09:31.000Z",
    "accountType": "personal_premium",
    "isEnterprisePremium": true,
    "isExpired": false,
    "isNewDing": false,
    "isOfficial": true
  }

$done({body: JSON.stringify(obj)});
