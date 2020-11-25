/*
#Memrise学习外语（不包括英语）
^https:\/\/api\.memrise\.com\/.+\/(me\/$|dashboard\/$|leaderboards\/following\/) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/memrise.vip.js

api.meiease.c*, api.memrise.com, 
*/
let obj = JSON.parse($response.body);
let url = $request.url;
const cons1 = "me/";
const cons2 = "dashboard/";
const cons3 = "following/";

if(url.endsWith(cons1)) {
obj["profile"]["is_pro"] = true;
}

if(url.endsWith(cons2)) {
obj["user"]["is_premium"] = true;
}

if(url.indexOf(cons3) != -1 ) {
obj["users"][0]["is_premium"] = true;
}
$done({body: JSON.stringify(obj)});
