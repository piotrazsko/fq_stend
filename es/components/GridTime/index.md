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
            },
            {
                id: 1,
                startTime: 56,
                endTime: 160,
                confirmed: false,
                comment: 'bla-bla',
                title: 'Мужская стрижка',
            },
            {
                id: 1,
                startTime: 260,
                endTime: 390,
                coment: 'bla-bla',
                title: 'Мужская стрижка',
            },
            {
                id: 1,
                startTime: 300,
                endTime: 900,
                coment: 'bla-bla',
                title: 'Мужская стрижка',
            },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
        ],
    },
    {
        name: 'Petia',
        avatar: 'https://randomuser.me/api/portraits/men/78.jpg',

        disabledTime: [{ startTime: 0, endTime: 200 }, { startTime: 450, endTime: 600 }],
        events: [
            { id: 1, startTime: 0, endTime: 60 },
            { id: 1, startTime: 760, endTime: 890, confirmed: false },
            { id: 1, startTime: 900, endTime: 1080 },
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
    <TimeGrid masters={masters} />
</div>;
```
