```js
const [anchorEl, setAnchorEl] = React.useState(null);
const handleClick = event => {
    setAnchorEl(event.currentTarget);
};
<React.Fragment>
    <div onClick={handleClick}>test</div>
    <Menu
        visible={Boolean(anchorEl)}
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
