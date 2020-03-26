```jsx
<Calendar
	defaultShowDay
	onConfirm={console.log}
	bookedTime={[
		{ date: '2019-12-03 09:00:00', duration: 75 },
		{ date: '2019-12-05 13:30:00', duration: 75 },
		{ date: '2020-03-13 18:30:00', duration: 75 },
		{ date: '2019-12-06 16:00:00', duration: 75 },
		{ date: '2020-04-17 18:30:00', duration: 75 },
		{ date: '2019-12-02 16:00:00', duration: 75 },
		{ date: '2019-11-28 18:30:00', duration: 75 },
		{ date: '2019-12-02 10:30:00', duration: 30 },
	]}
	onConfirm={date => console.log(date)}
	workingTimeIntervals={{
		mon: [
			{ start: '02:00:00', end: '07:00:00' },
			{ start: '08:00:00', end: '09:00:00' },
			{ start: '10:00:00', end: '15:00:00' },
		],
		tue: [{ start: '04:00:00', end: '08:00:00' }, { start: '10:00:00', end: '14:00:00' }],
		wed: [{ start: '04:00:00', end: '08:00:00' }, { start: '09:00:00', end: '14:00:00' }],
		thu: [{ start: '04:00:00', end: '10:00:00' }],
		fri: [{ start: '04:00:00', end: '14:00:00' }],
		sat: [{ start: '04:00:00', end: '14:00:00' }],
	}}
	customTime={{
		enabled: [
			{
				start: '2020-03-26 18:40:00',
				end: '2020-03-26 19:00:00',
			},
			{
				start: '2020-03-26 19:20:00',
				end: '2020-03-26 24:00:00',
			},
			{
				start: '2020-03-31 10:20:00',
				end: '2020-03-31 18:00:00',
			},
		],
		disabled: [
			{
				start: '2020-03-25 05:00:00',
				end: '2020-03-27 10:00:00',
			},
			{
				start: '2020-03-27 10:20:00',
				end: '2020-03-27 18:00:00',
			},
		],
	}}
/>
```
