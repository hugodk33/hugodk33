import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Losa from './template/Losa'
import Bio from './template/Bio'
import Port from './template/Port'
import { AnimaBio } from './redux/actions'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.slim.min'
import './styles/css/App.css'

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      animaB: false
    }
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 400) {
      if(this.state.animaB === false) { 
        this.props.AnimaBio(true)
        this.setState({
          animaB: true
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
        <Bio />
        <Port />
      </div>
    );
  }
}

const mapStateToProps = state => ({})  
const mapDispatchToProps = dispatch => 
    bindActionCreators({AnimaBio}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
