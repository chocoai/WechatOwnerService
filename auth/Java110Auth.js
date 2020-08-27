/**
 * 检查会话是否 存在
 * add by 吴学文 QQ:928255095
 */
export function checkSession() {
	return new Promise((resolve, reject) => {
		let _that = this;
		let loginFlag = wx.getStorageSync(mapping.LOGIN_FLAG);
		let nowDate = new Date();
		//判断如果是APP
		// #ifdef APP-PLUS
		if (loginFlag && loginFlag.expireTime > nowDate.getTime()) {
			resolve();
		} else {
			// 无登录态
			reject();
			return;
		}
		// #endif
		//判断如果是H5
		// #ifdef H5
		if (loginFlag && loginFlag.expireTime > nowDate.getTime()) {
			resolve();
		} else {
			reject();
			return;
		}
		// #endif

		// #ifdef MP-WEIXIN
		if (loginFlag && loginFlag.expireTime > nowDate.getTime()) {
			// 检查 session_key 是否过期
			wx.checkSession({
				// session_key 有效(为过期)
				success: function() {

					resolve();
				},
				// session_key 过期
				fail: function() {
					// session_key过期
					reject();
				}
			});
		} else {
			// 无登录态
			reject();
		}
		// #endif
	});
}