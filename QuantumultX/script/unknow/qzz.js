/*
Unlocks by Cuttlefish 公众号：墨鱼手记
# > 033 趣制作 解锁会员模板视频（20200925）Attention：登录使用
https://cm.szsszykj.com/interface/GetVip.php url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzz.js

cm.szsszykj.com, 
*/
let body= $response.body; 
var obj = JSON.parse(body); 
obj={
  "Header": {
    "Result": 0,
    "Msg": "67e58be26210529f"
  },
  "Content": {
    "style": [],
    "end_time": "2029-10-10 22:08:05",
    "type": 2,
    "facility_list": [],
    "system_time": "2020-09-17 22:08:43"
  }
}
$done({body: JSON.stringify(obj)});
