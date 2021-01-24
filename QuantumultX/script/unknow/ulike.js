/*
#ulike
^https:\/\/commerce-i18n-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/ulike.js
commerce-i18n-api.faceu.mobi, 
*/
var obj = JSON.parse($response.body);

obj= {
  "data": {
    "flag": true,
    "start_time": 1572760027,
    "end_time": 4097368706
  },
  "systime": "",
  "errmsg": "Success",
  "ret": "0"
};

$done({body: JSON.stringify(obj)});

//LK
