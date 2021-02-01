/*
# > 010 财新 解锁付费文章（20200901）
https://mappsv5.caixin.com/articlev5/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/caixin.js

mappsv5.caixin.com, 
*/

re('isPay > 0','isPay <= 0')

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
