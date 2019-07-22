import React from 'react'
import style from './style.module.scss'
import Button from '@material-ui/core/Button'

import Icon from '@material-ui/core/Icon';



class EventDetailButton extends React.Component {
   
 

    render() {
     
		const { className, Text, onClick,   } = this.props;

		return (
            <div className={style.container}>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons"  rel="stylesheet"></link>
    
            <Button  onClick={onClick} className = {style.button}>
            <Icon className={style.icon}>highlight_off</Icon>
            <label className={style.label}>отказаться</label>
           </Button>
           <Button  onClick={onClick} className = {style.button}>
           <Icon className={style.icon}>textsms</Icon>
           <label className={style.label}>cвязаться</label>
           </Button>
           <Button  onClick={onClick} className = {style.button}>
            <Icon className={style.icon}>check_circle_outline</Icon>
           <label className={style.label}>подтвердить</label>
           </Button>
            </div>
        )}
  
    }
  
  export default EventDetailButton;

