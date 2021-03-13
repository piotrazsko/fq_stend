import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton, Icon, Tooltip, ClickAwayListener } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import NumberFormat from '../NumberFormat';
// import {
//     Cosmetics,
//     MakeUpIcon,
//     MassageIcon,
//     NailIcon,
//     ScissorsIcon,
//     SpaIcon,
//     Tattoo,
// } from '../../Icons/services';
import {
    CosmeticsIcon,
    MakeUpIcon,
    MassageIcon,
    NailIcon,
    ScissorsIcon,
    SpaIcon,
    TattooIcon,
    DeleteIcon,
} from '../../Icons';
import style from './style.module.scss';

const useStyles = makeStyles(theme => ({
    input: {
        fontSize: '12px !important',
    },
}));
const color = '#fa835f';

const SkillItem = ({
    onDelete,
    data,
    showDuration = true,
    showPrice = true,
    showEdit = true,
    showDelete = true,
    currency_id,
    onClick,
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
            <div className={style.item} key={id} onClick={onClick}>
                {getIcon()}
                <div className={style.titleContainer}>
                    <div className={style.title}> {title}</div>
                </div>
                <div className={style.price}>
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
                    {showEdit && (
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
};
SkillItem.defaultProps = {
    data: {},
    currency_id: 1,
    onClick: () => {},
};
export default SkillItem;
