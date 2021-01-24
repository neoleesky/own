/*
#endel
^https:\/\/api-production\.endel\.io\/.*\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/endel.js
api-production.endel.io
*/
var obj = JSON.parse($response.body);

obj["subscription_info"]= {
    "type" : "IOS",
    "valid_until" : 1873089612.367564
    };

$done({body: JSON.stringify(obj)});

// Descriptions
