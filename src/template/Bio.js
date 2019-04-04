import React, { Component } from 'react'
import Biocamps from './BioCamps/BioCamp'
import '../styles/css/Bio.css'

export default class Bio extends Component {
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
                                <Biocamps title={'java script'} size={'80%'} status={'Avançado'}/>
                                <p className={'TitleCamp'}>EC6</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>Node</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>React JS</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>React Redux</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>React Native</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                            </div>
                            <div className={'col-4'}>
                                <h4>Web Design</h4>
                                <p className={'TitleCamp'}>HTML</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>CSS</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                                <p className={'TitleCamp'}>WordPress</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                            </div>  
                            <div className={'col-4'}>
                                <h4>Back End</h4>
                                <p className={'TitleCamp'}>Java EE</p>
                                <div className={'Camp'}><div className={'BarraMov-iN'}><div className={'Barra'}></div></div></div>
                                <p className={'LegendaCamp'}>.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}