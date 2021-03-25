/* global Set */
import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import SubItem from './SubItem';
import style from './style.module.scss';
import { Array } from 'window-or-global';

const Item = ({
    showInputs,
    data,
    expanded,
    setExpanded,
    selected,
    setSelected,
    itemComponent,
    showSelectAll = false,
    showSelectedItemsCount = false,
}) => {
    const isExpanded = React.useMemo(() => {
        return expanded.find(i => i == data.id);
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

    const isSelected = data.sub_skills.length === selectedInCategory.length;
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
                    {showSelectAll && (
                        <IconButton
                            className={style.selectAllButton}
                            size="small"
                            onClick={ev => {
                                ev.stopPropagation();
                                if (!isSelected) {
                                    setSelected(
                                        Array.from(
                                            new Set([
                                                ...selectedFullPrepared,
                                                ...data.sub_skills.map(i => i.id),
                                            ])
                                        ).map(i => ({ id: i }))
                                    );
                                } else {
                                    setSelected(
                                        Array.from(
                                            new Set([
                                                ...selectedFullPrepared.filter(item => {
                                                    return !data.sub_skills.find(i => i.id == item);
                                                }),
                                            ])
                                        ).map(i => ({ id: i }))
                                    );
                                }
                            }}
                        >
                            {isSelected ? (
                                <CheckBoxIcon htmlColor={'#FA835F'} />
                            ) : (
                                <CheckBoxOutlineBlankIcon htmlColor={'#FA835F'} />
                            )}
                        </IconButton>
                    )}
                    <div className={style.title}>{data.title}</div>
                </div>
                <div className={style.icons}>
                    {showSelectedItemsCount && (
                        <div className={style.count}>{selectedInCategory.length}</div>
                    )}
                    <IconButton size="small">
                        {isExpanded ? (
                            <ExpandLessIcon htmlColor={'#FA835F'} />
                        ) : (
                            <ExpandMoreIcon htmlColor={'#FA835F'} />
                        )}
                    </IconButton>
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
                        />
                    )
                )}
        </div>
    );
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
};

export default Item;
