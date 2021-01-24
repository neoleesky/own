/*
#zingmp3
^https:\/\/api\.global\.mp3\.zing\.vn\/1\.0\/getUserInfo\?data=* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/zingmp3.js
api.global.mp3.zing.vn, 
*/
let obj= JSON.parse($response.body);

//fake user vip
delete obj.data.lastVipExpireTime;
obj.data.vip= {
  "expireTime": 1892800999,
  "startTime": 1572527803,
  "subscription": {
    "status": 0,
    "expireTime": 1892800999,
    "platform": 2
  },
  "vipType": 1
}

$done({body:JSON.stringify(obj)});
