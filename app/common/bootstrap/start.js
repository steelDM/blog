/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

'use strict';

global.clip = function (s, len, suffix) {
	if (!s || !len) {
		return '';
	}
	var a = 0;
	var i = 0;
	var temp = '';

	if (len > s.length) {
		return s;
	};

	for (i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) > 255) a += 2;else a++;

		if (a > len) {
			return temp + (suffix || '');
		}
		temp += s.charAt(i);
	}
	return s;
};

global.formartTime = function (d, pattern) {

	var d = think.isDate(d) ? d : new Date(d);

	pattern = pattern || 'yyyy-MM-dd';

	var y = d.getFullYear().toString(),
	    o = {
		M: d.getMonth() + 1, //month
		d: d.getDate(), //day
		h: d.getHours(), //hour
		m: d.getMinutes(), //minute
		s: d.getSeconds() //second
	};
	pattern = pattern.replace(/(y+)/ig, function (a, b) {
		return y.substr(4 - Math.min(4, b.length));
	});
	for (var i in o) {
		pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (a, b) {
			return o[i] < 10 && b.length > 1 ? '0' + o[i] : o[i];
		});
	}
	return pattern;
};

//key fn or data.key
//return obj{key:[obj,obj]}
global.groupData = function (data, key, rule) {

	var ret = {};

	data.forEach(function (item, i) {

		//原数组对象的val,对应心新数组的key
		var _k = think.isFunction(rule) ? rule(item[key]) : item[key];

		var _v = ret[_k];

		//是否存在
		if (_v) {

			//是否以数组形式存在
			if (think.isArray(_v)) {

				_v.push(item);
			} else {
				//合并当前值转化为数组
				ret[_k] = [_v, item];
			}
		} else {
			//不存在，以对象形式存在
			ret[_k] = item;
		}
	});

	return ret;
};