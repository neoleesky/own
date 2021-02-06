/*
#pushover
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/pushover-notifications/id506088175

^https:\/\/api\.pushover\.net\/1\/messages\.json* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/pushover.js

api.pushover.net, 
*/
var obj = JSON.parse($response.body);

obj["user"]["is_ios_licensed"]= true;

$done({body: JSON.stringify(obj)});

// Descriptions
