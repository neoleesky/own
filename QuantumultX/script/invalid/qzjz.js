/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 058 圈子记账 你的记账小工具（20201214）
https://quanzi.jizhangapp.com/* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzjz.js

quanzi.jizhangapp.com, 
*/
var body = $response.body.replace(/foreverVip":\\d+/g, 'foreverVip":1').replace(/tatus":\\d/g, 'tatus":1')
$done({ body });
