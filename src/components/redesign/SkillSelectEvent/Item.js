/* global Set */
import React from 'react';
import PropTypes from 'prop-types';
import SubItem from './SubItem';
import style from './style.module.scss';

const Item = ({
    showInputs,
    data,
    selected,
    setSelected,
    itemComponent,
    subItemProps,
    focusElement
}) => {

    const scrollRef = React.useRef(null)
    const [id, setId] = React.useState(null)

    React.useEffect(() => {
        if (id && id == focusElement) {
            scrollRef.current.scrollIntoView()
        }
    }, [focusElement])
    
    React.useEffect(() => {
        if (scrollRef.current.id) {
            setId(scrollRef.current.id)
        }
    }, [scrollRef])

    return (
        <div className={style.container}>
            <div className={[style.titleContainer]}>
                <div className={style.titleButtons}>
                    <div
                        ref={scrollRef}
                        id={data.id}
                        className={style.title}
                    >
                        {data.title}
                    </div>
                </div>
            </div>
            {data.sub_skills.map(i =>
                itemComponent ? (
                    React.createElement(itemComponent, { ...i })
                ) : (
                    <SubItem
                        showInputs={showInputs}
                        key={i.id}
                        selected={selected}
                        setSelected={setSelected}
                        data={i}
                        {...subItemProps(i)}
                    />
                )
            )}
        </div>
    );
};
Item.defaultProps = {
    subItemProps: () => {},
};

Item.propTypes = {
    focusElement: PropTypes.string,
    showInputs: PropTypes.bool,
    itemComponent: PropTypes.any,
    data: PropTypes.object,
    expanded: PropTypes.bool,
    setExpanded: PropTypes.bool,
    selected: PropTypes.array,
    setSelected: PropTypes.func,
    showSelectAll: PropTypes.bool,
    showSelectedItemsCount: PropTypes.bool,
    count: PropTypes.number,
    subItemProps: PropTypes.func,
    forceExpand: PropTypes.bool,
};

export default Item;
