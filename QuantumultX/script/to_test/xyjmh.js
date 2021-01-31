/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 036 小妖精美化 解锁会员 美化桌面widget（20201002）
https://bbs.maibaapp.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xyjmh.js 

bbs.maibaapp.com, 
*/
var body = $response.body.replace(/\u0066\u0061\u006C\u0073\u0065/g, '\u0074\u0072\u0075\u0065').replace(/\u0065\u006E\u0064\u0022\u003A\u0030/g, '\u0065\u006E\u0064\u0022\u003A\u0031\u0039\u0031\u0037\u0030\u0038\u0033\u0036\u0034\u0031\u0030\u0030\u0030');
$done({ body });
