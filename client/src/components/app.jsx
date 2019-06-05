import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import style from './app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purse: {},
      shoe: {},
      earring: {},
      shoe: {},
      bracelet: {},
      dress: {},
    }
    this.getShoe = this.getShoe.bind(this);
    this.getPurse = this.getPurse.bind(this);
    this.getEarring = this.getEarring.bind(this);
    this.getBracelet = this.getBracelet.bind(this);
    this.getDress = this.getDress.bind(this);
    this.randomLikes = this.randomLikes.bind(this);
  }

  componentDidMount() {
    this.getShoe()
    this.getPurse()
    this.getEarring()
    this.getBracelet()
    this.getDress()
  }

  getDress() {
    axios
      .get('/morelooks/api/dress')
      .then(data => this.setState({
        dress: data.data
      }))
      .catch(err => console.error(err))
  }

  getShoe() {
    axios
      .get(`/morelooks/api/shoes`)
      .then(data => this.setState({
        shoe: data.data
      }))
      .catch(err => console.error(err))
  }

  getPurse() {
    axios
      .get('/morelooks/api/purses')
      .then(data => this.setState({
        purse: data.data
      }))
      .catch(err => console.error(err))
  }

  getEarring() {
    axios
      .get('/morelooks/api/earrings')
      .then(data => this.setState({
        earring: data.data
      }))
      .catch(err => console.error(err))
  }

  getBracelet() {
    axios
      .get('/morelooks/api/bracelets')
      .then(data => this.setState({
        bracelet: data.data
      }))
      .catch(err => console.error(err))
  }

  randomLikes() {
    return Math.floor(Math.random() * 10)
  }

  render() {
    return (
      <div>
        <div className={style.looksContainer}>
          <div className={style.looksDiv}>
            <span className={style.looks} >LOOKS  </span>
            <a href="#" className={style.moreLooks}>    Shop more looks</a>
          </div>
          <List purse={this.state.purse} shoe={this.state.shoe} earring={this.state.earring} bracelet={this.state.bracelet} dress={this.state.dress} randomLikes={this.randomLikes}/>
        </div>
        <img className={style.image1} src="https://fec-nordstrom-images.s3-us-west-1.amazonaws.com/image1.png" height="100%" width="100%"/>
        <img className={style.image1} src="https://fec-nordstrom-images.s3-us-west-1.amazonaws.com/image2.jpeg" height="100%" width="100%"/>
      </div>
    )
  }
}

export default App;