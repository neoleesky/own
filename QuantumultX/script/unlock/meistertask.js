/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 024 MeisterTask Premium(20200910)
https://www.mindmeister.com/api/v2/licenses/meistertask url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/meistertask.js

www.mindmeister.com, 
*/
var body = $response.body.replace(/"academic":false/g, '"academic":true').replace(/"name":"basic"/g, '"name":"business"').replace(/trial":false/g, 'trial":true');
$done({ body });
