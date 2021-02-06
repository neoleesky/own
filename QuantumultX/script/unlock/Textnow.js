/*
#Textnow
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/textnow-call-text-unlimited/id314716233

^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Textnow.js

api.textnow.me,
*/
var obj = JSON.parse($response.body); 
obj['show_ads'] = false;
obj['premium_calling'] = true;
$done({body: JSON.stringify(obj)});


