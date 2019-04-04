import React, {Component} from 'react'
import Bar from './Bar'

export default class Camps extends Component {
    constructor() {
        super()
        this.state = {
            cont: 0
        }
    }
    render() {
        let Anima = setInterval(() => {
            if(this.state.cont < 100) {
                console.log(this.state.cont)
                this.setState({
                    cont: this.state.cont++
                })
            } if( this.state.cont === 19 ) {
                clearTimeout(Anima)
            }
        }, 2000)
        return (
            <Bar cont={this.state.cont}/>        
        )
    }
}
