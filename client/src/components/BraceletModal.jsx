import React from 'react';
import style from './BraceletModal.css'

class BraceletModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render () {
    return (
      <div>
        <div className={style[`componentContainer${this.props.modal}`]}>

          <div className={style.componentWrapper}>

            <div className={style.firstComponent}>
              <img className={style.image} src={this.props.bracelet.imageurl} height="550px" max-width="550px" />
            </div>

            <div className={style.secondComponent}>

              <div className={style.productName}>
                {this.props.bracelet.productname}
              </div>

              <div className={style.designer}>
                {this.props.bracelet.designer}
              </div>

              <div className={style.price}>
                ${this.props.bracelet.price} <span className={style.shipping}>Free Shipping</span>
              </div>

              <div className={style.description}>
                {this.props.bracelet.description}
              </div>

                <button className={style.addToBag}>Add to bag</button>

              <div className={style.detailsContainer}>
                <a href="#" className={style.details}> See full details</a>
              </div>


            </div>
          </div>
        
        </div>
      </div>
    )
  }
}

export default BraceletModal;
