/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 059 扎比科技资源箱 微信小程序crack 弹框显示最新三天download地址（20201214）
https://jabi.coding.net/p/xcx/d/xcx/git/raw/master/jabikj.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/jabi.js

jabi.coding.net
*/


//var body = unescape(body1);

//var date= '/"date":"[^"]*"/g';
//var reg = '"download":"[^"]*"';

var date= $response.body.match(/"date":"[^"]*"/g);

var body= $response.body.match(/"download":"[^"]*"/g);

console.log(body);


//target.replace(/quot/g,'\');

//var tt = target.replace(/&/g,'&').replace(/quot/g,'\').replace(/</g, '<').replace(/>/g,'>');

//$notify("图文内容","", date[0]+body[0]+date[1]+body[1];
$notify("扎比科技","", '\n'+date[0]+'\n'+body[0]+'\n\n'+date[1]+'\n'+body[1]+'\n\n'+date[2]+'\n'+body[2]);


$done({ body });
//var reg = /[\u4e00-\u9fa5]/g;
