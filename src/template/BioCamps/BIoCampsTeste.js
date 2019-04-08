import React, {Component} from 'react'
import Bar from './Bar'
import Legend from './Legend'
import AnimaLegend from './AnimaLegend'

export default class CampsTeste extends Component {
    constructor() {
        super()
        this.state = {
            cont: 0,
            legendAnima: ['.']
        }
    }

    componentDidMount() {
        let cont = 0
        //if( this.props.data.tamanho !== 0) {
            console.log('!--0')
            let Anima = setInterval(() => { 
                console.log('this.props.data.tamanho')
                console.log(this.props.data.tamanho)      
                if(this.props.data.tamanho === 0) {
                    console.log('entrou aqui')
                    cont = 0;
                    clearTimeout(Anima)
                }
                cont++
                if (cont <= 100) {
                    this.setState({
                        cont: this.state.cont + 1
                    })
                    if ( cont % 10 === 0) {
                        this.setState({
                            legendAnima: AnimaLegend.vetor[this.state.cont / 10]
                        }) 
                    }
                } if( cont === this.props.data.tamanho ) {
                    this.setState({
                        legendAnima: this.props.data.status
                    })
                    clearTimeout(Anima)
                }
            }, 10)
        //}
    }

    render() {
        return (
            <div>
                <p className={'TitleCamp'}>{this.props.data.titulo}</p>
                <Bar cont={this.state.cont}/>
                <Legend status={this.state.legendAnima} />
            </div>          
        )
    }
}
