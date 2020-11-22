/*
#gyroscope记录健康数据全英文app
^https:\/\/api\.gyrosco\.pe\/v1\/account\/$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Gyroscope.vip.js

hostname = api.gyrosco.pe
*/

let obj = JSON.parse($response.body);
obj.user["active_until_time"] = "2099-01-01T00:00:00Z";
$done({body: JSON.stringify(obj)});
//bynubyta
