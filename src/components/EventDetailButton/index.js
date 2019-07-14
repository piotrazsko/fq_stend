import React from 'react'
import style from './style.module.scss'
import Button from '@material-ui/core/Button'
import PropTypes from "prop-types";
import Icon from '@material-ui/core/Icon';
import cancel from "../../static/images/1271.jpg";


import DeleteIcon from '@material-ui/icons/Delete';


class EventDetailButton extends React.Component {
   
 

    render() {
     
		const { className, Text, onClick,  } = this.props;

		return (
            <div className={style.container}>
            <Button variant="outlined" onClick={onClick} className = {style.button}>
            <DeleteIcon className={style.icon}/>
            <label className={style.label}>{Text}</label>
           </Button>
           <Button variant="outlined" onClick={onClick} className = {style.button}>
            <DeleteIcon className={style.icon}/>
           <label className={style.label}>{Text}</label>
           </Button>
           <Button variant="outlined" onClick={onClick} className = {style.button}>
            <DeleteIcon className={style.icon}/>
           <label className={style.label}>{Text}</label>
           </Button>
            </div>
        )}
  
    }
  
  export default EventDetailButton;

