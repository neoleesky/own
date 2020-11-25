/*
#camera360
^https:\/\/bmall\.camera360\.com\/api\/(iap\/check-receipt$|mix\/getinfo$) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/camera360.vip.js

bmall.camera360.com,
 */
 var obj = JSON.parse($response.body);
obj=
{
  "status": 200,
  "data": {
    "sandbox": 1,
    "purchaseTime": 1571682188,
    "giftVip": 0,
    "productId": "VIP_yearly_29.99",
    "appleVip": 1,
    "expireTime": 4096532852,
    "operationVip": 1,
    "errorCode": 0
  },
  "message": "ok",
  "exetime": "1572056389212-1572056391362",
  "serverTime": 1572056391.3622
};
$done({body: JSON.stringify(obj)});
