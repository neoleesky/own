/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 043 森茂雅苑 微信小程序解锁隐藏内容 去除广告直接查看内容（20201027）
https://d.smkj33.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
mitm=d.smkj33.top,
# > 030 老胡工具箱 微信小程序解除隐藏内容 （20200916）
https://d.syshhc.top/wp-json/wp/v2/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
d.syshhc.top, 
*/

re('"excitationAd":"\\d"@Ad":"\d"@ad":true@AdId":"[^"]*"@adid":"[^"]*"','"excitationAd":"0"@Ad":"0"@ad":false@AdId":""@adid":""')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
