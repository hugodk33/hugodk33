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
                                <Biocamps title={'Java Script'} size={90} status={'AVANÇADO'}/>
                                <Biocamps title={'EC6'} size={70} status={'AVANÇADO'}/>
                                <Biocamps title={'Node'} size={50} status={'INTERMEDIÁRIO'}/>
                                <Biocamps title={'React Js'} size={85} status={'AVANÇADO'}/>
                                <Biocamps title={'React Redux'} size={95} status={'AVANÇADO'}/>
                                <Biocamps title={'React Native'} size={20} status={'NOÇÕES BÁSICAS'}/>
                            </div>
                            <div className={'col-4'}>
                                <h4>Web Design</h4>
                                <Biocamps title={'HTML'} size={90} status={'AVANÇADO'}/>
                                <Biocamps title={'CSS'} size={90} status={'AVANÇADO'}/>
                                <Biocamps title={'Bootstrap'} size={70} status={'AVANÇADO'}/>
                                <Biocamps title={'Word Press'} size={60} status={'INTERMEDIÁRIO'}/>
                            </div>  
                            <div className={'col-4'}>
                                <h4>Back End</h4>
                                <Biocamps title={'Java EE'} size={20} status={'NOÇÕES BÁSICAS'}/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}