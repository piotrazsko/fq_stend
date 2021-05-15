export const prepareSkilsForSearch = (skills = [], rangePrice) => {
    const preparedSkills = {};
    skills.forEach(id => {
        preparedSkills[id] = { from: rangePrice[0], to: rangePrice[1] };
    });
    return preparedSkills;
};
export const filterSkillsForSelect = (fullSkills = [], filteredSkills = []) => {
    const parentSkills = fullSkills.filter(i =>
        filteredSkills.find(item => item.parent_skill_id == i.id)
    );
    return parentSkills.map(item => {
        const sub_skills = item.sub_skills.filter(i =>
            filteredSkills.find(skill => skill.id == i.id)
        );
        return { ...item, sub_skills };
    });
};
export const getParentsSkillsBySkills = (skills, allSkills) => {
    return allSkills
        .map(({ uid, title, id }) => ({
            id,
            uid,
            title,
        }))
        .filter(i => {
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
export const findSubskillsByIds = (fullsKills = [], ids = []) => {
    return fullsKills
        .reduce((acc, item) => {
            return [...acc, ...item.sub_skills];
        }, [])
        .filter(i => ids.find(item => item == i.id));
};

export const getSalonsSkills = (skills, skillsSalon) => {
    return skills
        .reduce((acc, i) => {
            return [
                ...acc,
                {
                    ...i,
                    sub_skills: i.sub_skills.filter(sub =>
                        skillsSalon.find(skill => {
                            return skill.id == sub.id;
                        })
                    ),
                },
            ];
        }, [])
        .filter(i => i.sub_skills.length > 0);
};
export const getAllSkills = skills => {
    return skills.reduce((acc, item) => [...acc, ...item.sub_skills], []);
};
