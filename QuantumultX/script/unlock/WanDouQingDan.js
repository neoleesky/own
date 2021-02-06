/*
Unlocks by Cuttlefish 公众号：墨鱼手记
#豌豆清单 为你的日程好好规划一下(20201112)

下载地址 https://apps.apple.com/us/app/%E8%B1%8C%E8%B1%86%E6%B8%85%E5%8D%95-%E6%8F%90%E9%86%92%E4%BA%8B%E9%A1%B9%E6%97%A5%E5%8E%86%E6%89%93%E5%8D%A1to-do-list/id1477839383

^https:\/\/www\.40sishi\.com\/list\/user\/profile$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wdqd.js

www.40sishi.com, 
*/
var body = $response.body.replace(/forever":false/g, 'forever":true').replace(/state":2/g, 'state":1')
$done({ body });
