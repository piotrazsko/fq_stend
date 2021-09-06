import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon, Tooltip, ClickAwayListener } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import NumberFormat from '../NumberFormat';

import {
    CosmeticsIcon,
    MakeUpIcon,
    MassageIcon,
    NailIcon,
    ScissorsIcon,
    SpaIcon,
    TattooIcon,
    DeleteIcon,
    EditIcon,
} from '../../Icons';
import style from './style.module.scss';

const color = '#fa835f';

const SkillItem = ({
    onDelete,
    data,
    showDuration,
    showPrice,
    showEdit,
    showInfo,
    showDelete,
    currency_id,
    onClick,
    onEdit,
    classes,
}) => {
    const getIcon = () => {
        switch (data.parent_uid) {
            case 'hair':
                return <ScissorsIcon width="35px" height="35px" />;
            case 'massage':
                return <MassageIcon width="35px" height="35px" />;
            case 'body':
                return <SpaIcon width="35px" height="35px" />;
            case 'nails':
                return <NailIcon width="35px" height="35px" />;
            case 'tattoo':
                return <TattooIcon width="35px" height="35px" />;
            case 'cosmetology':
                return <CosmeticsIcon width="35px" height="35px" />;
            case 'face':
                return <MakeUpIcon width="35px" height="35px" />;
            default:
                return <Icon width="35px" height="35px" />;
        }
    };
    // const classes = useStyles();
    const { title, id, duration, price, description } = data;
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = ev => {
        ev.stopPropagation();
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    return (
        !!data && (
            <div className={[style.item, classes.root].join(' ')} key={id} onClick={onClick}>
                <div className={style.iconContainer}>{getIcon()}</div>
                <div className={style.titleContainer}>
                    <div className={[style.title, classes.title].join(' ')}> {title}</div>
                </div>
                <div className={[style.price, classes.price].join(' ')}>
                    {showPrice && (
                        <NumberFormat
                            value={parseFloat(price)}
                            displayType={'text'}
                            thousandSeparator={' '}
                            suffix={currency_id !== 1 ? ' RUB' : ' BYN'}
                        />
                    )}
                    {showDuration && (
                        <span className={style.duration}>
                            {`  /  `}
                            {duration} мин.
                        </span>
                    )}
                </div>
                <div className={style.inputs}>
                    {showInfo && (
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={description}
                                >
                                    <IconButton
                                        size="small"
                                        onClick={ev => {
                                            ev.stopPropagation();
                                            handleTooltipOpen();
                                        }}
                                    >
                                        <InfoOutlinedIcon
                                            className={style.icon}
                                            htmlColor={color}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    )}
                    {showEdit && (
                        <IconButton
                            size="small"
                            onClick={ev => {
                                ev.stopPropagation();
                                onEdit();
                            }}
                        >
                            <EditIcon
                                width="13px"
                                height="13px"
                                className={style.icon}
                                htmlColor={color}
                            />
                        </IconButton>
                    )}
                    {showDelete && (
                        <IconButton
                            size="small"
                            onClick={ev => {
                                ev.stopPropagation();
                                onDelete();
                            }}
                        >
                            <DeleteIcon
                                width="13px"
                                height="13px"
                                className={style.icon}
                                htmlColor={color}
                            />
                        </IconButton>
                    )}
                </div>
            </div>
        )
    );
};

SkillItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    currency_id: PropTypes.number,
    onClick: PropTypes.func,
    onEdit: PropTypes.func,
    showEdit: PropTypes.bool,
    data: PropTypes.object,
    showDuration: PropTypes.bool,
    showPrice: PropTypes.bool,
    showInfo: PropTypes.bool,
    showDelete: PropTypes.bool,
    classes: PropTypes.shape({
        price: PropTypes.string,
        title: PropTypes.string,
        root: PropTypes.string,
    }),
};
SkillItem.defaultProps = {
    data: {},
    currency_id: 1,
    onClick: () => {},
    showEdit: false,
    showDuration: true,
    showPrice: true,
    showInfo: true,
    showDelete: true,
    classes: { price: '', title: '', root: '' },
};
export default SkillItem;
