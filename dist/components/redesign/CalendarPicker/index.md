```jsx
const [day, setDay] = React.useState(new Date());
<CalendarPicker
    rightSide={<div>{day.toString()}</div>}
    value={day}
    onChange={setDay}
    autoClose={false}
/>;
```
