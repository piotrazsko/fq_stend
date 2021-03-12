import React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import IconButton from '@material-ui/core/IconButton';
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
}) => {
    const isExpanded = React.useMemo(() => {
        return expanded.find(i => i == data.id);
    }, [expanded]);
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
                <div className={style.title}>{data.title}</div>

                <IconButton size="small">
                    {isExpanded ? (
                        <ExpandLessIcon htmlColor={'#FA835F'} />
                    ) : (
                        <ExpandMoreIcon htmlColor={'#FA835F'} />
                    )}
                </IconButton>
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
    // : PropTypes.
};

export default Item;
