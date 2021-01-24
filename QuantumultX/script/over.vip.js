/*
#over
^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/over.vip.js
api.overhq.com, 
*/
var body = $response.body;
let obj = JSON.parse(body);
obj.user.subscription["isSubscriptionActive"] = true;
obj.user.subscription["entitlement"] = ["OVER_PRO"];
$done({body:JSON.stringify(obj)});
