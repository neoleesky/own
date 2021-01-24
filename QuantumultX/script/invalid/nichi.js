/*
#nichi
^https?:\/\/mp\.bybutter\.com\/mood\/(official-templates|privileges) url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/nichi.js
mp.bybutter.com, 
*/
body = $response.body.replace(/preview/g, "free").replace(/view/g, "unlimited").replace(/true/g, "false");
$done({body});
