/*
#grammarly
^https:\/\/subscription\.grammarly\.com\/api\/v1$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/grammarly.js
*.grammarly.com
*/
let obj = JSON.parse($response.body)
obj.isPremium = true;
$done({body:JSON.stringify(obj)})
