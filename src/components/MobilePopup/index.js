import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PopupBackground from '../PopupBackground'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask';
import InputLabel from '@material-ui/core/InputLabel';
import image from "../../static/images/Group 3.svg";
import styles from './style.module.scss'


function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
TextMaskCustom.propTypes={
  inputRef: PropTypes.func.isRequired,
}

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(',/\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/,' ', /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

export default function MobilePopup() {

    const [values, setValues] = React.useState({
     textmask: '(  )       ',
      numberformat: '1320',
    });

    const handleChange = name => event => {
      setValues({
        ...values,
        [name]: event.target.value,
      });
    };

  return (
    	<PopupBackground visible >
       <Grid container className={styles.container} >
            <Paper className={styles.paper}>
            <div >
              <img className={styles.img} alt="logo" src={image} />
            </div>
            <Grid item>
            <div className={styles.registration}>Регистрация</div>
            <div className={styles.text}>Введите ваш номер телефона</div>
            </Grid>
            <div className={styles.phoneContainer}>
            <Grid  container spacing={1} alignItems="flex-end">
            <Grid item>
            <InputLabel className={styles.label}>+375</InputLabel>
          </Grid>
            <Grid item>
            <div className={styles.input}>
          <Input
           className={styles.numbers}
            value={values.textmask}
            onChange={handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />
             </div></Grid>
            </Grid></div>
            <Grid item>
            <div className={styles.button}>место для кнопки</div>
            </Grid>
            </Paper>
          </Grid>
    </PopupBackground>
  );
}
