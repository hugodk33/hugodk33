import React, { Component } from 'react'
import Biocamps from './BioCamps/BioCamp'
import Biocamps2 from './BioCamps/BIoCampsTeste'
import '../styles/css/Bio.css'
import AnimaBios from './AnimaBios'

export default class Bio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AnimaBios: AnimaBios.dois
        }
    }

    componentDidMount () {
       if(this.props.anima) {
           alert('deu certo')
       }
    }
    
    render() {
        return(
            <section>
                <div className={'BioSection'}>
                    <div className={'container bio'}>
                        <div className={'row'}>
                            <div className={'col-12 TitlePericia'}>
                                <h2>Perícias</h2> <hr />
                            </div>
                            <div className={'col-4'}>
                                <h4>Front End</h4>
                                <Biocamps2 data={this.state.AnimaBios.js} />
                                <Biocamps2 data={this.state.AnimaBios.ec6} />
                                <Biocamps2 data={this.state.AnimaBios.node} />
                                <Biocamps2 data={this.state.AnimaBios.reactjs} />
                                <Biocamps2 data={this.state.AnimaBios.angular} />
                                <Biocamps2 data={this.state.AnimaBios.reactredux} />
                                <Biocamps2 data={this.state.AnimaBios.reactnative} />
                            </div>
                            <div className={'col-4'}>
                                <h4>Web Design</h4>
                                <Biocamps2 data={this.state.AnimaBios.html} />
                                <Biocamps2 data={this.state.AnimaBios.css} />
                                <Biocamps2 data={this.state.AnimaBios.bootstrap} />
                                <Biocamps2 data={this.state.AnimaBios.wordpress} />
                                <Biocamps2 data={this.state.AnimaBios.sass} />
                                <Biocamps2 data={this.state.AnimaBios.gulp} />
                                <Biocamps2 data={this.state.AnimaBios.illustrator} />
                                <Biocamps2 data={this.state.AnimaBios.photoshop} />
                            </div>  
                            <div className={'col-4'}>
                                <h4>Back End</h4>
                                <Biocamps2 data={this.state.AnimaBios.javaee} />
                                <Biocamps2 data={this.state.AnimaBios.mongodb} />
                                <Biocamps2 data={this.state.AnimaBios.typescript} />
                                <Biocamps2 data={this.state.AnimaBios.mysql} />
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}