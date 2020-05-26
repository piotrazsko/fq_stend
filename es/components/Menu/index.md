```js
const [anchorEl, setAnchorEl] = React.useState(null);
const handleClick = event => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
};
<React.Fragment>
    <div onClick={handleClick} style={{ position: 'absolute', right: 0 }}>
        test
    </div>
    <Menu
        visible={Boolean(anchorEl)}
        anchorEl={anchorEl}
        menuItems={[
            {
                name: 'test',
                handler: console.log,
            },
            {
                name: 'test5',
                handler: console.log,
            },
        ]}
        onClick={() => setAnchorEl(null)}
        onClose={() => setAnchorEl(null)}
    ></Menu>
</React.Fragment>;
```
