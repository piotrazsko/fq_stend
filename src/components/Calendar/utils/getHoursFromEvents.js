export default function getHoursFromEvents(events = []) {
    let result = [];
    for (let i = 0; i < events.length; i++) {
        if ('date' in events[i] && 'duration' in events[i]) {
            let time = new Date(events[i].date);
            let startHour = time.getHours();
            let hours = Math.ceil(events[i].duration / 60);
            for (let j = startHour; j < startHour + hours; j++) {
                result.push(new Date(time.setHours(j)))
            }
        }
    }
    return result;
}
