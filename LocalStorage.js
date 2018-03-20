/**
 * Created on 2018/03/20.
 * @author yunfeng.liu
 * @email liuyunfeng@outlook.com
 * 
 */
window.LocalStorage = (function () {
	if (!(window.localStorage && typeof(window.localStorage.getItem) === 'function')) {
		throw new Error("localStorage Unsupported");
	}

	var _storage = {},
	_symbol = '_EXPIRED__KEY__';
	var _getStoreItem = function (key) {
		return {
			key : key + _symbol,
			expired : false,
			data : {}
		}
	};
	_storage.getItem = function (key) {
		var item = _getStoreItem(key);
		item = window.localStorage.getItem(item.key);
		try {
			item = JSON.parse(item);
			if (item && item.data) {
				if (item.expired && Date.now() > item.expired) {
					window.localStorage.removeItem(item.key);
					return null;
				}
				return item.data;
			}
		} catch (error) {
			window.localStorage.removeItem(item.key);
			return null;
		}
	}
	_storage.setItem = function (key, data, expired) {
		var item = _getStoreItem(key);
		if (expired > 0) {
			item.expired = Date.now() + expired;
		}
		item.data = data;
		window.localStorage.setItem(item.key, JSON.stringify(item));
	}
	_storage.removeItem = function (key) {
		var item = _getStoreItem(key);
		window.localStorage.removeItem(item.key);
	}
	_storage.keys = function () {
		var keys = [];
		for (var i = 0; i < window.localStorage.length; i++) {
			var key = window.localStorage.key(i);
			key && key.indexOf(_symbol) > -1 && keys.push(key);
		}
		return keys;
	}
	_storage.clear = function () {
		for (var i = 0; i < window.localStorage.length; i++) {
			var key = window.localStorage.key(i);
			key && key.indexOf(_symbol) > -1 && window.localStorage.removeItem(key);
		}
	}
	return _storage;
})();
