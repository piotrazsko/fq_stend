grid example:

```js
const masters = [
    {
        name: 'Vasia',
        avatar: 'https://randomuser.me/api/portraits/men/94.jpg',
        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            {
                id: 55,
                startTime: 58,
                endTime: 150,
                confirmed: false,
                comment: 'bla-bla',
                title: 'Мужская стрижка',
                clientName: 'Ghjs jsjasdh',
            },
            {
                id: 1,
                startTime: 56,
                endTime: 160,
                confirmed: false,
                comment: 'bla-bla',
                title: 'Мужская стрижка',
                clientName: 'Ghjs jsjasdh',
            },
            {
                id: 1,
                startTime: 260,
                endTime: 390,
                coment: 'bla-bla',
                title: 'Мужская стрижка',
                clientName: 'Ghjs jsjasdh',
            },
            {
                id: 1,
                startTime: 300,
                endTime: 900,
                coment: 'bla-bla',
                title: 'Мужская стрижка',
                clientName: 'Ghjs jsjasdh',
            },
        ],
    },

    {
        name: 'Tolia',
        avatar: 'https://randomuser.me/api/portraits/men/54.jpg',

        disabledTime: [
            { startTime: 0, endTime: 100 },
            { startTime: 470, endTime: 600 },
            { startTime: 1200, endTime: 1440 },
        ],
        events: [
            { id: 1, startTime: 20, endTime: 60, title: 'Мужская стрижка' },
            { id: 1, startTime: 360, endTime: 300, confirmed: false, title: 'Мужская стрижка' },
            { id: 1, startTime: 200, endTime: 400 },
        ],
    },
];

<div style={{ width: '70vw' }}>
    <TimeGrid
        masters={masters}
        defaultCellOnclick={data => {
            console.log(data);
        }}
    />
</div>;
```
