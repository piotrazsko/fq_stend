```jsx
import Popup from '../Popup';
const [x, setX] = React.useState(20);
<div>
    <select value={x} onChange={ev => setX(ev.target.value)}>
        <option value="20">20</option>
        <option value="60">60</option>
        <option value="120">120</option>
    </select>
    <Popup showPopup>
        <Calendar
            interval={x}
            defaultShowDay
            onConfirm={console.log}
            bookedTime={[{ date: '2020-05-18 10:00:00', duration: 60 }]}
            onConfirm={date => console.log(date)}
            workingTimeIntervals={{
                mon: [{ start: '5:00:00', end: '12:00:00' }],
                tue: [{ start: '5:00:00', end: '6:00:00' }],
                wed: [{ start: '5:00:00', end: '6:00:00' }],
                thu: [{ start: '5:00:00', end: '6:00:00' }],
                fri: [{ start: '5:00:00', end: '6:00:00' }],
                sat: [{ start: '5:00:00', end: '6:00:00' }],
            }}
            customTime={{
                enabled: [
                    {
                        start: '2020-05-18 15:20:00',
                        end: '2020-05-18 18:00:00',
                    },
                ],
                disabled: [
                    {
                        start: '2020-05-18 12:00:00',
                        end: '2020-05-18 15:20:00',
                    },
                ],
            }}
        />
    </Popup>
</div>;
```
