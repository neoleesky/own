/*
Unlocks by Cuttlefish 公众号：墨鱼手记
#小习惯 Pro（20210106）

下载地址 https://apps.apple.com/us/app/%E5%B0%8F%E4%B9%A0%E6%83%AF-%E6%97%A5%E5%B8%B8%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90%E4%B8%8E%E6%8F%90%E9%86%92%E4%BA%8B%E9%A1%B9%E5%A4%87%E5%BF%98/id1455083310

https://xianbeikeji.com/daily/app/user/query url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/mzjz.js

xianbeikeji.com
*/
var body = $response.body.replace(/vipStatus":0/g, 'vipStatus":1').replace(/vipType":0/g, 'vipType":1').replace(/vipFlag":0/g, 'vipFlag":1');
$done({ body });

