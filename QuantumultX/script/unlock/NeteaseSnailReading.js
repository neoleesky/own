/*
Netease snail reading unlock vip
By yxiaocai & JO2EY

下载地址 https://apps.apple.com/us/app/%E7%BD%91%E6%98%93%E8%9C%97%E7%89%9B%E8%AF%BB%E4%B9%A6/id1127249355

QX:
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

Surge4：
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js

Surge & QX MITM = p.du.163.com
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});
