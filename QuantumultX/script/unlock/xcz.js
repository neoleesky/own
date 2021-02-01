/*
Unlocks by Cuttlefish 公众号：墨鱼手记
#西窗烛（20200924）Attention：登录使用
https://avoscloud.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcz.js

avoscloud.com
*/
var body = $response.body.replace(/Membership":false/g, 'Membership":true')
$done({ body });
