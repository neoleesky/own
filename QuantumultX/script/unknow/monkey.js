/*
#all apps monkey
^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/monkey.js
www.api.monkeyuni.net, 
*/
var obj = JSON.parse($response.body);

obj.data.purchased=
{
      "product_list": [
      ],
      "is_active": true,
      "time_expire": 0,
      "pay_inapp": true,
      "is_free": false
    };
$done({body: JSON.stringify(obj)});

// Descriptionsp
