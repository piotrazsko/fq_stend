/* global Set */
import React from 'react';
import PropTypes from 'prop-types';
import SubItem from './SubItem';
import style from './style.module.scss';

const Item = ({
    showInputs,
    data,
    expanded,
    setExpanded,
    selected,
    setSelected,
    itemComponent,
    subItemProps,
    forceExpand,
}) => {
    const isExpanded = React.useMemo(() => {
        return forceExpand ? true : expanded.find(i => i == data.id);
    }, [expanded]);
    const selectedFullPrepared = React.useMemo(() => {
        return selected.map(i => i.id);
    }, [selected]);

    const selectedInCategory = React.useMemo(() => {
        return data.sub_skills.reduce((acc, i) => {
            const item = selectedFullPrepared.find(item => item === i.id);
            return item ? [...acc, item] : acc;
        }, []);
    }, [selectedFullPrepared, data]);

    return (
        <div className={style.container}>
            <div
                className={[style.titleContainer, isExpanded ? style.expanded : ''].join(' ')}
                onClick={() =>
                    setExpanded(
                        !isExpanded ? [...expanded, data.id] : expanded.filter(i => i !== data.id)
                    )
                }
            >
                <div className={style.titleButtons}>
                    <div className={style.title}>{data.title}</div>
                </div>
            </div>
            {isExpanded &&
                data.sub_skills.map(i =>
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
