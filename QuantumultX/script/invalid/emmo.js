/*
Unlocks by Wangzp
# > 056 emmo 解锁会员（20201209）
^http://106.54.2.168/emmoDiary/user/getUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/emmo.js

*/
var body = $response.body;
let obj = JSON.parse(body);
obj.data.user["isLifeVip"] = "1",
obj.data.user["isVip"] = "1",
obj.data.user["isApplePurchase"] = true,
obj.data.user["vipEndTime"] = "2029-11-16",
body = JSON.stringify(obj);
$done({body});
