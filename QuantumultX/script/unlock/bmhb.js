/*
Unlocks by photonmang 公众号：墨鱼手记
#斑马海报（20210130）
https://zebra.maka.im/api/user/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bmhb.js

zebra.maka.im,
*/

let body= $response.body; 
var obj = JSON.parse(body); 
obj.data.business.is_lifelong_vip = true;
obj.data.business.wool = 20210130;
$done({body: JSON.stringify(obj)});
