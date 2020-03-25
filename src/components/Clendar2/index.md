```jsx
<Calendar
	defaultShowDay
	autoConfirm
	bookedTime={[
		{ date: '2020-03-25 9:00:00', duration: 30 },
		{ date: '2020-03-25 10:30:00', duration: 60 },
		{ date: '2020-03-25 18:30:00', duration: 75 },
	]}
	onConfirm={date => console.log(date)}
	workingTime={{
		mon:
			'{"9":"white","10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white"}',
		tue:
			'{"10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white","19":"white"}',
		wed:
			'{"9":"white","10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","17":"white","18":"white"}',
		thu:
			'{"10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white"}',
		fri: null,
		sat: { '20': 'white', '18': 'white' },
		sun: null,
	}}
	customTime={[
		{
			id: 120,
			master_id: 608,
			date: '2020-03-25 00:00:00',
			time_disable: ['16', '17'],
			time_enable: ['15', '23'],
		},
		{
			id: 121,
			master_id: 608,
			date: '2020-03-25 00:00:00',
			time_disable: ['20'],
			time_enable: ['7', '8'],
		},
	]}
/>
```
