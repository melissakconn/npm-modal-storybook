'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left 0;\n  background-color: grey;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: absolute;\n  top: 0;\n  left 0;\n  background-color: grey;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: white;\n  border-radius: 10px;\n  z-index: 10;\n  width: 400px;\n  height: 400px;\n'], ['\n  background-color: white;\n  border-radius: 10px;\n  z-index: 10;\n  width: 400px;\n  height: 400px;\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject);

var Content = exports.Content = (0, _reactEmotion2.default)('div')(_templateObject2);