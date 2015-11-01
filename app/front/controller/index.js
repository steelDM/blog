'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _baseJs = require('./base.js');

var _baseJs2 = _interopRequireDefault(_baseJs);

var CLIP_LENGTH = 150;

function grapListData(data) {

  data.forEach(function (item) {
    item.content = clip(item.content, CLIP_LENGTH, '...');
  });

  return data;
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
    var data, articleList;
    return _regeneratorRuntime.async(function indexAction$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(this.model('article').select());

        case 2:
          data = context$2$0.sent;
          articleList = grapListData(data);

          this.assign('articleList', articleList);

          return context$2$0.abrupt('return', this.display());

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  _default.prototype.detailAction = function detailAction(self) {
    return _regeneratorRuntime.async(function detailAction$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          return context$2$0.abrupt('return', this.display());

        case 1:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  return _default;
})(_baseJs2['default']);

exports['default'] = _default;
module.exports = exports['default'];