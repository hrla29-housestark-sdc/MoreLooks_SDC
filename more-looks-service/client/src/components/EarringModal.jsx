import React from 'react';
import style from './EarringModal.css';


class EarringModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div>
        <div className={style[`componentContainer${this.props.modal}`]}> 

          <div className={style.componentWrapper}>

            <div className={style.firstComponent}>
              <img className={style.image} src={this.props.earring.imageurl} height="550px" max-width="450px" />
            </div>

            <div className={style.secondComponent}>
              <div className={style.productName}>
                {this.props.earring.productname}
              </div>

              <div className={style.designerBox}>
                <div className={style.designer}>
                  {this.props.earring.designer}
                </div>
              </div>

              <div className={style.price}>
                ${this.props.earring.price} <span className={style.shipping}>Free Shipping</span>
              </div>

              <div className={style.description}>
                {this.props.earring.description}
              </div>

              <div className={style.addBag}>
                <button className={style.addToBag}>Add to bag</button>
              </div>

              <div className={style.detailsContainer}>
                <a href="#" className={style.details}>See full details</a>
              </div>

            
            </div>

          </div>
        
        </div>
      </div>
    )
  }
}

export default EarringModal;
