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
    icon: { width: '35px', height: '35px' },
}));
const saveNumber = ({ setNumber, ev }) => {
    const str = ev.target.value || '';
    setNumber(str.replace(/[^0-9.]/g, ''));
};

const SubItem = ({
    data,
    selected,
    setSelected,
    showInputs,
    inputComponent,
    inputProps,
    priceProps,
    durationProps,
    showInputsForce,
    InputPriceProps,
    InputDurationProps,
}) => {
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
            {((isSelected && showInputs) || showInputsForce) && (
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
                            ...InputPriceProps,
                        }}
                        value={price}
                        onChange={ev => saveNumber({ ev, setNumber: setPrice })}
                        placeholder={'Цена, руб.'}
                        variant="outlined"
                        size="small"
                        onFocus={() => {
                            setSelected(
                                !isSelected
                                    ? [
                                          ...selected,
                                          {
                                              id: data.id,
                                              price: priceProps.defaultValue || 0,
                                              duration: durationProps.defaultValue || 0,
                                          },
                                      ]
                                    : [...selected]
                            );
                        }}
                        {...inputProps}
                        {...priceProps}
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
                            ...InputDurationProps,
                        }}
                        onFocus={() => {
                            setSelected(
                                !isSelected
                                    ? [
                                          ...selected,
                                          {
                                              id: data.id,
                                              price: priceProps.defaultValue || 0,
                                              duration: durationProps.defaultValue || 0,
                                          },
                                      ]
                                    : [...selected]
                            );
                        }}
                        variant="outlined"
                        size="small"
                        {...inputProps}
                        {...durationProps}
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
    inputProps: PropTypes.object,
    showUnselectedPriceDuration: PropTypes.bool,
    priceProps: PropTypes.object,
    durationProps: PropTypes.object,
    showInputsForce: PropTypes.bool,
    InputPriceProps: PropTypes.object,
    InputDurationProps: PropTypes.bool,
};

export default SubItem;
