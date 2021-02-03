/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# 一言 解锁终身会员 （20200916）Attention:登录使用

下载地址 https://apps.apple.com/us/app/%E4%B8%80%E8%A8%80-%E8%AE%B0%E5%BD%95%E5%AD%97%E5%8F%A5-%E5%8F%91%E7%8E%B0%E5%85%B1%E9%B8%A3/id1010174792

http://115.28.168.103:8080/yiyan/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js

115.28.168.103, 
*/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
