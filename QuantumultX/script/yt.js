/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 041 云听 解锁会员专属音频 舒舒服服躺着听（20201020）
http://getway.radio.cn/app* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yt.js

getway.radio.cn, 
*/
var body = $response.body.replace(/\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0031/g, '\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0030');
$done({ body });
