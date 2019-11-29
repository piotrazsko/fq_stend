```jsx
<Calendar
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
	workingTime={{
		mon:
			'{"10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white"}',
		tue:
			'{"10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white"}',
		wed:
			'{"10":"white","11":"white","12":"white","13":"white","14":"white","15":"white","16":"white","17":"white","18":"white"}',
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
			date: '2019-11-28 00:00:00',
			time_disable: ['16', '17'],
			time_enable: ['15'],
		},
		{
			id: 121,
			master_id: 608,
			date: '2019-11-30 00:00:00',
			time_disable: ['20'],
			time_enable: [''],
		},
		{ id: 134, master_id: 608, date: '2019-11-29 00:00:00', time_disable: [''], time_enable: [''] },
		{
			id: 135,
			master_id: 608,
			date: '2019-12-01 00:00:00',
			time_disable: [''],
			time_enable: ['12', '13'],
		},
	]}
/>
```
