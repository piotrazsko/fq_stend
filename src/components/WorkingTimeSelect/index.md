WorkingTimeSelect example:

```js
<WorkingTimeSelect
	onChange={data => {
		console.log(data);
	}}
	workingTimeIntervals={{
		mon: [
			{ start: '02:00:00', end: '07:00:00' },
			{ start: '08:00:00', end: '09:00:00' },
			{ start: '10:00:00', end: '15:00:00' },
		],
		tue: [{ start: '04:00:00', end: '08:00:00' }, { start: '10:00:00', end: '14:00:00' }],
		wed: [{ start: '04:00:00', end: '08:00:00' }, { start: '09:00:00', end: '14:00:00' }],
		thu: [{ start: '04:00:00', end: '10:00:00' }],
		fri: [{ start: '04:00', end: '14:00' }],
		sat: [{ start: '04:00', end: '14:00' }],
		sun: [{ start: '04:00', end: '10:00' }],
	}}
/>
```
