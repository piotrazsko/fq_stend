WorkingTimeSelect example:

```js
import Popup from '../Popup';
const [res, setRes] = React.useState({
	mon: {
		'9': 'white',
		'10': 'white',
	},
	tue: {
		'9': 'white',
		'10': 'white',
	},
	wed: {
		'9': 'white',
		'10': 'white',
	},
	thu: {
		'9': 'white',
		'10': 'white',
		'11': 'white',
		'12': 'white',
	},
	fri: {
		'9': 'white',
		'10': 'white',
		'11': 'white',
		'12': 'white',
	},
	sat: {},
	sun: {
		'6': 'white',
		'7': 'white',
	},
});
<Popup onSubmit={() => setRes([{ col: 2, row: 4 }])} showPopup>
	<WorkingTimeSelect workingTime={res} />
</Popup>;
```
