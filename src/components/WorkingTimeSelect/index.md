WorkingTimeSelect example:

```js
import Popup from '../Popup';
const [res, setRes] = React.useState({});
<Popup onSubmit={() => setRes([{ col: 2, row: 4 }])} showPopup>
	<WorkingTimeSelect workingTime={res} />
</Popup>;
```
