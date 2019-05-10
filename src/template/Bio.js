import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Biocamps from './BioCamps/BioCamp'
import Biocamps2 from './BioCamps/BIoCampsTeste'
import '../styles/css/Bio.css'
import AnimaBios from './AnimaBios'

class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AnimaBios: AnimaBios.dois
        }
    }
  
    componentDidMount() {
        console.log('bio')
        console.log(this.props)
    }

    render() {
        return(
            <section>
                <div className={'BioSection'}>
                    <div className={'container bio'}>
                        <div className={'row'}>
                            <div className={'col-md-5 col-4'} style={{paddingRight: '0'}}><hr /></div>
                            <div className={'col-md-2  col-4 TitlePericia'}>
                                <h2>Skills</h2> 
                            </div>
                            <div className={'col-md-5 col-4'} style={{paddingLeft: '0'}}><hr /></div>
                            <div className={'col-md-3 col-sm-6 col-6'}>
                                <h4 style={{color: '#a8a8ff'}}>Front End</h4>
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.js} />: <Biocamps data={this.props.anima.animaBios.js} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.ec6} />: <Biocamps data={this.props.anima.animaBios.ec6} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.node} />: <Biocamps data={this.props.anima.animaBios.node} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.reactjs} />: <Biocamps data={this.props.anima.animaBios.reactjs} />}
                            </div>
                            <div className={'col-md-3 col-sm-6 col-6'}>
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.angular} />: <Biocamps data={this.props.anima.animaBios.angular} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.reactredux} />: <Biocamps data={this.props.anima.animaBios.reactredux} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.reactnative} />: <Biocamps data={this.props.anima.animaBios.reactnative} />}
                            </div>
                            <div className={'col-md-3 col-sm-6 col-6'}>
                                <h4 style={{color: '#a8a8ff'}}>Web Design</h4>
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.html} />: <Biocamps data={this.props.anima.animaBios.html} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.css} />: <Biocamps data={this.props.anima.animaBios.css} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.bootstrap} />: <Biocamps data={this.props.anima.animaBios.bootstrap} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.wordpress} />: <Biocamps data={this.props.anima.animaBios.wordpress} />}
                            </div>
                            <div className={'col-md-3 col-sm-6 col-6'}>
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.sass} />: <Biocamps data={this.props.anima.animaBios.sass} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.gulp} />: <Biocamps data={this.props.anima.animaBios.gulp} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.illustrator} />: <Biocamps data={this.props.anima.animaBios.illustrator} />}
                                {this.props.anima.animaBios.js.tamanho === 0? <Biocamps2 data={this.props.anima.animaBios.photoshop} />: <Biocamps data={this.props.anima.animaBios.photoshop} />}
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({anima: state? state.animaBios? console.log('dae'): {animaBios: AnimaBios.dois}: {animaBios: AnimaBios.um}})  
const mapDispatchToProps = dispatch => 
    bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Bio)