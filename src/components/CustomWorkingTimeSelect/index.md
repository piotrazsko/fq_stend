CustomWorkingTimeSelect example:

```js
const [x, setX] = React.useState(2);
const [y, setY] = React.useState(60);
const [z, setZ] = React.useState({
    enabled: [
        {
            start: '2020-04-08 22:00:00',
            end: '2020-04-08 24:00:00',
        },
        {
            start: '2020-04-10 22:00:00',
            end: '2020-04-10 23:00:00',
        },
    ],
    disabled: [
        {
            start: '2020-04-10 05:00:00',
            end: '2020-04-10 10:00:00',
        },
        {
            start: '2020-04-13 05:20:00',
            end: '2020-04-13 6:00:00',
        },
    ],
});
<div>
    <select value={x} onChange={ev => setX(ev.target.value)}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
    </select>
    <select value={y} onChange={ev => setY(ev.target.value)}>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={60}>60</option>
    </select>
    <CustomWorkingTimeSelect
        onChange={data => {
            setZ(data);
        }}
        startWeekDay={parseInt(x)}
        interval={y}
        startTime={300}
        workingTimeIntervals={{
            mon: [{ start: '02:00:00', end: '07:30:00' }],
            tue: [{ start: '04:00:00', end: '08:00:00' }, { start: '10:00:00', end: '14:00:00' }],
            wed: [{ start: '04:00:00', end: '08:00:00' }, { start: '09:00:00', end: '14:00:00' }],
            thu: [{ start: '04:00:00', end: '10:00:00' }],
            fri: [{ start: '04:00', end: '14:00' }],
            sat: [{ start: '04:00', end: '14:00' }],
            sun: [{ start: '04:00', end: '10:00' }],
        }}
        bookedTime={[
            { date: '2020-04-04 09:00:00', duration: 75 },
            { date: '2020-03-30 13:30:00', duration: 75 },
            { date: '2020-03-29 18:30:00', duration: 75 },
            { date: '2019-03-29 16:00:00', duration: 75 },
            { date: '2020-04-10 18:30:00', duration: 75 },
            { date: '2020-04-07 16:00:00', duration: 75 },
            { date: '2020-04-14 19:30:00', duration: 75 },
            { date: '2020-04-09 10:30:00', duration: 30 },
        ]}
        customTimeIntervals={z}
    />
</div>;
```
