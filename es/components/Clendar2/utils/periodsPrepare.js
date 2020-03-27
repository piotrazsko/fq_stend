function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var reduceIntervals = function reduceIntervals(arr, duration, interval) {
  return arr.reduce(function (acc, item) {
    var externalItervals = Math.floor(duration / interval);

    if (externalItervals > 0) {
      for (var i = 0; i < externalItervals; i++) {
        acc = [].concat(_toConsumableArray(acc.sort(function (a, b) {
          return a - b;
        })), [item + i * interval]);
      }
    } else {// TODO: needcreate
      // 	console.log(acc, interval, item / 60);
      // 	acc =
      // 		acc.length > 0 && acc[acc.length - 1] + interval > item && acc[acc.length - 1] < item
      // 			? acc
      // 			: [...acc.sort((a, b) => a - b), item];
    }

    return _toConsumableArray(acc);
  }, []);
};

export var getPermanentWorkingPeriods = function getPermanentWorkingPeriods(_ref) {
  var workingTimeDay = _ref.workingTimeDay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 60 : _ref$duration,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 60 : _ref$interval;
  var permanentWorkingIntervals = Object.keys(workingTimeDay).map(function (item) {
    return item * duration;
  });
  return reduceIntervals(permanentWorkingIntervals, duration, interval);
};
export var getCustomTimePeriods = function getCustomTimePeriods(_ref2) {
  var customTimeDay = _ref2.customTimeDay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 60 : _ref2$duration,
      _ref2$interval = _ref2.interval,
      interval = _ref2$interval === void 0 ? 60 : _ref2$interval;
  return {
    enabled: customTimeDay.enabled ? reduceIntervals(customTimeDay.enabled.map(function (item) {
      return item * 60;
    }), duration, interval) : [],
    disabled: customTimeDay.disabled ? reduceIntervals(customTimeDay.disabled.map(function (item) {
      return item * 60;
    }), duration, interval) : []
  };
};
export var getBookedTimePeriods = function getBookedTimePeriods(_ref3) {
  var bookedTimeDay = _ref3.bookedTimeDay,
      _ref3$interval = _ref3.interval,
      interval = _ref3$interval === void 0 ? 60 : _ref3$interval;
  return bookedTimeDay.reduce(function (acc, item) {
    var date = new Date(item.date);
    var startTime = date.getHours() * 60 + date.getMinutes();
    var externalItervals = Math.floor(item.duration / interval);

    for (var i = 0; i < externalItervals; i++) {
      acc = [].concat(_toConsumableArray(acc), [startTime + i * interval]);
    }

    return _toConsumableArray(acc);
  }, []);
};