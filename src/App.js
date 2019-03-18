import React, { Component } from 'react'
import Losa from './template/Losa'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.slim.min'
import './styles/css/App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Losa />
      </div>
    );
  }
}

export default App;
