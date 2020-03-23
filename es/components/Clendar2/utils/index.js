function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

export var workingTimePrepare = function workingTimePrepare(_ref) {
  var workingTime = _ref.workingTime,
      curentDay = _ref.curentDay,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 60 : _ref$interval;
  console.log(workingTime, curentDay);
  var res = {
    mon: {},
    tue: {},
    wed: {},
    thu: {},
    fri: {},
    sat: {},
    sun: {}
  };
  var x = Object.keys(workingTime).map(function (item) {
    var res = _toConsumableArray(_typeof(workingTime[item]) === 'object' && workingTime[item] !== null ? Object.keys(workingTime[item]) : typeof workingTime[item] === 'string' ? Object.keys(JSON.parse(workingTime[item])) : []);

    return res;
  });
  console.log(x);
  return {};
};