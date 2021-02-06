/*
Unlocks by photonmang 公众号：墨鱼手记
#斑马海报（20210130）

下载地址 https://apps.apple.com/us/app/%E6%96%91%E9%A9%AC%E6%B5%B7%E6%8A%A5-%E6%B5%B7%E6%8A%A5%E6%8B%BC%E5%9B%BE%E8%AE%BE%E8%AE%A1-%E4%BD%9C%E5%9B%BE%E5%9B%BE%E7%89%87%E7%BE%8E%E5%8C%96/id1543526344

https://zebra.maka.im/api/user/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bmhb.js

zebra.maka.im,
*/

let body= $response.body; 
var obj = JSON.parse(body); 
obj.data.business.is_lifelong_vip = true;
obj.data.business.wool = 20210130;
$done({body: JSON.stringify(obj)});
