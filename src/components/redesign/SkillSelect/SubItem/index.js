import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import {
    CosmeticsIcon,
    MakeUpIcon,
    MassageIcon,
    NailIcon,
    ScissorsIcon,
    SpaIcon,
    TattooIcon,
} from '../../../Icons';
import style from './style.module.scss';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '12px !important',
        borderRadius: '6px',
    },
    input: {
        paddingTop: '9px',
        paddingBottom: '9px',
    },
    icon: { width: '32px', height: '32px' },
}));
const saveNumber = ({ setNumber, ev }) => {
    const str = ev.target.value || '';
    setNumber(str.replace(/[^0-9.]/g, ''));
};

const SubItem = ({ data, selected, setSelected, showInputs, inputComponent }) => {
    const classes = useStyles();
    const isSelected = React.useMemo(() => {
        return selected.find(i => i.id === data.id);
    }, [selected]);
    const setPrice = price => {
        setSelected([...selected.filter(i => i.id !== isSelected.id), { ...isSelected, price }]);
    };
    const setDuration = duration => {
        setSelected([...selected.filter(i => i.id !== isSelected.id), { ...isSelected, duration }]);
    };
    const { price, duration } = isSelected || {};

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
                return <TattooIcon />;
            case 'cosmetology':
                return <CosmeticsIcon />;
            case 'face':
                return <MakeUpIcon />;
            default:
                return <Icon />;
        }
    };
    return (
        <div
            className={style.item}
            key={data.id}
            onClick={() => {
                setSelected(
                    !isSelected
                        ? [...selected, { id: data.id }]
                        : selected.filter(i => i.id !== data.id)
                );
            }}
        >
            <div className={style.titleContainer}>
                {isSelected ? (
                    <CheckCircleIcon htmlColor="#fa835f" className={classes.icon} />
                ) : (
                    getIcon()
                )}
                <div className={style.title}> {data.title}</div>
            </div>
            {isSelected && showInputs && (
                <div
                    className={style.inputs}
                    onClick={ev => {
                        ev.stopPropagation();
                    }}
                >
                    <TextField
                        InputProps={{
                            inputProps: {
                                displayType: 'input',
                            },
                            classes: {
                                root: classes.root,
                                input: classes.input,
                            },
                            inputComponent: inputComponent,
                        }}
                        value={price}
                        onChange={ev => saveNumber({ ev, setNumber: setPrice })}
                        placeholder={'Цена, руб.'}
                        variant="outlined"
                        size="small"
                    />
                    <span className={style.divider}> / </span>
                    <TextField
                        value={duration}
                        onChange={ev => saveNumber({ ev, setNumber: setDuration })}
                        placeholder={'Время, мин.'}
                        InputProps={{
                            classes: {
                                root: classes.root,
                                input: classes.input,
                            },
                            inputProps: {
                                displayType: 'input',
                                suffix: ` мин`,
                            },
                            inputComponent: inputComponent,
                        }}
                        variant="outlined"
                        size="small"
                    />
                </div>
            )}
        </div>
    );
};

SubItem.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
    setSelected: PropTypes.func.isRequired,
    showInputs: PropTypes.bool,
    inputComponent: PropTypes.element,
};

export default SubItem;