/*
Quantumult X 脚本:
Unlocks 公众号：墨鱼手记
[rewrite_local]
#Unlocks
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Redeembynight/own/main/QuantumultX/script/invalid/rcam.js
[mitm]
hostname = buy.itunes.apple.com,
*/
# > RCam
if(bundle_id == "com.mm.RCam")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1438439519,"app_item_id":1438439519,"bundle_id":"com.mm.RCam","application_version":"2.2.2","download_id":70068605698208,"version_external_identifier":835181038,"receipt_creation_date":"2020-08-21 04:27:52 Etc/GMT","receipt_creation_date_ms":"1597984072000","receipt_creation_date_pst":"2020-08-20 21:27:52 America/Los_Angeles","request_date":"2020-08-25 11:47:55 Etc/GMT","request_date_ms":"1598356075316","request_date_pst":"2020-08-25 04:47:55 America/Los_Angeles","original_purchase_date":"2020-08-21 02:06:34 Etc/GMT","original_purchase_date_ms":"1597975594000","original_purchase_date_pst":"2020-08-20 19:06:34 America/Los_Angeles","original_application_version":"2.2.2","in_app":[{"quantity":"1","product_id":"com.mm.RCam.product1","transaction_id":"300000654923513","original_transaction_id":"300000654923513","purchase_date":"2020-08-21 04:27:50 Etc/GMT","purchase_date_ms":"1597984070000","purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","original_purchase_date":"2020-08-21 04:27:50 Etc/GMT","original_purchase_date_ms":"1597984070000","original_purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000257306796","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.mm.RCam.product1","transaction_id":"300000654923513","original_transaction_id":"300000654923513","purchase_date":"2020-08-21 04:27:50 Etc/GMT","purchase_date_ms":"1597984070000","purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","original_purchase_date":"2020-08-21 04:27:50 Etc/GMT","original_purchase_date_ms":"1597984070000","original_purchase_date_pst":"2020-08-20 21:27:50 America/Los_Angeles","expires_date":"2029-10-10 17:10:10 Etc/GMT","expires_date_ms":"1886346610000","expires_date_pst":"2029-10-10 10:10:10 America/Los_Angeles","web_order_line_item_id":"300000257306796","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"20482137"}],"latest_receipt":"","pending_renewal_info":[{"expiration_intent":"1","auto_renew_product_id":"com.mm.RCam.product1","original_transaction_id":"300000654923513","is_in_billing_retry_period":"0","product_id":"com.mm.RCam.product1","auto_renew_status":"0"}]};
}
$done({body: JSON.stringify(obj)});
