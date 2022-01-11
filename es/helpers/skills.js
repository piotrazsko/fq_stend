"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSkills = exports.getSalonsSkills = exports.findSubskillsByIds = exports.getParentsSkillsBySkillsUID = exports.getParentsSkillsBySkills = exports.stringLengthFix = exports.filterSkillsForSelect = exports.prepareSkilsForSearch = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prepareSkilsForSearch = function prepareSkilsForSearch() {
  var skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var rangePrice = arguments.length > 1 ? arguments[1] : undefined;
  var preparedSkills = {};
  skills.forEach(function (id) {
    preparedSkills[id] = {
      from: rangePrice[0],
      to: rangePrice[1]
    };
  });
  return preparedSkills;
};

exports.prepareSkilsForSearch = prepareSkilsForSearch;

var filterSkillsForSelect = function filterSkillsForSelect() {
  var fullSkills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var filteredSkills = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var parentSkills = fullSkills.filter(function (i) {
    return filteredSkills.find(function (item) {
      return item.parent_skill_id == i.id;
    });
  });
  return parentSkills.map(function (item) {
    var sub_skills = item.sub_skills.filter(function (i) {
      return filteredSkills.find(function (skill) {
        return skill.id == i.id;
      });
    });
    return _objectSpread(_objectSpread({}, item), {}, {
      sub_skills: sub_skills
    });
  });
};

exports.filterSkillsForSelect = filterSkillsForSelect;

var stringLengthFix = function stringLengthFix(string) {
  if (string.length >= 94) {
    return string.slice(0, 93) + "...";
  } else return string;
};

exports.stringLengthFix = stringLengthFix;

var getParentsSkillsBySkills = function getParentsSkillsBySkills(skills, allSkills) {
  return allSkills.map(function (_ref) {
    var uid = _ref.uid,
        title = _ref.title,
        id = _ref.id;
    return {
      id: id,
      uid: uid,
      title: title
    };
  }).filter(function (i) {
    var count = 0;
    skills.forEach(function (el) {
      if (el.parent_skill_id === i.id) {
        count++;
      }
    });
    i.count = count;
    return skills.find(function (item) {
      return item.parent_skill_id == i.id;
    });
  });
};

exports.getParentsSkillsBySkills = getParentsSkillsBySkills;

var getParentsSkillsBySkillsUID = function getParentsSkillsBySkillsUID(skills, allSkills) {
  return allSkills.map(function (_ref2) {
    var uid = _ref2.uid,
        title = _ref2.title,
        id = _ref2.id;
    return {
      id: id,
      uid: uid,
      title: title
    };
  }).filter(function (i) {
    var count = 0;
    skills.forEach(function (el) {
      if (el.parent_uid === i.uid) {
        count++;
      }
    });
    i.count = count;
    return skills.find(function (item) {
      return item.parent_uid == i.uid;
    });
  });
};

exports.getParentsSkillsBySkillsUID = getParentsSkillsBySkillsUID;

var findSubskillsByIds = function findSubskillsByIds() {
  var fullsKills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return fullsKills.reduce(function (acc, item) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(item.sub_skills));
  }, []).filter(function (i) {
    return ids.find(function (item) {
      return item == i.id;
    });
  });
};

exports.findSubskillsByIds = findSubskillsByIds;

var getSalonsSkills = function getSalonsSkills(skills, skillsSalon) {
  return skills.reduce(function (acc, i) {
    return [].concat(_toConsumableArray(acc), [_objectSpread(_objectSpread({}, i), {}, {
      sub_skills: i.sub_skills.filter(function (sub) {
        return skillsSalon.find(function (skill) {
          return skill.id == sub.id;
        });
      })
    })]);
  }, []).filter(function (i) {
    return i.sub_skills.length > 0;
  });
};

exports.getSalonsSkills = getSalonsSkills;

var getAllSkills = function getAllSkills(skills) {
  return skills.reduce(function (acc, item) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(item.sub_skills));
  }, []);
};

exports.getAllSkills = getAllSkills;