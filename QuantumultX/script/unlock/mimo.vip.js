/*
#mimo
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/mimo-learn-coding-programming/id1133960732

^https:\/\/api\.getmimo\.com\/v1\/subscriptions$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/mimo.vip.js

api.getmimo.com,
*/
var obj = JSON.parse($response.body);

obj= {
  "source": "ios",
  "status": "active",
  "interval": "yearly",
  "billingInfo": {
    "currency": "USD",
    "nextBillingPrice": 59.98999999999999
  },
  "subscriptions": [
    {
      "source": "ios",
      "status": "active",
      "interval": "yearly",
      "billingInfo": {
        "currency": "USD",
        "nextBillingPrice": 59.98999999999999
      },
      "intervalCount": 1,
      "activeUntil": "2099-10-10T08:04:21+00:00",
      "createdAt": "2019-10-03T08:04:21+00:00",
      "clientSecret": "",
      "isActive": true
    }
  ],
  "intervalCount": 1,
  "activeUntil": "2099-10-10T08:04:21+00:00",
  "createdAt": "2019-10-03T08:04:21+00:00",
  "clientSecret": "",
  "isActive": true
};

$done({body: JSON.stringify(obj)});
