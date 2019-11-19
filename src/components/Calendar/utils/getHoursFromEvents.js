import moment from 'moment';
export default function getHoursFromEvents(events = []) {
	let result = [];
	for (let i = 0; i < events.length; i++) {
		if ('date' in events[i] && 'duration' in events[i]) {
			let time = new Date(moment(events[i].date));
			let startHour = time.getHours() * 2 + (time.getMinutes() * 2) / 60;
			let hours = Math.ceil((events[i].duration / 60) * 2);
			for (let j = startHour; j < startHour + hours; j++) {
				time.setHours(Math.floor(j / 2));
				time.setMinutes((j % 2) * 30);
				result.push(new Date(time));
			}
		}
	}
	console.log(result);
	return result;
}
