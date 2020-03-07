WorkingTimeSelect example:

```js
import Popup from '../Popup';
const [res, setRes] = React.useState([{ col: 1, row: 2 }]);
<Popup onSubmit={() => setRes([{ col: 2, row: 4 }])} showPopup>
	<WorkingTimeSelect isMobile workingTime={res} />
</Popup>;
```
