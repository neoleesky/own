/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 057 AppleAndroid 微信小程序破解 弹框显示内容（20201214）
https://iosoi.cn/wp-json/wp/v2/posts/\d+ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/aa.js
https://iosoi.cn/wp-content/plugins/xingshu.php url response-body adid":"[^"]*" response-body adid":""

iosoi.cn
*/
var body1= $response.body.replace(/\\\//g, '/').replace(/<p>/ig,"").replace(/<\/p>/ig,"").replace(/<a href=\\/ig,"").replace(/<\/a>/ig,"").replace(/<br \/>/ig,"").replace(/<br\/>/ig,"").replace(/\\">/ig,'"').replace(/,"protected":false/ig,'').replace(/\\u/g, '%u').replace(/\\n/ig,"");

var body = unescape(body1);

var reg = 'content":\{"[^}]*}';

var target=body.match(reg);

console.log(target);


//target.replace(/quot/g,'\');

//var tt = target.replace(/&/g,'&').replace(/quot/g,'\').replace(/</g, '<').replace(/>/g,'>');

$notify("图文内容","", target);

$done({ body });
//var reg = /[\u4e00-\u9fa5]/g;
