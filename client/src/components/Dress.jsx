import React from 'react';
import style from './Dress.css';

class Dress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      backButton: '',
      forwardButton: '',
    }
    this.decreaseIndex = this.decreaseIndex.bind(this);
    this.increaseIndex = this.increaseIndex.bind(this);
    this.showArrows = this.showArrows.bind(this);
    this.hideArrows = this.hideArrows.bind(this);
  }

  decreaseIndex() {
    if (this.state.index === 0) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index -= 1,
      })
    }
  }

  increaseIndex() {
    if (this.state.index === this.props.dress.imageurl.length - 1) {
      this.setState({
        index: this.state.index
      })
    } else {
      this.setState({
        index: this.state.index += 1,
      })
    }
  }

  showArrows() {
    this.setState({
      backButton: true,
      forwardButton: true,
    })
  }

  hideArrows() {
    this.setState({
      backButton: '',
      forwardButton: '',
    })
  }

  render() {
    if (this.props.dress.imageurl === undefined) {
      return (
        <div> loading </div>
      )
    } else {
      return (
        <div>
            <div className={style.carouselWrapper} onMouseOver={() => this.showArrows()} onMouseOut={() => this.hideArrows()}>
              <div className={style.backButton + this.state.backButton}>
                <div onClick={this.decreaseIndex} className={style.carouselBackButton} onMouseOut={() => this.hideArrows()}>
                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" class="nui-icon nui-icon-medium-chevron-left ">
                  <path class="nui-icon-medium-chevron-left-0" d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" stroke-width="1px"></path>
                </svg>
                </div>
              </div>
              <div className={style.dressImageContainer}>
                <img onClick={this.showModal} onMouseOver={() => this.showArrows()} src={this.props.dress.imageurl[this.state.index]} className={style.dressImage} height="240%" width="200%" />
              </div>
              <div onClick={this.increaseIndex} onMouseOut={() => this.hideArrows()} className={style.forwardButton + this.state.forwardButton} >
                <div className={style.svgForwardButton} onClick={this.increaseIndex} onMouseOut={() => this.hideArrows()}>
                <svg class="nui-icon-nui-icon-medium-chevron-right " xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" class="nui-icon nui-icon-medium-chevron-left ">
                  <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" stroke-width="1px"></path>
                </svg>
              </div>
                </div>
              </div>

            <div className={style.dressPrice}> ${this.props.dress.price} </div>
        </div>
      )
    }
  }
}

export default Dress;
