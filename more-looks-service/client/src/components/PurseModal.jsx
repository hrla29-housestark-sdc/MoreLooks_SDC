import React from 'react';
import style from './PurseModal.css'

class PurseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    if (this.props.purse.imageurl === undefined) {
      return (
        <div>
          loading
        </div>
      )
    } else {
      return (
        <div>
          <div className={style[`componentContainer${this.props.modal}`]}>
            <div className={style.componentWrapper}>

              <div className={style.firstComponent}>
                <img className={style.image} src={this.props.purse.imageurl[0]} height="400px" width="400px"/>
              </div>

              <div className={style.secondComponent}>
                <div className={style.productName}>
                  {this.props.purse.productname}
                </div>

                <div className={style.designer}>
                  {this.props.purse.designer}
                </div>

                <div className={style.price}>
                  ${this.props.purse.price} <span className={style.shipping}>Free Shipping</span>
                </div>

                <div className={style.description}>
                  {this.props.purse.description}
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
}


export default PurseModal;