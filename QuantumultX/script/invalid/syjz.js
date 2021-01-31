/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 045 鲨鱼记账 需要登录 解锁会员记账权限（20201104）
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

api.shayujizhang.com, 
*/
var body = $response.body;
var url = $request.url;
const path1 = "/account/detail";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj.data.vip = {"isvip": 1,"days": 999};
	body = JSON.stringify(obj);
 }
$done({body});
