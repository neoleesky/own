/*
Quantumult X 脚本:
Unlocks 公众号：墨鱼手记
[rewrite_local]
#Unlocks
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/receipt.js
[mitm]
hostname = buy.itunes.apple.com,
*/
# > VCUS
if(bundle_id == "com.meitu.vcus")
{
obj = {"status":0,"environment":"Production","receipt":{"receipt_type":"Production","adam_id":1445969821,"app_item_id":1445969821,"bundle_id":"com.meitu.vcus","application_version":"502","download_id":99043541931056,"version_external_identifier":833794405,"receipt_creation_date":"2019-12-21 16:49:08 Etc/GMT","receipt_creation_date_ms":"1576946948000","receipt_creation_date_pst":"2019-12-21 08:49:08 America/Los_Angeles","request_date":"2019-12-21 17:22:15 Etc/GMT","request_date_ms":"1576948935304","request_date_pst":"2019-12-21 09:22:15 America/Los_Angeles","original_purchase_date":"2019-12-21 15:17:05 Etc/GMT","original_purchase_date_ms":"1576941425000","original_purchase_date_pst":"2019-12-21 07:17:05 America/Los_Angeles","original_application_version":"502","in_app":[{"quantity":"1","product_id":"com.commsource.vcus.subscription.1year.newuser","transaction_id":"590000459653480","original_transaction_id":"590000459653480","purchase_date":"2019-12-21 15:20:04 Etc/GMT","purchase_date_ms":"1576941604000","purchase_date_pst":"2019-12-21 07:20:04 America/Los_Angeles","original_purchase_date":"2019-12-21 15:20:05 Etc/GMT","original_purchase_date_ms":"1576941605000","original_purchase_date_pst":"2019-12-21 07:20:05 America/Los_Angeles","expires_date":"2019-12-28 15:20:04 Etc/GMT","expires_date_ms":"1577546404000","expires_date_pst":"2019-12-28 07:20:04 America/Los_Angeles","web_order_line_item_id":"590000154111897","is_trial_period":"true","is_in_intro_offer_period":"false"}]},"latest_receipt_info":[{"quantity":"1","product_id":"com.commsource.vcus.subscription.1year.newuser","transaction_id":"590000459653480","original_transaction_id":"590000459653480","purchase_date":"2019-12-21 15:20:04 Etc/GMT","purchase_date_ms":"1576941604000","purchase_date_pst":"2019-12-21 07:20:04 America/Los_Angeles","original_purchase_date":"2019-12-21 15:20:05 Etc/GMT","original_purchase_date_ms":"1576941605000","original_purchase_date_pst":"2019-12-21 07:20:05 America/Los_Angeles","expires_date":"2019-12-28 15:20:04 Etc/GMT","expires_date_ms":"1577546404000","expires_date_pst":"2019-12-28 07:20:04 America/Los_Angeles","web_order_line_item_id":"590000154111897","is_trial_period":"true","is_in_intro_offer_period":"false","subscription_group_identifier":"20541855"}],"latest_receipt":"","pending_renewal_info":[{"auto_renew_product_id":"com.commsource.vcus.subscription.1year.newuser","original_transaction_id":"590000459653480","product_id":"com.commsource.vcus.subscription.1year.newuser","auto_renew_status":"1"}]};
}

$done({body: JSON.stringify(obj)});
