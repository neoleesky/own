/*
#Nhaccuatui
越南老哥langkhach270389

下载地址
https://apps.apple.com/us/app/nhaccuatui-find-mp3-music/id1210763463

^https:\/\/graph\.nhaccuatui\.com\/.*\/users\/info* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/nhaccuatui.js

graph.nhaccuatui.com,
*/

var obj = JSON.parse($response.body);
let url = $request.url;
var cons = "users/info";
if(url.indexOf(cons) != -1)
{
obj.data.VIPExpire= "27/03/9999 00:00:00";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
