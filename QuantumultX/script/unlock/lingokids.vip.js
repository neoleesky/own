/*
#lingokids
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/lingokids-playlearning/id1002043426

^https:\/\/api\.lingokids\.com\/v1\/renovate_session$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/lingokids.vip.js

api.lingokids.com
*/

var obj = JSON.parse($response.body);

obj["info"]["subscriptions"]= [
      {
        "status": "active",
        "product": "unlimited",
        "duration_unit": "months",
        "id": 805063,
        "platform": "apple",
        "duration_value": 1,
        "starts_at": 1572617692,
        "ends_at": 4099821292,
        "auto_renew_status": true,
        "plan_id": "lk.ios.s1m.t1m.p15.v1",
        "state": "active"
      }];

$done({body: JSON.stringify(obj)});

// Descriptions
