'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _baseJs = require('./base.js');

var _baseJs2 = _interopRequireDefault(_baseJs);

function getArchives(_this) {
	var instance, data;
	return _regeneratorRuntime.async(function getArchives$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				instance = _this.model("article");
				context$1$0.next = 3;
				return _regeneratorRuntime.awrap(instance.order({ 'create_time': 'DESC' }).select());

			case 3:
				data = context$1$0.sent;

				//?如何在数据库中存储数组
				data.forEach(function (item) {
					item.tag = item.tag.split(',');
				});

				return context$1$0.abrupt('return', groupData(data, 'create_time', function (time) {
					return formartTime(time, 'yyyy年M月');
				}));

			case 6:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this);
}

var _default = (function (_Base) {
	_inherits(_default, _Base);

	function _default() {
		_classCallCheck(this, _default);

		_Base.apply(this, arguments);
	}

	/**
  * index action
  * @return {Promise} []
  */

	_default.prototype.indexAction = function indexAction(self) {
		var archives;
		return _regeneratorRuntime.async(function indexAction$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return _regeneratorRuntime.awrap(getArchives(this));

				case 2:
					archives = context$2$0.sent;

					console.log(archives);
					this.assign('archives', archives);

					return context$2$0.abrupt('return', this.display());

				case 6:
				case 'end':
					return context$2$0.stop();
			}
		}, null, this);
	};

	return _default;
})(_baseJs2['default']);

exports['default'] = _default;
module.exports = exports['default'];

//获取 user 模型实例