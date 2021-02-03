/*
Unlocks by Cuttlefish 公众号：墨鱼手记
#西窗烛（20200924）Attention：登录使用

下载地址 https://apps.apple.com/us/app/%E8%A5%BF%E7%AA%97%E7%83%9B-%E5%93%81%E5%91%B3%E4%B8%AD%E5%9B%BD%E8%AF%97%E8%AF%8D%E4%B9%8B%E7%BE%8E/id912139104

https://avoscloud.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcz.js

avoscloud.com
*/
var body = $response.body.replace(/Membership":false/g, 'Membership":true')
$done({ body });
