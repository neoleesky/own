/*
#over
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/over-graphic-design-maker/id535811906

^https:\/\/api\.overhq\.com\/(user\/token\/refresh$|subscription\/verifyReceipt$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/over.vip.js

api.overhq.com, 
*/
var body = $response.body;
let obj = JSON.parse(body);
obj.user.subscription["isSubscriptionActive"] = true;
obj.user.subscription["entitlement"] = ["OVER_PRO"];
$done({body:JSON.stringify(obj)});
