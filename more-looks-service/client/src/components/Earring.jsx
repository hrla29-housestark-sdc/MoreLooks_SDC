import React from 'react';
import style from './earring.css';

const Earring = (props) => {
  if (props.earring.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <img src={props.earring.imageurl[0]} height="30%" width="50%" className={style.earringImage}/>
        <div className={style.price}>${props.earring.price} </div>
      </div>
    )
  }
}

export default Earring;