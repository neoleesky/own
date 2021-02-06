/*
# 陆琪讲故事
NobyDa

下载地址 https://apps.apple.com/us/app/%E9%99%86%E7%90%AA%E8%AE%B2%E6%95%85%E4%BA%8B-%E5%90%AC%E6%96%87%E5%AD%A6%E4%BD%9C%E5%93%81%E5%B0%8F%E8%AF%B4%E7%A5%9E%E5%99%A8/id1435575842

^https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/luqi.js

 www.luqijianggushi.com,
*/

let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 1630296877;
$done({body: JSON.stringify(obj)});
