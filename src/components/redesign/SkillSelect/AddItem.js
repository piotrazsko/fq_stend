import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import style from './style.module.scss';

const AddItem = ({ onClick }) => {
    return (
        <div className={style.container}>
            <div className={[style.titleContainer].join(' ')} onClick={onClick}>
                <div>Уникальная услуга</div>

                <IconButton size="small">
                    <AddIcon htmlColor={'#FA835F'} />
                </IconButton>
            </div>
        </div>
    );
};

AddItem.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default AddItem;
