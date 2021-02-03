/*
流利说•阅读 Qx
by@火羽&@singee

下载地址 https://apps.apple.com/us/app/%E6%B5%81%E5%88%A9%E8%AF%B4-%E9%98%85%E8%AF%BB-%E7%8E%B0%E5%9C%A8%E5%B0%B1%E8%AE%A9%E4%BD%A0%E7%88%B1%E4%B8%8A%E5%AD%A6%E8%8B%B1%E8%AF%AD/id1435478035

因缓存机制，使用脚本后可能需要重装一次「流利说•阅读」后方可生效；生效标志是点进详解不再有限制

^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/llyd.js

MitM = vira.llsapp.com

*/

if ($response.statusCode == 200 && $request.method == 'GET') {
	const bodyObj = JSON.parse($response.body);

	if ($request.url.indexOf('limitation') != -1) {
		bodyObj.modules = [];
		bodyObj.auditionDuration = 72000;
	} else {
		bodyObj.from = 1482071586
		bodyObj.to = 1671373986
	}

	$done({body: JSON.stringify(bodyObj)})
} else {
	$done({})
}
