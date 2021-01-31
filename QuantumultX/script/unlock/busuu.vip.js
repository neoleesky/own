/*
#busuu
^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/busuu.vip.js
api.busuu.com,
*/
var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
