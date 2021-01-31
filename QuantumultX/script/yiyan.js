/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 029 一言 解锁终身会员 （20200916）Attention:登录使用
http://115.28.168.103:8080/yiyan/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js

115.28.168.103, 
*/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
