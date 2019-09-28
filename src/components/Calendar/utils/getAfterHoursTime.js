export default function getAfterHoursTime(shedule) {

    let result = [];
    if (typeof shedule === 'object') {
        let j = 0;
        for (var p in shedule) {
            if (shedule.hasOwnProperty(p)) {

                let keys = shedule[p] !== null ? Object.keys(JSON.parse(shedule[p])) : [];
                result[j] = [];
                for (let i = 0; i < 24; i++) {
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
