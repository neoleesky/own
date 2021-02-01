/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 043 森茂雅苑 微信小程序解锁隐藏内容 去除广告直接查看内容（20201027）
https://d.smkj33.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
mitm=d.smkj33.top,
# > 038 纸塘壁纸 微信小程序 免广告直接下载原图壁纸（20201006）Attention：登录使用⭐️
https://api.bspapp.com/client url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ztbz.js
api.bspapp.com, 
# > 030 老胡工具箱 微信小程序解除隐藏内容 （20200916）
https://d.syshhc.top/wp-json/wp/v2/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
d.syshhc.top, 
# > 006 酸鸡汤,老爷花苑（光头的小程序，两个通用）（20200916）
https://[a-z]+.ddly666.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
 *.ddly666.top, 
# > 005 黑科技软件（20200901）小程序解除隐藏内容
^https:\/\/hkj178.com/wp-json/mp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
hkj178.com, 
# > 004 天泽后花园（20200901）小程序解除隐藏内容
^https:\/\/a.jxjt888.top/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
a.jxjt888.top, 
# > 003 小野分享（20200901）小程序解除隐藏内容
^https:\/\/lysl2020.com/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
lysl2020.com, 
# > 002 搜罗好货（20200901）小程序解除隐藏内容
^https:\/\/www.i3zh.com/wp-json/wp/v2/posts/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js
www.i3zh.com, 
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
