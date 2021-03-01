import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import NumberFormat from '../NumberFormat';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
    Cosmetics,
    MakeUpIcon,
    MassageIcon,
    NailIcon,
    ScissorsIcon,
    SpaIcon,
    Tattoo,
} from '../Icons/services';
import style from './style.module.scss';

const useStyles = makeStyles(theme => ({
    input: {
        fontSize: '12px !important',
    },
}));
const color = '#fa835f';

const SkillItem = ({
    onDelete,
    onEdit,
    data,
    showDuration = true,
    showPrice = true,
    showEdit = true,
    showDelete = true,
    currency_id,
}) => {
    const getIcon = () => {
        switch (data.parent_uid) {
            case 'hair':
                return <ScissorsIcon />;
            case 'massage':
                return <MassageIcon />;
            case 'body':
                return <SpaIcon />;
            case 'nails':
                return <NailIcon />;
            case 'tattoo':
                return <Tattoo />;
            case 'cosmetology':
                return <Cosmetics />;
            case 'face':
                return <MakeUpIcon />;
            default:
                return <Icon />;
        }
    };
    // const classes = useStyles();
    const { title, id, duration, price, description } = data;
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    // console.log(data);
    // const { duration, price } = get(data, 'pivot', {});
    return (
        !!data && (
            <div className={style.item} key={id}>
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
                                    <IconButton size="small" onClick={handleTooltipOpen}>
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
                        <IconButton size="small" onClick={onDelete}>
                            <DeleteOutlineOutlinedIcon className={style.icon} htmlColor={color} />
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
};
SkillItem.defaultProps = {
    data: {},
    currency_id: 1,
};
export default SkillItem;
