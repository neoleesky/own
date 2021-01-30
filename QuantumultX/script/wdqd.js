/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 050 豌豆清单 为你的日程好好规划一下(20201112)
^https:\/\/www\.40sishi\.com\/list\/user\/profile$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wdqd.js

www.40sishi.com, 
*/
var body = $response.body.replace(/forever":false/g, 'forever":true').replace(/state":2/g, 'state":1')
$done({ body });
