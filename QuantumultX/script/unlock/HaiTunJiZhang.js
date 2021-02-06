/*
#海豚记账 (by @superuv)
下载地址 https://apps.apple.com/us/app/%E8%AE%B0%E8%B4%A6-%E6%B5%B7%E8%B1%9A%E8%AE%B0%E8%B4%A6%E6%9C%AC-%E6%97%A5%E5%B8%B8%E8%A3%85%E4%BF%AE%E6%97%85%E8%A1%8C%E8%AE%B0%E8%B4%A6%E5%B7%A5%E5%85%B7/id1232616736

https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/HTJZ.js

book.haitunwallet.com, 
*/

var obj = JSON.parse($response.body);
 obj={
 "data": {
  "level": 2,
  "status": 1,
  "openTime": "2099-10-20",
  "startTime": "2099-10-20",
  "endTime": "2099-10-20",
  "shareToken": ""
 },
 "code": 0,
 "msg": "返回成功"
};
$done({body: JSON.stringify(obj)});
//
