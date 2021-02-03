/*
知音漫客 unlock vip
by mieqq

下载地址 https://apps.apple.com/us/app/%E7%9F%A5%E9%9F%B3%E6%BC%AB%E5%AE%A2-%E7%9C%8B%E4%BA%8C%E6%AC%A1%E5%85%83%E6%BC%AB%E7%94%BB%E5%B9%B3%E5%8F%B0%E5%A4%A7%E5%85%A8%E5%BF%AB/id1012491820

QX:
^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

Surge4：
http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js

Surge & QX MITM = getuserinfo-globalapi.zymk.cn
*/
let url = $request.url;
let body = JSON.parse($response.body);

let user = '/app_api/v5/getuserinfo/';
let coin = '/app_api/v5/coin_account/';
let ticket = '/app_api/v5/getuserinfo_ticket/';
let free = '/app_api/v5/getcomicinfo/';

if (url.indexOf(user) != -1) {
	body.data.coins = 6666;
	body.data.isvip = 1;
	body.data.recommend = 6666;
	body.data.Cticket = 6666;
	body.data.Cgold = 6666;
}
else if (url.indexOf(coin) != -1) {
	body.data.coins = 6666;
	body.data.golds = 6666;
}
else if (url.indexOf(ticket) != -1) {
	body.data.Cticket = 6666;	
} 

else if (url.indexOf(free) != -1) {
	body.data.price = 0;
	body.data.download_price = 0;
}

	body = JSON.stringify(body);

$done({body});
