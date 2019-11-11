function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function getAfterHoursTime(shedule) {
  var result = [];

  if (_typeof(shedule) === 'object') {
    var j = 0;

    for (var p in shedule) {
      if (shedule.hasOwnProperty(p)) {
        var keys = shedule[p] !== null ? Object.keys(JSON.parse(shedule[p])) : [];
        result[j] = [];

        for (var i = 0; i < 24; i++) {
          if (keys.indexOf(String(i)) == -1) {
            result[j].push(i);
          }
        }
      }

      j++;
    }
  }

  return result;
}