/*
# Jibjab(funny ecards,videos&gifs)
^https:\/\/origin-prod-phoenix\.jibjab\.com\/v1\/user$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/jibjab.vip.js

 api.sync.me,
 */
 let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
$done({body: JSON.stringify(obj)});
//bynubyta
