/*
#zingtv
^https?:\/\/api\.tv\.zing\.vn\/.*/user* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/zingtvvipv1.js
api.tv.zing.vn, 
*/
var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "user/info";
if(url.indexOf(cons) != -1)
{
obj["data"]["premium"]["is_premium"] = true;
obj["data"]["premium"]["to_time"] = 4096019658000;
}
$done({body: JSON.stringify(obj)});
