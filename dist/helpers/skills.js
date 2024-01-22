"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringLengthFix = exports.prepareSkilsForSearch = exports.getSalonsSkills = exports.getParentsSkillsBySkillsUID = exports.getParentsSkillsBySkills = exports.getAllSkills = exports.findSubskillsByIds = exports.filterSkillsForSelect = void 0;
const prepareSkilsForSearch = function () {
  let skills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let rangePrice = arguments.length > 1 ? arguments[1] : undefined;
  const preparedSkills = {};
  skills.forEach(id => {
    preparedSkills[id] = {
      from: rangePrice[0],
      to: rangePrice[1]
    };
  });
  return preparedSkills;
};
exports.prepareSkilsForSearch = prepareSkilsForSearch;
const filterSkillsForSelect = function () {
  let fullSkills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let filteredSkills = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const parentSkills = fullSkills.filter(i => filteredSkills.find(item => item.parent_skill_id == i.id));
  return parentSkills.map(item => {
    const sub_skills = item.sub_skills.filter(i => filteredSkills.find(skill => skill.id == i.id));
    return {
      ...item,
      sub_skills
    };
  });
};
exports.filterSkillsForSelect = filterSkillsForSelect;
const stringLengthFix = string => {
  if (string.length >= 94) {
    return string.slice(0, 93) + "...";
  } else return string;
};
exports.stringLengthFix = stringLengthFix;
const getParentsSkillsBySkills = (skills, allSkills) => {
  return allSkills.map(_ref => {
    let {
      uid,
      title,
      id
    } = _ref;
    return {
      id,
      uid,
      title
    };
  }).filter(i => {
    let count = 0;
    skills.forEach(el => {
      if (el.parent_skill_id === i.id) {
        count++;
      }
    });
    i.count = count;
    return skills.find(item => item.parent_skill_id == i.id);
  });
};
exports.getParentsSkillsBySkills = getParentsSkillsBySkills;
const getParentsSkillsBySkillsUID = (skills, allSkills) => {
  return allSkills.map(_ref2 => {
    let {
      uid,
      title,
      id
    } = _ref2;
    return {
      id,
      uid,
      title
    };
  }).filter(i => {
    let count = 0;
    skills.forEach(el => {
      if (el.parent_uid === i.uid) {
        count++;
      }
    });
    i.count = count;
    return skills.find(item => item.parent_uid == i.uid);
  });
};
exports.getParentsSkillsBySkillsUID = getParentsSkillsBySkillsUID;
const findSubskillsByIds = function () {
  let fullsKills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return fullsKills.reduce((acc, item) => {
    return [...acc, ...item.sub_skills];
  }, []).filter(i => ids.find(item => item == i.id));
};
exports.findSubskillsByIds = findSubskillsByIds;
const getSalonsSkills = (skills, skillsSalon) => {
  return skills.reduce((acc, i) => {
    return [...acc, {
      ...i,
      sub_skills: i.sub_skills.filter(sub => skillsSalon.find(skill => {
        return skill.id == sub.id;
      }))
    }];
  }, []).filter(i => i.sub_skills.length > 0);
};
exports.getSalonsSkills = getSalonsSkills;
const getAllSkills = skills => {
  return skills.reduce((acc, item) => [...acc, ...item.sub_skills], []);
};
exports.getAllSkills = getAllSkills;