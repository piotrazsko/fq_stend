```jsx
import Popup from '../Popup';
const [x, setX] = React.useState(20);
<div>
    <select value={x} onChange={ev => setX(ev.target.value)}>
        <option value="20">20</option>
        <option value="60">60</option>
        <option value="120">120</option>
    </select>
    <Popup showPopup={false}>
        <Calendar
            interval={x}
            defaultShowDay
            onConfirm={console.log}
            bookedTime={[{ date: '2020-05-18 10:00:00', duration: 60 }]}
            onConfirm={date => console.log(date)}
            workingTimeIntervals={{
                fri: [
                    {
                        start: '20:00:00',
                        end: '00:00',
                    },
                ],
                mon: [
                    {
                        start: '05:00:00',
                        end: '20:00:00',
                    },
                ],
                thu: [
                    {
                        start: '11:00',
                        end: '00:00',
                    },
                ],
                tue: [
                    {
                        start: '15:00',
                        end: '21:00',
                    },
                ],
                wed: [
                    {
                        start: '06:00',
                        end: '20:00',
                    },
                ],
            }}
            customTime={{
                enabled: [
                    {
                        start: '2020-05-25 15:20:00',
                        end: '2020-05-25 18:00:00',
                    },
                ],
                disabled: [
                    {
                        start: '2020-05-25 12:00:00',
                        end: '2020-05-25 15:20:00',
                    },
                ],
            }}
        />
    </Popup>
</div>;
```
