import React, {Component} from 'react'
import Bar from './Bar'
import Legend from './Legend'
import AnimaLegend from './AnimaLegend'

export default class Camps extends Component {
    constructor() {
        super()
        this.state = {
            cont: 0,
            legendAnima: ['.']
        }
    }

    componentDidMount() {
        let cont = 0
        let Anima = setInterval(() => {       
            cont++
            if (cont <= 100) {
                this.setState({
                    cont: this.state.cont + 1
                })
                if ( cont % 10 === 0) {
                    console.log(this.state.cont / 5)
                    this.setState({
                        legendAnima: AnimaLegend.vetor[this.state.cont / 10]
                    }) 
                }
            } if( cont === this.props.size ) {
                this.setState({
                    legendAnima: this.props.status
                })
                clearTimeout(Anima)
            }
        }, 10)

    }

    render() {
        return (
            <div>
                <p className={'TitleCamp'}>{this.props.title}</p>
                <Bar cont={this.state.cont}/>
                <Legend status={this.state.legendAnima} />
            </div>          
        )
    }
}
