/*
Unlocks by Cuttlefish 公众号：墨鱼手记\
# > 039 睡眠助手 解锁VIP独享的白噪音乐（20201010）
https://www.helloshiyu.com/sleep/user/profile url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/smzs.js

www.helloshiyu.com, 
*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={"data":{"userId":"1fdbhfn","name":null,"gender":0,"avatar":null,"birthday":null,"mobile":null,"vipState":{"state":1,"forever":false,"startTime":1600334263000,"expireTime":1884343967000}},"code":1}
$done({body: JSON.stringify(obj)});
