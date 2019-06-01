import React from 'react';
import style from './bracelet.css';

const Bracelet = (props) => {
  if (props.bracelet.imageurl === undefined) {
    return (
      <div> loading </div>
    )
  } else {
    return (
      <div>
        <img src={props.bracelet.imageurl[0]} height="150px" width="100px" />
        <div className={style.braceletPrice}>${props.bracelet.price} </div>
      </div>
    )
  }
}

export default Bracelet;