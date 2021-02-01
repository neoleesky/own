/*
#elevate
^https:\/\/accounts\.elevateapp\.net\/api\/users\?user%5Bauthentication_token* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/elevate.vip.js
accounts.elevateapp.net
*/
var obj = JSON.parse($response.body);
obj.user.is_on_free_trial= false;
obj.user.subscription_expiration_date_epoch= 4100909894;
obj.user.current_subscription= {
"sku": "com.elevateapp.elevate.renewable.year_subscription_16",
 "duration": "annual",
 "store": "App Store"
 };
 obj.user.can_purchase= false;

$done({body: JSON.stringify(obj)});
