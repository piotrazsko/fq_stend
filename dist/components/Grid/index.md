grid example:

```js
<Grid
    cols={6}
    rows={6}
    cellProps={{
        children: ({ col, row }) => (
            <div>
                {col} {row}
            </div>
        ),
    }}
/>
```
