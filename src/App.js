import React, { Component } from 'react'
import Losa from './template/Losa'
import Bio from './template/Bio'
import Port from './template/Port'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.slim.min'
import './styles/css/App.css'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      AnimaBio: false
    }
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 200) {
      if(!this.state.AnimaBio === true) {
        this.setState({
          AnimaBio: true
        })      
      }
    }
  }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }

  render() {
    return (
      <div>
        <Losa />
        <Bio anima={this.state.AnimaBio}/>
        <Port />
      </div>
    );
  }
}

export default App;
