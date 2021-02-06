/*
#sync(通讯录备份）
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/sync-me-caller-id-contacts/id340787494

^https:\/\/api\.sync\.me\/api\/purchases\/(report_purchases|get_purchases)  url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/syn.me.js

api.sync.me,
*/
let obj=JSON.parse($response.body)
let url = $request.url;
var cons1 = "get";
var cons2 = "report";
if(url.indexOf(cons1) != -1)
{
obj=

{
  "error_code": 0,
  "purchases": [
    {
      "product_id": "com.ultimake.smartsync.membership.1year.30dayTrial",
      "platform_type": 1,
      "purchase_date": 1571436858000,
      "expiration_date": 4096044858000
    }
  ],
  "error_description": "OK"
};
body= JSON.stringify(obj);
}
if(url.indexOf(cons2) != -1)
{
obj= {
  "error_code": 0,
  "purchases": [
    {
      "error_code": 0,
      "product_id": "com.ultimake.smartsync.membership.1year.30dayTrial"
    }
  ],
  "error_description": "OK"
};
body= JSON.stringify(obj);
}

$done({body});
