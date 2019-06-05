import React from 'react'
import Purse from './Purse.jsx';
import Earring from './Earring.jsx';
import Bracelet from './Bracelet.jsx';
import Shoe from './Shoe.jsx';
import Dress from './Dress.jsx';
import DressModal from './DressModal.jsx';
import BraceletModal from './BraceletModal.jsx';
import EarringModal from './EarringModal.jsx';
import PurseModal from './PurseModal.jsx';
import ShoeModal from './ShoeModal.jsx';
import style from './List.css';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
      rating: false,
      stars: [],
      outfitname: false,
      likes: false,
      reviewcount: 0,
    }
    this.showEarringModal = this.showEarringModal.bind(this);
    this.showBraceletModal = this.showBraceletModal.bind(this);
    this.showDressModal = this.showDressModal.bind(this);
    this.showPurseModal = this.showPurseModal.bind(this);
    this.showShoeModal = this.showShoeModal.bind(this);
    this.stars = this.stars.bind(this);
    this.likes = this.likes.bind(this);
    this.randomOutfitNames = this.randomOutfitNames.bind(this);
    this.reviewCount = this.reviewCount.bind(this);
  }

  componentDidMount() {
    this.likes()
    this.randomOutfitNames()
    this.stars()
    this.reviewCount()
  }

  reviewCount() {
    let num = Math.floor(Math.random() * 15)

    this.setState({
      reviewcount: num,
    })
  }

  likes() {
    let num = Math.floor(Math.random() * 10)

    if (this.state.likes === false) {
      this.setState({
        likes: num,
      })
    }
  }

  randomOutfitNames() {
    let outfitNames = [
      'MODERN OFFICE LOOK',
      'VACATION READY',
      'SUMMER FUN',
      'STEPPING OUT',
      'DATE NIGHT WINNER'
    ]

    let randomIndex = Math.floor(Math.random() * 5)
    let name = outfitNames[randomIndex];
    
    if (this.state.outfitname === false) {
      this.setState({
        outfitname: name,
      })
    }
  }

  stars() {
    let arr = [
      [
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>
      ],
      [
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>
      ],
      [
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z15Hx1O"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#000000" fill="#000000" stroke-width="1px"></path></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="16" class="nui-icon nui-icon-medium-star-full Z1syfzr"><path class="nui-icon-medium-star-full-0" d="M7.997 1.5l1.654 4.965H15l-4.328 3.069 1.651 4.966-4.326-3.07-4.325 3.07 1.651-4.966L1 6.465h5.346z" stroke="#e3e3e3" fill="#e3e3e3" stroke-width="1px"></path></svg>
      ]
    ]

    let randomindex = Math.floor(Math.random() * 3)
    let rating = arr[randomindex]

    if (this.state.rating === false) {
      this.setState({
        rating: true,
        stars: rating,

      })
    } else {
      console.log('hello')
    }
  }

  showEarringModal() {
    this.setState({
      earringmodal: true,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showBraceletModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: true,
      dressmodal: false,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showDressModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: true,
      pursemodal: false,
      shoemodal: false,
    })
  }

  showPurseModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: true,
      shoemodal: false,
    })
  }

  showShoeModal() {
    this.setState({
      earringmodal: false,
      braceletmodal: false,
      dressmodal: false,
      pursemodal: false,
      shoemodal: true,
    })
  }


  render() {
    if (this.props.earring === undefined || this.props.shoe === undefined || this.props.purse === undefined) {
      return (
        <div>loading</div>
      )
    } else {
      return (
        <div>
          <div className={style.componentContainer}>
            <div className={style.firstComponent}>
              <div className={style.box}>
                <div className={style.modernOfficeWrapper}>
                  <div className={style.modernOfficeDiv}>{this.state.outfitname}</div>
                  <a href="#" className={style.nodstromLink}>nordstrom</a>
                  <hr className={style.line}></hr>
                </div>
                <div className={style.gridWrapper}>
                  <div className={style.gridContainer}>
                    <div className={style.column1}>
                      <div onClick={this.showEarringModal} className={style.earringItem}> <Earring earring={this.props.earring} /></div>
                      <div onClick={this.showBraceletModal} className={style.braceletItem}><Bracelet bracelet={this.props.bracelet} /> </div>
                    </div>
                    <div className={style.column2}>
                      <div onClick={this.showDressModal} className={style.dressItem}><Dress dress={this.props.dress} /></div>
                    </div>
                    <div className={style.column3}>
                      <div onClick={this.showPurseModal} className={style.purseItem}><Purse purse={this.props.purse} /></div>
                      <div onClick={this.showShoeModal} className={style.shoeItem}><Shoe shoe={this.props.shoe} /> </div>
                    </div>
                  </div>
                </div>
                <hr className={style.line}></hr>
                <span className={style.svgHeart}>
                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="24" width="24" class="nui-icon nui-icon-large-heart-empty ">
                    <path class="nui-icon-large-heart-empty-32" d="M17.75 2.185a5.73 5.73 0 0 0-4.044 1.666l-.003.003-.007.008L12 5.556l-1.694-1.694-.009-.009-.004-.003a5.75 5.75 0 0 0-8.125 8.132L12 21.815l9.831-9.834a5.748 5.748 0 0 0-4.081-9.796z" stroke="#393939" fill="none" stroke-width="1px"></path>
                  </svg>
                </span>

                <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="24" width="17" class="nui-icon nui-icon-large-share ">
                  <path class="nui-icon-large-share-0" d="M13 8.5h3.5v15H.5v-15H4" stroke="#393939" fill="none" stroke-width="1px"></path><path class="nui-icon-large-share-1" d="M8.5 15V1M13 5L8.5.5M4 5L8.5.5" stroke="#393939" fill="none" stroke-width="1px"></path>
                </svg>

                <span className={style.randomLikes}> {this.state.likes} love this look</span>
                <div className={style.designerName}> From {this.props.earring.designer}, {this.props.shoe.designer}, {this.props.dress.designer}, {this.props.purse.designer}, and {this.props.bracelet.designer}</div>
                <div>

                </div>
              </div>
            </div>

            <div className={style.secondComponent}>
              <DressModal dress={this.props.dress} modal={this.state.dressmodal} stars={this.state.stars} likes={this.props.randomLikes} reviewcount={this.state.reviewcount}/>
              <BraceletModal bracelet={this.props.bracelet} modal={this.state.braceletmodal} />
              <EarringModal earring={this.props.earring} modal={this.state.earringmodal} />
              <PurseModal purse={this.props.purse} modal={this.state.pursemodal} />
              <ShoeModal shoe={this.props.shoe} modal={this.state.shoemodal} stars={this.state.stars} likes={this.props.randomLikes} reviewcount={this.state.reviewcount}/>
            </div>

          </div> 
        </div>
      )
    }
  }
}

export default List;

