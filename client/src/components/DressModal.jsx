import React from 'react';
import style from './DressModal.css';

class DressModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: '',
      collapse: '',
    }
    this.showSizes = this.showSizes.bind(this);
    this.collapse = this.collapse.bind(this);
  }

  showSizes() {
    this.setState({
      sizes: true,
      collapse: '',
    })
  }

  collapse() {
    this.setState({
      sizes: false,
      collapse: false,
    })
  }

  render() {
    if (this.props.dress.imageurl === undefined) {
      return (
        <div>
          loading
        </div>
      )
    } else {
      return (
        <div>
          <div className={style[`componentContainer${this.props.modal}`]} >

            <div className={style.componentWrapper} >

              <div className={style.firstComponent}>
                <img className={style.image} src={this.props.dress.imageurl[0]} height="550px" max-width="550px" />
              </div>


              <div className={style.secondComponent}>
                {this.props.stars.map(rating => {
                  return <span>{rating}</span>
                })}

                <span className={style.randomLikes}> ({this.props.reviewcount})</span>

                <div className={style.productName}>
                  {this.props.dress.productname}
                </div>

                <div className={style.designer}>
                  {this.props.dress.designer}
                </div>

                <div className={style.price}>
                  ${this.props.dress.price}
                </div>

                <div className={style.description}>
                  {this.props.dress.description}
                </div>

                <div className={style.sizeContainer}>
                    <div onClick={this.showSizes}>
                      <div className={style.size}>Size
                        <span className={style.bottomBorder}></span>
                      </div>

                    </div>
                </div>

                <div className={style[`optiontags${this.state.sizes}`]}>
                        <div className={style[`chooseSizeContainer${this.state.collapse}`]}>
                            <div className={style.chooseSize}>Choose a size. </div>
                          <div className={style[`trueToSize${this.state.collapse}`]}> True to size. XS=00, S=0-2, M=4-6, L=8-10, XL=12.</div>
                        </div>

                        <div className={style[`availableSizesContainer${this.state.collapse}`]}> 
                          {this.props.dress.clothingsizes.map(size => {
                            return <div className={style[`availableSizes${this.state.collapse}`]} onClick={this.collapse}>
                                      {size}
                                      <span className={style.sizeBottomBorder}></span>
                                  </div>
                          })}
                        </div> 

                </div>
                <div className={style.sizeGuide}> Size guides.</div>

                <div className={style.addBag}>
                  <div className={style.addToBag}>Add to bag</div>

                  <div className={style.detailsContainer}>
                    <a href="#" className={style.details}> See full details</a>
                  </div>
                </div>

              </div>
              </div>
          </div>
        </div>
      )
    }
  }
}

export default DressModal;