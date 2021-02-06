/*
Unlocks by demo2099
# > 034 英语阅读 解锁永久会员 （20200926）Attention：登录使用 ⭐️
^http:\/\/duoting\.tatatimes\.com\/tataeraapi\/api\.s\?h=QueryVipUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/englishread.js 

duoting.tatatimes.com, 
*/
var body = $response.body;
let url=$request.url;
if(url.endsWith("QueryVipUser")){
body={
  "isVip": true,
  "code": 200,
  "expireDays": 5201314
};
}
body=JSON.stringify(body);$done({body});
